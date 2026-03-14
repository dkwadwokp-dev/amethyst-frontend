import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Bed, Utensils, ChevronDown } from "lucide-react";
import { Button } from "../../shared/ui/button";
import { rooms } from "../../rooms/data/rooms";
import { roomInstances } from "../../rooms/data/room-instances";
import { diningAreas, tableInstances } from "../data/tables";

import { bookingSchema, type BookingFormData } from "../schema/booking-schema";
import { BookingCalendar } from "./booking-calendar";
import { BookingTimePicker } from "./booking-time-picker";
import { BookingUserDetails } from "./booking-user-details";
import { useCreateBooking } from "../actions/use-create-booking";
import { useCheckAvailability } from "../actions/use-check-availability";

const BookForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize from search params
  const initialType = (searchParams.get("type") as "room" | "dining") || "room";
  const initialItemType =
    searchParams.get("itemType") ||
    (initialType === "room" ? rooms[0]?.id : diningAreas[0]?.id) ||
    "rm_01";
  const initialItem = searchParams.get("item") || "";

  const [formData, setFormData] = useState<BookingFormData>({
    type: initialType,
    itemType: initialItemType,
    item: initialItem,
    guests: 2,
    firstName: "",
    lastName: "",
    email: "",
    checkIn: undefined,
    checkOut: undefined,
    diningDate: undefined,
  } as unknown as BookingFormData);

  // Sync search params with form data
  useEffect(() => {
    const params: any = {};
    if (formData.type) params.type = formData.type;
    if (formData.itemType) params.itemType = formData.itemType;
    if (formData.item) params.item = formData.item;

    // Check if params actually changed to avoid infinite loop or unnecessary history entries
    const currentParams = Object.fromEntries(searchParams.entries());
    const hasChanged =
      Object.keys(params).length !== Object.keys(currentParams).length ||
      Object.entries(params).some(
        ([key, value]) => String(value) !== currentParams[key],
      );

    if (hasChanged) {
      setSearchParams(params, { replace: true });
    }
  }, [
    formData.type,
    formData.itemType,
    formData.item,
    setSearchParams,
    searchParams,
  ]);

  const [errors, setErrors] = useState<any>({});
  const { mutateAsync: createBooking, isPending: isSubmitting } =
    useCreateBooking();

  const { type: activeTab, itemType, item, guests } = formData;

  const checkIn = activeTab === "room" ? (formData as any).checkIn : undefined;
  const checkOut =
    activeTab === "room" ? (formData as any).checkOut : undefined;
  const diningDate =
    activeTab === "dining" ? (formData as any).diningDate : undefined;
  const arrivalHour =
    activeTab === "dining" ? (formData as any).arrivalHour : undefined;
  const departureHour =
    activeTab === "dining" ? (formData as any).departureHour : undefined;

  const {
    data: availabilityData,
    isLoading: isCheckingAvailability,
    error: availabilityError,
  } = useCheckAvailability({
    type: activeTab,
    item,
  });
  const isAvailable = availabilityData?.bookedPeriods?.length === 0;
  const validate = () => {
    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: any = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = { message: issue.message };
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const updateField = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    // Clear error for that field
    if (errors[field]) {
      setErrors((prev: any) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    updateField(name, value);
  };

  // Sync instances/tables when itemType or type changes
  useEffect(() => {
    if (activeTab === "room" && itemType) {
      const newInstances = roomInstances.filter(
        (inst) => inst.roomId === itemType,
      );
      if (newInstances.length > 0) {
        setFormData(
          (prev) =>
            ({
              ...prev,
              item: newInstances[0].id,
              checkIn: undefined,
              checkOut: undefined,
            }) as any,
        );
      }
    } else if (activeTab === "dining" && itemType) {
      const newTables = tableInstances.filter((tbl) => tbl.areaId === itemType);
      if (newTables.length > 0) {
        setFormData(
          (prev) =>
            ({
              ...prev,
              item: newTables[0].id,
              diningDate: undefined,
              arrivalHour: undefined,
              departureHour: undefined,
            }) as any,
        );
      }
    }
  }, [itemType, activeTab]);

  const availableInstances = roomInstances.filter(
    (inst) => inst.roomId === itemType,
  );
  const availableTables = tableInstances.filter(
    (tbl) => tbl.areaId === itemType,
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      console.log("Submitting Raw Form Data:", formData);

      const payload: BookingFormData = {
        ...formData,
        guests: Number(formData.guests),
      };

      console.log("Submitting API Payload:", payload);
      await createBooking(payload);

      alert(
        `Thank you ${formData.firstName}! Your ${formData.type} booking is ready.`,
      );
      setFormData({
        type: initialType,
        itemType: initialItemType,
        item: initialItem,
        guests: 2,
        firstName: "",
        lastName: "",
        email: "",
      } as any);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to create booking. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100  w-full max-w-2xl mx-auto -mt-16 md:-mt-24 relative z-10">
      {/* Top Tabs */}
      <div className="flex w-full mb-8 border-b border-gray-100">
        <button
          type="button"
          onClick={() => {
            setFormData(
              (prev) =>
                ({ ...prev, type: "room", itemType: rooms[0].id }) as any,
            );
          }}
          className={`w-1/2 py-6 flex items-center justify-center gap-3 border-t-2 transition-colors ${
            activeTab === "room"
              ? "border-primary text-primary bg-gray-50/50"
              : "border-transparent text-gray-400 hover:bg-gray-50"
          }`}
        >
          <Bed className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-widest uppercase">
            Room
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setFormData(
              (prev) =>
                ({
                  ...prev,
                  type: "dining",
                  itemType: diningAreas[0].id,
                }) as any,
            );
          }}
          className={`w-1/2 py-6 flex items-center justify-center gap-3 border-t-2 transition-colors ${
            activeTab === "dining"
              ? "border-primary text-primary bg-gray-50/50"
              : "border-transparent text-gray-400 hover:bg-gray-50"
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-widest uppercase">
            Dining
          </span>
        </button>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-8">
        {/* Select Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              {activeTab === "room"
                ? "Select Room Type"
                : "Select Seating Area"}
            </label>
            <div className="relative">
              <select
                name="itemType"
                value={itemType}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-200 text-gray-900 text-sm p-4 rounded-none focus:outline-none focus:border-gray-900 bg-transparent"
              >
                {activeTab === "room" ? (
                  <>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.title}
                      </option>
                    ))}
                  </>
                ) : (
                  <>
                    {diningAreas.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.title}
                      </option>
                    ))}
                  </>
                )}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              {activeTab === "room" ? "Select Room Number" : "Select Table"}
            </label>
            <div className="relative">
              <select
                name="item"
                value={item}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-200 text-gray-900 text-sm p-4 rounded-none focus:outline-none focus:border-gray-900 bg-transparent"
              >
                {activeTab === "room"
                  ? availableInstances.map((inst) => (
                      <option key={inst.id} value={inst.id}>
                        Room {inst.roomNumber}
                      </option>
                    ))
                  : availableTables.map((tbl) => (
                      <option key={tbl.id} value={tbl.id}>
                        Table {tbl.tableNumber} (Seats {tbl.capacity})
                      </option>
                    ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Date / Calendar Picker */}
        <BookingCalendar
          activeTab={activeTab}
          item={item}
          errors={errors}
          checkIn={checkIn}
          checkOut={checkOut}
          diningDate={diningDate}
          setFormData={setFormData}
          availabilityData={availabilityData}
          isCheckingAvailability={isCheckingAvailability}
        />

        {/* Time Slots (Only visible when Dining active && date selected) */}
        {activeTab === "dining" && diningDate && (
          <BookingTimePicker
            item={item}
            diningDate={diningDate}
            arrivalHour={arrivalHour}
            departureHour={departureHour}
            errors={errors}
            setFormData={setFormData}
          />
        )}

        {/* Guests / Capacity */}
        <div>
          <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-3">
            GUESTS
          </label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, "6+"].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => updateField("guests", num)}
                className={`flex-1 min-w-[3rem] py-3 text-sm font-semibold border transition-colors ${
                  guests === num
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          {errors.guests && (
            <p className="text-[10px] text-primary font-bold mt-2">
              {errors.guests.message}
            </p>
          )}
        </div>

        {/* User Details */}
        <BookingUserDetails
          formData={formData}
          errors={errors}
          handleChange={handleChange}
        />

        {/* Submit */}
        <div className="pt-6">
          {availabilityError && (
            <p className="text-[10px] text-primary font-bold mb-4 text-center">
              Failed to check availability. Please try again later.
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || isCheckingAvailability}
            className="w-full bg-primary hover:bg-black text-white px-6 py-5 text-[11px] font-bold tracking-widest rounded-none border-none shadow-none disabled:opacity-50"
          >
            {isSubmitting
              ? "PROCESSING..."
              : isCheckingAvailability
                ? "CHECKING AVAILABILITY..."
                : activeTab === "room"
                  ? "COMPLETE BOOKING REQUEST"
                  : "RESERVE TABLE"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;

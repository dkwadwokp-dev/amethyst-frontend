import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Bed, Utensils, ChevronDown, CalendarDays, Clock } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../shared/ui/button";
import { rooms } from "../../rooms/data/rooms";
import { roomInstances } from "../../rooms/data/room-instances";
import { diningAreas, tableInstances } from "../data/tables";
import { bookingSchema, type BookingFormData } from "../schema/booking-schema";

const BookForm = () => {
  const [searchParams] = useSearchParams();
  const initialRoom = searchParams.get("room") || rooms[0]?.id || "rm_01";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      type: "room",
      selectedRoom: initialRoom,
      guests: 2,
    },
  });

  const activeTab = useWatch({ control, name: "type" });
  const selectedRoom = watch("selectedRoom");
  const selectedInstance = watch("selectedInstance");
  const selectedDiningArea = watch("selectedDiningArea");
  const selectedTable = watch("selectedTable");
  const guests = watch("guests");

  // Date/Time watchers (need careful handling since they can be undefined)
  const checkIn = activeTab === "room" ? (watch() as any).checkIn : null;
  const checkOut = activeTab === "room" ? (watch() as any).checkOut : null;
  const diningDate =
    activeTab === "dining" ? (watch() as any).diningDate : null;
  const diningTime =
    activeTab === "dining" ? (watch() as any).diningTime : null;

  // Sync instances when room type changes
  useEffect(() => {
    if (activeTab === "room" && selectedRoom) {
      const newInstances = roomInstances.filter(
        (inst) => inst.roomId === selectedRoom,
      );
      if (newInstances.length > 0) {
        setValue("selectedInstance", newInstances[0].id);
      }
      // Reset dates when room type changes
      setValue("checkIn" as any, undefined);
      setValue("checkOut" as any, undefined);
    }
  }, [selectedRoom, activeTab, setValue]);

  // Sync tables when dining area changes
  useEffect(() => {
    if (activeTab === "dining" && selectedDiningArea) {
      const newTables = tableInstances.filter(
        (tbl) => tbl.areaId === selectedDiningArea,
      );
      if (newTables.length > 0) {
        setValue("selectedTable", newTables[0].id);
      }
      // Reset selections
      setValue("diningDate" as any, undefined);
      setValue("diningTime" as any, undefined);
    }
  }, [selectedDiningArea, activeTab, setValue]);

  const availableInstances = roomInstances.filter(
    (inst) => inst.roomId === selectedRoom,
  );
  const availableTables = tableInstances.filter(
    (tbl) => tbl.areaId === selectedDiningArea,
  );

  const today = new Date();
  const currentMonthName = today
    .toLocaleString("default", { month: "long" })
    .toUpperCase();
  const currentYear = today.getFullYear();
  const monthLabel = `${currentMonthName} ${currentYear}`;

  const daysInCurrentMonth = new Date(
    currentYear,
    today.getMonth() + 1,
    0,
  ).getDate();
  const calendarDays = Array.from(
    { length: daysInCurrentMonth },
    (_, i) => i + 1,
  );
  const currentDay = today.getDate();
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();

  const currentInstanceObj = roomInstances.find(
    (i) => i.id === selectedInstance,
  );
  const currentBookedRanges = currentInstanceObj?.bookedDates || [];

  const currentTableObj = tableInstances.find((t) => t.id === selectedTable);
  const tableDayBookings =
    currentTableObj?.bookings.find((b) => b.date === diningDate)?.bookedTimes ||
    [];

  const isDayBooked = (day: number) => {
    return currentBookedRanges.some((r) => day >= r.start && day <= r.end);
  };

  const handleDateClick = (day: number) => {
    if (activeTab === "room") {
      if (!checkIn || (checkIn && checkOut)) {
        setValue("checkIn" as any, day, { border: true } as any);
        setValue("checkOut" as any, undefined);
      } else if (day > checkIn) {
        let valid = true;
        for (let i = checkIn; i <= day; i++) {
          if (isDayBooked(i)) {
            valid = false;
            break;
          }
        }
        if (valid) {
          setValue("checkOut" as any, day, { shouldValidate: true });
        } else {
          setValue("checkIn" as any, day);
          setValue("checkOut" as any, undefined);
        }
      } else {
        setValue("checkIn" as any, day);
      }
    } else {
      setValue("diningDate" as any, day, { shouldValidate: true });
    }
  };

  const getDateStyle = (day: number, isUnavailable: boolean) => {
    if (isUnavailable)
      return "text-gray-300 bg-gray-50 cursor-not-allowed border border-gray-100";

    if (activeTab === "room") {
      if (checkIn === day || checkOut === day)
        return "bg-primary text-white font-bold shadow-sm";
      if (checkIn && checkOut && day > checkIn && day < checkOut)
        return "bg-gray-100 text-primary font-semibold";
      return "text-gray-600 hover:bg-gray-100";
    } else {
      return diningDate === day
        ? "bg-primary text-white font-bold shadow-sm"
        : "text-gray-600 hover:bg-gray-100";
    }
  };

  const onSubmit = (data: BookingFormData) => {
    console.log("Booking data:", data);
    alert(
      `Thank you ${data.firstName}! Your booking request for ${data.type === "room" ? "a room" : "a table"} has been received.`,
    );
    reset();
  };

  return (
    <div className="bg-white p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100  w-full max-w-2xl mx-auto -mt-16 md:-mt-24 relative z-10">
      {/* Top Tabs */}
      <div className="flex w-full mb-8 border-b border-gray-100">
        <button
          onClick={() => {
            setValue("type", "room");
            setValue("selectedRoom", rooms[0].id);
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
          onClick={() => {
            setValue("type", "dining");
            setValue("selectedDiningArea" as any, diningAreas[0].id);
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                {...(activeTab === "room"
                  ? register("selectedRoom")
                  : register("selectedDiningArea" as any))}
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
                {...(activeTab === "room"
                  ? register("selectedInstance")
                  : register("selectedTable" as any))}
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
        <div
          className={`border ${activeTab === "room" ? ((errors as any).checkIn || (errors as any).checkOut ? "border-red-400" : "border-gray-100") : (errors as any).diningDate ? "border-red-400" : "border-gray-100"} p-4`}
        >
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <span className="text-xs font-bold font-manrope text-gray-900 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-gray-400" />
              {activeTab === "room" ? "CHECK-IN — CHECK-OUT" : "SELECT DATE"}
            </span>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
              {monthLabel}
            </span>
          </div>

          <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-2">
            {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((day) => (
              <div
                key={day}
                className="text-[9px] font-bold text-gray-300 tracking-widest uppercase"
              >
                {day}
              </div>
            ))}

            {/* Empty slots for month start padding */}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`}></div>
            ))}

            {calendarDays.map((day) => {
              const isPast = day < currentDay;
              const isBooked = activeTab === "room" && isDayBooked(day);
              const isUnavailable = isPast || isBooked;

              return (
                <div key={day} className="flex justify-center items-center">
                  <button
                    type="button"
                    disabled={isUnavailable}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDateClick(day);
                    }}
                    className={`w-8 h-8 flex items-center justify-center text-xs transition-colors  ${getDateStyle(day, isUnavailable)}`}
                  >
                    {isBooked && !isPast ? "X" : day}
                  </button>
                </div>
              );
            })}
          </div>
          {activeTab === "room" &&
            ((errors as any).checkIn || (errors as any).checkOut) && (
              <p className="text-[10px] text-primary font-bold mt-2">
                {(errors as any).checkIn?.message ||
                  (errors as any).checkOut?.message}
              </p>
            )}
          {activeTab === "dining" && (errors as any).diningDate && (
            <p className="text-[10px] text-primary font-bold mt-2">
              {(errors as any).diningDate.message}
            </p>
          )}
        </div>

        {/* Time Slots (Only visible when Dining active && date selected) */}
        {activeTab === "dining" && diningDate && (
          <div className="animate-in fade-in slide-in-from-top-4">
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
              <Clock className="w-3 h-3" /> AVAILABLE SEATING TIMES
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {[17, 18, 19, 20, 21, 22].map((hour) => {
                const isTimeBooked = tableDayBookings.some(
                  (b) => hour >= b.startHour && hour < b.endHour,
                );

                return (
                  <button
                    key={hour}
                    type="button"
                    disabled={isTimeBooked}
                    onClick={() =>
                      setValue("diningTime" as any, hour, {
                        shouldValidate: true,
                      })
                    }
                    className={`py-3 text-xs font-semibold border transition-colors ${
                      isTimeBooked
                        ? "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                        : diningTime === hour
                          ? "border-primary bg-primary text-white shadow-sm"
                          : "border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {hour === 12
                      ? "12 PM"
                      : hour > 12
                        ? `${hour - 12} PM`
                        : `${hour} AM`}
                  </button>
                );
              })}
            </div>
            {(errors as any).diningTime && (
              <p className="text-[10px] text-primary font-bold mt-2">
                {(errors as any).diningTime.message}
              </p>
            )}
          </div>
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
                onClick={() => setValue("guests", num as any)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              FIRST NAME
            </label>
            <input
              {...register("firstName")}
              type="text"
              className={`w-full border-b ${errors.firstName ? "border-primary" : "border-gray-200"} p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300`}
              placeholder="e.g. Jane"
            />
            {errors.firstName && (
              <p className="text-[10px] text-primary font-bold mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              LAST NAME
            </label>
            <input
              {...register("lastName")}
              type="text"
              className={`w-full border-b ${errors.lastName ? "border-primary" : "border-gray-200"} p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300`}
              placeholder="e.g. Doe"
            />
            {errors.lastName && (
              <p className="text-[10px] text-primary font-bold mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2 mt-4">
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              EMAIL ADDRESS
            </label>
            <input
              {...register("email")}
              type="email"
              className={`w-full border-b ${errors.email ? "border-primary" : "border-gray-200"} p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300`}
              placeholder="jane.doe@example.com"
            />
            {errors.email && (
              <p className="text-[10px] text-primary font-bold mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-black text-white px-6 py-5 text-[11px] font-bold tracking-widest rounded-none border-none shadow-none disabled:opacity-50"
          >
            {isSubmitting
              ? "PROCESSING..."
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

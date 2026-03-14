import { tableInstances } from "../data/tables";
import { Clock } from "lucide-react";
import { getTimeStyle } from "../utils/book-utils";

interface BookingTimePickerProps {
  item: string;
  diningDate: number | null;
  arrivalHour: number | null;
  departureHour: number | null;
  errors: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const BookingTimePicker = ({
  item,
  diningDate,
  arrivalHour,
  departureHour,
  errors,
  setFormData,
}: BookingTimePickerProps) => {
  const currentTableObj = tableInstances.find((t) => t.id === item);
  const tableDayBookings =
    currentTableObj?.bookings.find((b) => b.date === diningDate)?.bookedTimes ||
    [];

  const handleTimeClick = (hour: number) => {
    if (!arrivalHour || (arrivalHour && departureHour)) {
      setFormData((prev: any) => ({
        ...prev,
        arrivalHour: hour,
        departureHour: undefined,
      }));
    } else if (hour > arrivalHour) {
      if (hour - arrivalHour > 3) {
        // Enforce 3 hour max limit
        setFormData((prev: any) => ({
          ...prev,
          arrivalHour: hour,
          departureHour: undefined,
        }));
        return;
      }

      const hasConflict = tableDayBookings.some(
        (b: any) => hour > b.startHour && arrivalHour < b.endHour,
      );

      if (!hasConflict) {
        setFormData((prev: any) => ({ ...prev, departureHour: hour }));
      } else {
        setFormData((prev: any) => ({
          ...prev,
          arrivalHour: hour,
          departureHour: undefined,
        }));
      }
    } else {
      setFormData((prev: any) => ({ ...prev, arrivalHour: hour }));
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-top-4">
      <div className="flex justify-between items-end mb-3">
        <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase flex items-center gap-2">
          <Clock className="w-3 h-3" /> ARRIVAL — DEPARTURE (SEATING TIMES)
        </label>
        <span className="text-[9px] text-primary font-bold tracking-tight uppercase">
          Max 3 hours
        </span>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {Array.from({ length: 16 }, (_, i) => i + 8).map((hour) => {
          const isTimeBooked = tableDayBookings.some(
            (b: any) => hour >= b.startHour && hour < b.endHour,
          );

          return (
            <button
              key={hour}
              type="button"
              disabled={isTimeBooked}
              onClick={() => handleTimeClick(hour)}
              className={`py-3 text-xs font-semibold border transition-colors ${
                isTimeBooked
                  ? "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                  : getTimeStyle(hour, arrivalHour, departureHour)
              }`}
            >
              {hour === 0
                ? "12 AM"
                : hour === 12
                  ? "12 PM"
                  : hour > 12
                    ? `${hour - 12} PM`
                    : `${hour} AM`}
            </button>
          );
        })}
      </div>
      {(errors.arrivalHour || errors.departureHour) && (
        <p className="text-[10px] text-primary font-bold mt-2">
          {errors.arrivalHour?.message || errors.departureHour?.message}
        </p>
      )}
    </div>
  );
};

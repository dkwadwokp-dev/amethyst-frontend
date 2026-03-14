import { Clock } from "lucide-react";
import { getTimeStyle } from "../utils/book-utils";

interface BookingTimePickerProps {
  item: string;
  diningDate: string | undefined;
  arrivalHour: number | undefined;
  departureHour: number | undefined;
  errors: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  availabilityData?: any;
  isCheckingAvailability?: boolean;
}

export const BookingTimePicker = ({
  diningDate,
  arrivalHour,
  departureHour,
  errors,
  setFormData,
  availabilityData,
}: BookingTimePickerProps) => {
  const tableDayBookings = (availabilityData?.bookedPeriods || [])
    .filter((p: any) => {
      if (!diningDate) return false;
      const bookingStart = new Date(p.start);
      const selected = new Date(diningDate);
      return (
        bookingStart.getFullYear() === selected.getFullYear() &&
        bookingStart.getMonth() === selected.getMonth() &&
        bookingStart.getDate() === selected.getDate()
      );
    })
    .map((p: any) => {
      const start = new Date(p.start).getUTCHours();
      const end = new Date(p.end).getUTCHours();
      return { startHour: start, endHour: end };
    });

  const handleTimeClick = (hour: number) => {
    // Normalize hours for comparison (4 PM is base, things after midnight are +24)
    const norm = (h: number) => (h < 4 ? h + 24 : h);
    const normalizedHour = norm(hour);
    const normalizedArrival =
      arrivalHour !== undefined ? norm(arrivalHour) : undefined;

    if (
      !arrivalHour ||
      (arrivalHour !== undefined && departureHour !== undefined)
    ) {
      setFormData((prev: any) => ({
        ...prev,
        arrivalHour: hour,
        departureHour: undefined,
      }));
    } else if (normalizedHour > normalizedArrival!) {
      if (normalizedHour - normalizedArrival! > 3) {
        // Enforce 3 hour max limit
        setFormData((prev: any) => ({
          ...prev,
          arrivalHour: hour,
          departureHour: undefined,
        }));
        return;
      }

      const hasConflict = tableDayBookings.some((b: any) => {
        const bStart = norm(b.startHour);
        const bEnd = norm(b.endHour);
        return normalizedHour > bStart && normalizedArrival! < bEnd;
      });

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
    <div className="animate-in fade-in slide-in-from-top-4 relative">
      <div className="flex justify-between items-end mb-3">
        <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase flex items-center gap-2">
          <Clock className="w-3 h-3" /> ARRIVAL — DEPARTURE (SEATING TIMES)
        </label>
        <span className="text-[9px] text-primary font-bold tracking-tight uppercase">
          Max 3 hours
        </span>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 gap-2">
        {[15, 16, 17, 18, 19, 20, 21, 22, 23, 0].map((hour) => {
          const isTimeBooked = tableDayBookings.some((b: any) => {
            // Adjust logic for next-day hours (0-3)
            const checkHour = hour < 4 ? hour + 24 : hour;
            const bStart = b.startHour < 4 ? b.startHour + 24 : b.startHour;
            const bEnd = b.endHour < 4 ? b.endHour + 24 : b.endHour;
            return checkHour >= bStart && checkHour < bEnd;
          });

          const displayLabel =
            hour === 0
              ? "12 AM"
              : hour === 12
                ? "12 PM"
                : hour > 12
                  ? `${hour - 12} PM`
                  : `${hour} AM`;

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
              {displayLabel}
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

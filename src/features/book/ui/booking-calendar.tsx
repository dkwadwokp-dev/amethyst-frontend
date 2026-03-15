import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { getDateStyle } from "../utils/book-utils";
import { Loading } from "../../shared/ui/loading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingCalendarProps {
  activeTab: "room" | "dining";
  item: string;
  errors: any;
  checkIn: string | undefined;
  checkOut: string | undefined;
  diningDate: string | undefined;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  availabilityData?: any;
  isCheckingAvailability?: boolean;
}

export const BookingCalendar = ({
  activeTab,
  errors,
  checkIn,
  checkOut,
  diningDate,
  setFormData,
  availabilityData,
  isCheckingAvailability,
}: BookingCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentBookedRanges = availabilityData?.bookedPeriods || [];

  const isDayBooked = (date: Date) => {
    const calendarDateTime = date.getTime();

    return currentBookedRanges.some((r: any) => {
      const start = new Date(r.start);
      start.setHours(0, 0, 0, 0);
      const end = new Date(r.end);
      end.setHours(0, 0, 0, 0);

      return (
        calendarDateTime >= start.getTime() && calendarDateTime <= end.getTime()
      );
    });
  };

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    selectedDate.setHours(12, 0, 0, 0);
    const isoDate = selectedDate.toISOString();

    if (activeTab === "room") {
      if (!checkIn || (checkIn && checkOut)) {
        setFormData((prev: any) => ({
          ...prev,
          checkIn: isoDate,
          checkOut: undefined,
        }));
      } else if (checkIn && new Date(isoDate) > new Date(checkIn)) {
        const start = new Date(checkIn);
        const end = new Date(isoDate);
        let valid = true;

        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          if (isDayBooked(d)) {
            valid = false;
            break;
          }
        }

        if (valid) {
          setFormData((prev: any) => ({ ...prev, checkOut: isoDate }));
        } else {
          setFormData((prev: any) => ({
            ...prev,
            checkIn: isoDate,
            checkOut: undefined,
          }));
        }
      } else {
        setFormData((prev: any) => ({ ...prev, checkIn: isoDate }));
      }
    } else {
      setFormData((prev: any) => ({
        ...prev,
        diningDate: isoDate,
        arrivalHour: undefined,
        departureHour: undefined,
      }));
    }
  };

  const nextMonth = () => {
    const now = new Date();
    const maxDate = new Date(now.getFullYear(), now.getMonth() + 2, 1);
    if (
      currentYear > maxDate.getFullYear() ||
      (currentYear === maxDate.getFullYear() &&
        currentMonth >= maxDate.getMonth())
    ) {
      return;
    }
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const prevMonth = () => {
    // Don't allow going before current month
    const now = new Date();
    if (currentYear === now.getFullYear() && currentMonth === now.getMonth())
      return;
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const monthLabel =
    currentDate.toLocaleString("default", { month: "long" }).toUpperCase() +
    ` ${currentYear}`;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <div
      className={`border ${
        activeTab === "room"
          ? errors.checkIn || errors.checkOut
            ? "border-red-400"
            : "border-gray-100"
          : errors.diningDate
            ? "border-red-400"
            : "border-gray-100"
      } p-4`}
    >
      <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
        <span className="text-xs font-bold font-manrope text-gray-900 flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-400" />
          {activeTab === "room" ? "CHECK-IN — CHECK-OUT" : "SELECT DATE"}
        </span>
        <div className="flex items-center gap-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevMonth}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-30"
            disabled={
              currentYear === today.getFullYear() &&
              currentMonth === today.getMonth()
            }
          >
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </motion.button>
          <div className="overflow-hidden min-w-[100px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={monthLabel}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] text-gray-400 font-bold tracking-widest uppercase block text-center"
              >
                {monthLabel}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextMonth}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-30"
            disabled={(() => {
              const now = new Date();
              const maxDate = new Date(
                now.getFullYear(),
                now.getMonth() + 2,
                1,
              );
              return (
                currentYear > maxDate.getFullYear() ||
                (currentYear === maxDate.getFullYear() &&
                  currentMonth >= maxDate.getMonth())
              );
            })()}
          >
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </motion.button>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence>
          {isCheckingAvailability && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex items-center justify-center bg-white/70 backdrop-blur-[1px]"
            >
              <Loading className="py-0 scale-75" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          key={monthLabel}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-2"
        >
          {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((day) => (
            <div
              key={day}
              className="text-[9px] font-bold text-gray-300 tracking-widest uppercase"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}

          {calendarDays.map((day) => {
            const date = new Date(currentYear, currentMonth, day);
            date.setHours(0, 0, 0, 0);
            const isPast = date < today;
            const isBooked = isDayBooked(date);
            // Only make the date unclickable if it's past, or if it's booked for a ROOM.
            // For dining, we allow clicking even if there are bookings because tables/times vary.
            const isUnavailable = isPast || (activeTab === "room" && isBooked);

            return (
              <div key={day} className="flex justify-center items-center">
                <motion.button
                  type="button"
                  whileHover={!isUnavailable ? { scale: 1.15 } : {}}
                  whileTap={!isUnavailable ? { scale: 0.9 } : {}}
                  disabled={isUnavailable}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDateClick(day);
                  }}
                  className={`w-8 h-8 flex items-center justify-center text-xs transition-colors rounded-sm ${getDateStyle(
                    day,
                    isUnavailable,
                    activeTab,
                    checkIn,
                    checkOut,
                    diningDate,
                    currentMonth,
                    currentYear,
                  )}`}
                >
                  {isBooked && !isPast && activeTab === "room" ? "X" : day}
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export const getDateStyle = (
  day: number,
  isUnavailable: boolean,
  activeTab: "room" | "dining",
  checkIn: string | undefined,
  checkOut: string | undefined,
  diningDate: string | undefined,
  currentMonth: number,
  currentYear: number,
) => {
  const calendarDate = new Date(currentYear, currentMonth, day);
  calendarDate.setHours(12, 0, 0, 0);

  const checkInDate = checkIn ? new Date(checkIn) : null;
  const checkOutDate = checkOut ? new Date(checkOut) : null;
  const selectedDiningDate = diningDate ? new Date(diningDate) : null;

  if (checkInDate) checkInDate.setHours(12, 0, 0, 0);
  if (checkOutDate) checkOutDate.setHours(12, 0, 0, 0);
  if (selectedDiningDate) selectedDiningDate.setHours(12, 0, 0, 0);

  if (isUnavailable)
    return "text-gray-300 bg-gray-50 cursor-not-allowed border border-gray-100";

  const isSelected =
    (checkInDate && calendarDate.getTime() === checkInDate.getTime()) ||
    (checkOutDate && calendarDate.getTime() === checkOutDate.getTime()) ||
    (selectedDiningDate &&
      calendarDate.getTime() === selectedDiningDate.getTime());

  const isInRange =
    activeTab === "room" &&
    checkInDate &&
    checkOutDate &&
    calendarDate > checkInDate &&
    calendarDate < checkOutDate;

  if (isSelected)
    return "bg-gray-900 text-white font-bold border border-gray-900";
  if (isInRange)
    return "bg-gray-100 text-gray-900 font-bold border border-transparent";

  return "text-gray-600 hover:bg-gray-100";
};

export const getTimeStyle = (
  hour: number,
  arrivalHour: number | null,
  departureHour: number | null,
) => {
  if (arrivalHour === hour || departureHour === hour)
    return "border-primary bg-primary text-white shadow-sm";
  if (
    arrivalHour &&
    departureHour &&
    hour > arrivalHour &&
    hour < departureHour
  )
    return "bg-gray-100 text-primary border-gray-200 font-bold";
  return "border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50";
};

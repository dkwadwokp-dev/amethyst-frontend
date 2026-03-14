interface GeneralInfoCardProps {
  booking: any;
  formatDate: (date: string) => string;
}

export const GeneralInfoCard = ({
  booking,
  formatDate,
}: GeneralInfoCardProps) => {
  return (
    <div className="bg-white p-4 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span
            className={`text-[10px] font-bold tracking-widest px-3 py-1 uppercase ${
              booking.status === "CONFIRMED" || booking.status === "COMPLETED"
                ? "bg-green-100 text-green-800"
                : booking.status === "CANCELLED"
                  ? "bg-red-100 text-red-800"
                  : "bg-orange-100 text-orange-800"
            }`}
          >
            {booking.status}
          </span>
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            #{booking.reference}
          </span>
        </div>

        <div className="space-y-4 font-manrope">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
              Check-in
            </span>
            <span className="text-sm font-bold text-gray-900">
              {formatDate(booking.checkIn)} - 3:00 PM
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
              Check-out
            </span>
            <span className="text-sm font-bold text-gray-900">
              {formatDate(booking.checkOut)} - 11:00 AM
            </span>
          </div>
          <div className="flex flex-col pt-2">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
              Resource Type
            </span>
            <span className="text-sm font-bold text-gray-900 capitalize">
              {booking.type}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex gap-8">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
            Guests
          </span>
          <span className="text-sm text-gray-900">
            {booking.guests} Person(s)
          </span>
        </div>
      </div>
    </div>
  );
};

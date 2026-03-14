import { Calendar, User, Mail, Tag } from "lucide-react";

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
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Reservation Reference
            </span>
            <span className="text-sm font-marcellus font-bold text-gray-900">
              #{booking.reference}
            </span>
          </div>
          <span
            className={`text-[9px] font-bold tracking-widest px-3 py-1.5 uppercase rounded-sm ${
              booking.status === "CONFIRMED" || booking.status === "COMPLETED"
                ? "bg-green-50 text-green-700 border border-green-100"
                : booking.status === "PROCESSED"
                  ? "bg-blue-50 text-blue-700 border border-blue-100"
                  : booking.status === "CANCELLED"
                    ? "bg-red-50 text-red-700 border border-red-100"
                    : "bg-orange-50 text-orange-700 border border-orange-100"
            }`}
          >
            {booking.status}
          </span>
        </div>

        <div className="space-y-8">
          {/* Schedule Section */}
          <div className="grid grid-cols-2 gap-6 pb-6 border-b border-gray-50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-50 flex items-center justify-center rounded-sm">
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                  {booking.type === "room" ? "Arrival" : "Date"}
                </span>
                <span className="text-xs font-bold text-gray-900 leading-tight">
                  {formatDate(booking.checkIn)}
                </span>
                <span className="text-[10px] text-gray-500 mt-0.5 font-manrope">
                  {booking.type === "room" ? "From 3:00 PM" : "Seating Time"}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-50 flex items-center justify-center rounded-sm">
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                  {booking.type === "room" ? "Departure" : "Duration"}
                </span>
                <span className="text-xs font-bold text-gray-900 leading-tight">
                  {booking.type === "room"
                    ? formatDate(booking.checkOut)
                    : `${new Date(booking.checkIn).getHours()}:00 - ${new Date(booking.checkOut).getHours()}:00`}
                </span>
                <span className="text-[10px] text-gray-500 mt-0.5 font-manrope">
                  {booking.type === "room" ? "Until 11:00 AM" : "Max 3 Hours"}
                </span>
              </div>
            </div>
          </div>

          {/* Guest Info Section */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-50 flex items-center justify-center rounded-sm">
                <User className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1 block">
                  Guest Name & Party
                </span>
                <p className="text-xs font-bold text-gray-900">
                  {booking.firstName} {booking.lastName}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 font-manrope">
                  {booking.guests} Person(s) Total
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-50 flex items-center justify-center rounded-sm">
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1 block">
                  Contact Email
                </span>
                <p className="text-xs font-medium text-gray-900 break-all select-all font-manrope">
                  {booking.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-50 flex items-center justify-center rounded-sm">
                <Tag className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1 block">
                  Booking Type
                </span>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {booking.type} Reservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

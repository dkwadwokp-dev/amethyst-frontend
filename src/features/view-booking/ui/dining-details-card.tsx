import { Utensils, Users, Clock } from "lucide-react";
import { diningAreas } from "../../book/data/tables";

interface DiningDetailsCardProps {
  booking: any;
}

export const DiningDetailsCard = ({ booking }: DiningDetailsCardProps) => {
  const currentArea = diningAreas.find((da) => da.id === booking.itemType);

  const formatTime = (date: string) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-white p-4 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            Dining Reservation
          </h4>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-sm flex-shrink-0">
              <Utensils className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                Seating Area
              </p>
              <p className="text-sm font-bold text-gray-900 uppercase font-marcellus">
                {currentArea?.title || "Selected Dining Area"}
              </p>
              <p className="text-[11px] text-gray-500 mt-1 font-manrope">
                Table #{booking.item.split("_")[1] || "Selected Table"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-gray-300 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">
                  Guests
                </p>
                <p className="text-xs font-bold text-gray-900">
                  {booking.guests} Persons
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gray-300 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">
                  Duration
                </p>
                <p className="text-xs font-bold text-gray-900">
                  {formatTime(booking.checkIn)} - {formatTime(booking.checkOut)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="bg-gray-50 p-3 text-[11px] text-gray-600 font-manrope italic border-l-2 border-gray-200">
          "Please arrive 10 minutes prior to your reservation time. Tables are
          held for a maximum of 15 minutes."
        </div>
      </div>
    </div>
  );
};

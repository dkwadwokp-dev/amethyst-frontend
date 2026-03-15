import { Bed, Wifi, Wind } from "lucide-react";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { useRoom } from "../../rooms/actions/use-rooms";

interface RoomDetailsCardProps {
  resourceId: string;
  bookingType: string;
}

export const RoomDetailsCard = ({
  resourceId,
  bookingType,
}: RoomDetailsCardProps) => {
  const { data: room, isLoading } = useRoom(resourceId);

  return (
    <div className="bg-white p-4 md:p-8 shadow-sm border border-gray-100 h-full">
      <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6">
        {bookingType === "room" ? "Room Details" : "Resource Details"}
      </h4>
      {isLoading ? (
        <div className="w-full h-40 bg-gray-100 animate-pulse mb-6"></div>
      ) : room?.leadImage ? (
        <img
          src={room.leadImage}
          alt={room.title}
          className="w-full h-40 object-cover mb-6 border border-gray-100"
        />
      ) : (
        <ImagePlaceholder
          className="w-full h-40 mb-6"
          text={bookingType === "room" ? "EXECUTIVE SUITE" : "PREMIUM TABLE"}
        />
      )}
      {room?.title && (
        <h3 className="text-xl font-marcellus text-primary mb-2 mt-4">
          {room.title}
        </h3>
      )}

      {/* Amenities List */}
      <div className="flex flex-wrap gap-2 mb-6">
        {room?.amenities && room.amenities.length > 0 ? (
          room.amenities.map((amenity, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-600"
            >
              <div className="w-1 h-1 bg-primary rounded-full" />
              {amenity}
            </span>
          ))
        ) : (
          <div className="flex flex-wrap gap-4 text-[10px] text-gray-500 font-bold tracking-widest uppercase">
            <span className="flex items-center gap-1">
              <Bed className="w-3 h-3" />{" "}
              {room?.bed || (bookingType === "room" ? "1 KING BED" : "SEATING")}
            </span>
            <span className="flex items-center gap-1">
              <Wifi className="w-3 h-3" /> FREE WIFI
            </span>
            <span className="flex items-center gap-1">
              <Wind className="w-3 h-3" />{" "}
              {bookingType === "room" ? "AC" : "CLIMATE CONTROL"}
            </span>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-500 leading-relaxed font-manrope">
        {room?.desc ||
          "Spacious luxury suite featuring a separate living area, stunning city views, and premium bathroom amenities to ensure a comfortable stay."}
      </p>
    </div>
  );
};

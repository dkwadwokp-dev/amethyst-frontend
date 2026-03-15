import { Link, useSearchParams } from "react-router-dom";
import { Section } from "../../shared/ui/section";
import { Loading } from "../../shared/ui/loading";
import { Calendar, Users, Clock, ArrowRight, Mail } from "lucide-react";
import { Button } from "../../shared/ui/button";
import { useGetBookingsQuery } from "../actions/use-get-bookings";
import { rooms } from "../../rooms/data/rooms";
import { diningAreas } from "../../book/data/tables";

const BookingList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = (searchParams.get("type") || "ALL") as
    | "ALL"
    | "ROOMS"
    | "DINING";
  const statusFilter = searchParams.get("status") || "ALL";

  const {
    data: bookings,
    isLoading,
    error,
  } = useGetBookingsQuery(filter, statusFilter);

  const filteredBookings = bookings || [];

  const handleTypeChange = (newType: string) => {
    const currentStatus = searchParams.get("status") || "ALL";
    setSearchParams({ type: newType, status: currentStatus });
  };

  const handleStatusChange = (newStatus: string) => {
    const currentType = searchParams.get("type") || "ALL";
    setSearchParams({ type: currentType, status: newStatus });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "bg-green-100 text-green-800";
      case "COMPLETED":
        return "bg-gray-100 text-gray-500";
      case "PROCESSED":
        return "bg-blue-100 text-blue-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getMedia = (booking: any) => {
    if (booking.type === "room") {
      const room = rooms.find((r) => r.id === booking.itemType);
      return {
        image: room?.leadImage,
        title: room?.title || "Luxury Accommodation",
        subtitle: `Room #${booking.item.split("_")[1] || "Selected Room"}`,
      };
    } else {
      const area = diningAreas.find((a) => a.id === booking.itemType);
      return {
        image: area?.leadImage,
        title: area?.title || "Fine Dining",
        subtitle: `Table #${booking.item.split("_")[1] || "Selected Table"}`,
      };
    }
  };

  if (isLoading) {
    return (
      <Section className="bg-[#F8F9FA]">
        <div className="flex flex-col items-center justify-center py-20">
          <Loading />
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="bg-[#F8F9FA]">
        <div className="text-center py-20">
          <p className="text-sm font-bold text-primary uppercase">
            Failed to load bookings
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Please try again later or contact support.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-8 border-b border-gray-200 mb-6 md:mb-12">
          {["ALL", "ROOMS", "DINING"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTypeChange(tab)}
              className={`pb-4 text-[10px] font-bold tracking-widest uppercase transition-colors relative ${
                filter === tab
                  ? "text-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {filter === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["ALL", "PENDING", "PROCESSED", "COMPLETED", "CANCELLED"].map(
            (status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-all rounded-full border ${
                  statusFilter === status
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                }`}
              >
                {status}
              </button>
            ),
          )}
        </div>

        {filteredBookings.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-100">
            <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">
              No bookings found
            </p>
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            {filteredBookings.map((booking) => {
              const media = getMedia(booking);
              const checkIn = new Date(booking.checkIn);
              const checkOut = new Date(booking.checkOut);

              const dateRange =
                booking.type === "room"
                  ? `${checkIn.toLocaleDateString("en-US", { month: "short", day: "numeric" })} — ${checkOut.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
                  : `${checkIn.toLocaleDateString("en-US", { month: "short", day: "numeric" })} @ ${checkIn.getHours()}:00`;

              return (
                <div
                  key={booking._id}
                  className="bg-white p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-6 group hover:border-gray-200 transition-all"
                >
                  {/* Image box */}
                  <div className="w-full md:w-56 h-40 flex-shrink-0 overflow-hidden">
                    <img
                      src={media.image}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details & Action Split */}
                  <div className="flex-1 flex flex-col md:flex-row gap-6">
                    {/* Information */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span
                            className={`text-[9px] font-bold tracking-widest px-2 py-1 uppercase ${getStatusColor(booking.status)}`}
                          >
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">
                          {media.subtitle}
                        </p>
                        <h3 className="text-lg font-marcellus text-gray-900 mb-4">
                          {media.title}
                        </h3>

                        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[11px] text-gray-500 font-manrope font-medium">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            {dateRange}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-gray-400" />
                            {booking.guests} Guests
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            Ref: {booking.reference}
                          </div>
                          <div className="flex items-center gap-2 overflow-hidden">
                            <Mail className="w-3.5 h-3.5 text-gray-400" />
                            <span className="truncate">{booking.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex flex-row md:flex-col justify-end items-end md:items-stretch gap-2 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 min-w-[140px]">
                      {booking.type === "room" && (
                        <span className="text-xl md:text-2xl font-marcellus tracking-normal normal-case text-black/80 ">
                          ${(booking.amount || 0).toLocaleString()}
                        </span>
                      )}
                      <Button
                        variant="primary"
                        className="flex-1 md:flex-none text-[10px] font-bold tracking-[0.12em] uppercase py-4 h-auto rounded-none bg-primary hover:bg-black transition-all duration-300 relative group/btn overflow-hidden"
                      >
                        <Link
                          to={`/bookings/${booking.reference}?email=${booking.email}`}
                          className="flex flex-col items-center gap-1"
                        >
                          <span className="opacity-90 group-hover/btn:scale-95 transition-transform">
                            View Details
                          </span>
                        </Link>
                      </Button>
                      <Link
                        to={`/bookings/${booking.reference}?email=${booking.email}`}
                        className="flex items-center justify-center w-14 h-14 md:hidden border border-gray-100 bg-gray-50/50 hover:bg-white transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
};

export default BookingList;

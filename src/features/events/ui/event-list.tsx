import { Link } from "react-router-dom";
import { Button } from "../../shared/ui/button";
import { Calendar, Clock, MapPin, Maximize2, Loader2 } from "lucide-react";
import { useImageModal } from "../../shared/context/image-modal-context";
import { Section } from "../../shared/ui/section";
import { useEvents } from "../actions/use-events";

const EventList = () => {
  const { openModal } = useImageModal();
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-[10px] tracking-widest font-bold text-gray-400 uppercase">
          Fetching Upcoming Events...
        </p>
      </div>
    );
  }

  if (error || !events) {
    return (
      <div className="text-center py-20">
        <p className="text-sm text-red-500 font-bold uppercase tracking-widest">
          Failed to load events
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-20 bg-[#F8F9FA] border border-dashed border-gray-200">
        <p className="text-[10px] tracking-widest font-bold text-gray-400 uppercase">
          No upcoming events scheduled
        </p>
      </div>
    );
  }

  return (
    <Section className="flex flex-col gap-8 md:gap-12">
      {events.map((event) => (
        <div
          key={event._id}
          className="bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 overflow-hidden items-center group mb-4 md:mb-8"
        >
          <div
            className="w-full md:w-[40%] h-64 md:h-[350px] shrink-0 relative overflow-hidden cursor-pointer"
            onClick={() => openModal(event.leadImage, event.title)}
          >
            <img
              src={event.leadImage}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 size={24} className="text-white" />
              </div>
            </div>
          </div>
          <div className="flex-1 py-6 px-4 md:py-8 md:px-8 flex flex-col justify-center w-full">
            <div className="flex items-center gap-4 mb-4 text-[10px] uppercase font-bold tracking-widest text-primary">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" /> {event.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> {event.time}
              </div>
            </div>
            <h3 className="text-2xl font-marcellus text-gray-900 mb-3">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <MapPin className="w-4 h-4 text-gray-400" /> {event.location}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-lg line-clamp-2">
              {event.desc}
            </p>
            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
              <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                {event.tickets.length > 0
                  ? `Tickets from $${Math.min(...event.tickets.map((t) => t.price))}`
                  : "Free Entry"}
              </div>
              <Link to={`/events/${event.eventId || event._id}`}>
                <Button
                  variant="primary"
                  className="bg-[#2A2E33] hover:bg-black text-white px-8 py-3 text-[10px] tracking-widest rounded-none border-none shadow-none"
                >
                  VIEW EVENT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default EventList;

import { events } from "../data/events";
import { Link } from "react-router-dom";
import { Button } from "../../shared/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventList = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-12">
      {events.map((event) => (
        <div key={event.id} className="bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 overflow-hidden items-center group">
          <div className="w-full md:w-[40%] h-64 md:h-[350px] shrink-0 relative overflow-hidden">
            <img 
              src={event.leadImage} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="flex-1 py-8 px-6 md:px-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4 text-[10px] uppercase font-bold tracking-widest text-[#0021B3]">
              <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {event.date}</div>
              <div className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {event.time}</div>
            </div>
            <h3 className="text-2xl font-marcellus text-gray-900 mb-3">{event.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <MapPin className="w-4 h-4 text-gray-400" /> {event.location}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-lg line-clamp-2">
              {event.desc}
            </p>
            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
              <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                Tickets from ${Math.min(...event.tickets.map(t => t.price))}
              </div>
              <Link to={`/events/${event.id}`}>
                <Button variant="primary" className="bg-[#2A2E33] hover:bg-black text-white px-8 py-3 text-[10px] tracking-widest rounded-none border-none shadow-none">
                  VIEW EVENT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;

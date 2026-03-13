import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import { events } from "../features/events/data/events";
import { Button } from "../features/shared/ui/button";
import {
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Maximize2,
} from "lucide-react";
import PurchaseTicketModal from "../features/events/ui/purchase-ticket-modal";
import { useImageModal } from "../features/shared/context/image-modal-context";
import { Section } from "../features/shared/ui/section";

const SingleEventPage = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModal } = useImageModal();

  if (!event) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col items-center justify-center">
        <h1 className="text-3xl font-marcellus text-gray-900 mb-4">
          Event Not Found
        </h1>
        <Link to="/events">
          <Button
            variant="primary"
            className="bg-[#2A2E33] text-white px-8 py-3 text-[10px] tracking-widest rounded-none"
          >
            BACK TO EVENTS
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-manrope flex flex-col">
      <Header />
      <div className="flex-1 bg-white">
        <div className="bg-[#F8F9FA] border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4">
            <Link
              to="/events"
              className="inline-flex items-center text-[10px] text-gray-500 hover:text-[#0021B3] uppercase tracking-widest font-bold"
            >
              <ChevronLeft className="w-3 h-3 mr-1" /> BACK TO ALL EVENTS
            </Link>
          </div>
        </div>

        <Section className="py-12 md:py-16 grid lg:grid-cols-3 gap-12 md:gap-16">
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-marcellus text-primary uppercase">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" /> {event.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" /> {event.time}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" /> {event.location}
                </span>
              </div>
            </div>

            <div
              className="w-full h-[35vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] cursor-pointer group relative overflow-hidden  shadow-sm"
              onClick={() => openModal(event.leadImage, event.title)}
            >
              <img
                src={event.leadImage}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={32} className="text-white" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-bold tracking-widest text-gray-900 uppercase mb-6 border-b border-gray-100 pb-4">
                ABOUT THE EVENT
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {event.longDesc || event.desc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 mt-6 md:mt-10 lg:mt-0">
            <div className="bg-[#F8F9FA] p-4 md:p-8 border border-gray-100 shadow-sm sticky top-32">
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h4 className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-2 flex items-center gap-2">
                  <Ticket className="w-4 h-4" /> SECURE YOUR SPOT
                </h4>
                <div className="font-marcellus text-2xl text-gray-900">
                  Tickets Available
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {event.tickets.map((ticket, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-white border border-gray-100"
                  >
                    <span className="text-sm font-bold text-gray-700">
                      {ticket.type}
                    </span>
                    <span className="text-lg font-marcellus text-[#0021B3]">
                      ${ticket.price}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                className="w-full bg-[#2A2E33] hover:bg-black text-white px-6 py-4 text-[11px] font-bold tracking-widest rounded-none"
              >
                PURCHASE TICKETS
              </Button>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
      {isModalOpen && (
        <PurchaseTicketModal
          event={event}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SingleEventPage;

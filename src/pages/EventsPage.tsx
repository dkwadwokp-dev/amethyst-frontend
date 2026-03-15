import { Link } from "react-router-dom";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import EventList from "../features/events/ui/event-list";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope">
      <Header />
      <PageHero
        title="EVENTS"
        subtitle="DISCOVER WHAT'S HAPPENING"
        image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2600&auto=format&fit=crop"
      />

      <div className="bg-white border-b border-gray-100 py-4 text-center">
        <Link
          to="/verify-ticket"
          className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <span>Already have a ticket?</span>
          <span className="underline decoration-gray-300 underline-offset-4">
            Verify Status Here
          </span>
        </Link>
      </div>

      <EventList />
      <Footer />
    </div>
  );
};

export default EventsPage;

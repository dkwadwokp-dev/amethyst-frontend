import { Link } from "react-router-dom";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import EventList from "../features/events/ui/event-list";
import { useGetLoggedInUser } from "../features/auth/actions/use-get-user";
import { Plus } from "lucide-react";

const EventsPage = () => {
  const { data: user } = useGetLoggedInUser();

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope">
      <Header />
      <PageHero
        title="EVENTS"
        subtitle="DISCOVER WHAT'S HAPPENING"
        image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2600&auto=format&fit=crop"
      />

      <div className="bg-white border-b border-gray-100 py-4 text-center flex flex-col sm:flex-row justify-center items-center gap-6">
        <Link
          to="/verify-ticket"
          className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <span>Already have a ticket?</span>
          <span className="underline decoration-gray-300 underline-offset-4">
            Verify Status Here
          </span>
        </Link>
        {user && (
          <Link
            to="/events/new"
            className="text-[10px] uppercase tracking-widest font-bold text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-3 h-3" />
            <span>Create New Event</span>
          </Link>
        )}
      </div>

      <EventList />
      <Footer />
    </div>
  );
};

export default EventsPage;

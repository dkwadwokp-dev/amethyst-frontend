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
      <EventList />
      <Footer />
    </div>
  );
};

export default EventsPage;

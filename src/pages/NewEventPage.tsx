import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import EventForm from "../features/events/ui/event-form";

const NewEventPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      <div className="flex-1">
        <EventForm title="Create New Event" onSubmit={(data) => console.log('Create:', data)} />
      </div>
      <Footer />
    </div>
  );
};

export default NewEventPage;

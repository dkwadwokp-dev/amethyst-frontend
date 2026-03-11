import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import EventForm from "../features/events/ui/event-form";
import { useParams } from "react-router-dom";
import { events } from "../features/events/data/events";

const EditEventPage = () => {
  const { eventId } = useParams();
  const event = events.find(e => e.id === eventId);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      <div className="flex-1">
        {event ? (
          <EventForm 
            title="Edit Event" 
            initialData={{
              title: event.title,
              date: event.date,
              time: event.time,
              location: event.location,
              desc: event.desc,
              leadImage: event.leadImage,
              tickets: event.tickets.length > 0 ? event.tickets : [{ type: "", price: "" }]
            }}
            onSubmit={(data) => console.log('Edit:', data)} 
          />
        ) : (
          <h2 className="text-center py-16">Event not found</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EditEventPage;

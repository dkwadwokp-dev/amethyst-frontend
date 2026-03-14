import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import EventForm from "../features/events/ui/event-form";
import { useParams, useNavigate } from "react-router-dom";
import { useEventById } from "../features/events/actions/use-events";
import { useUpdateEvent } from "../features/events/actions/use-update-event";
import { Loader2 } from "lucide-react";

const EditEventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { data: event, isLoading: isFetching } = useEventById(eventId);
  const { mutate: updateEvent, isPending: isUpdating } = useUpdateEvent();

  const handleUpdate = (data: any) => {
    if (!eventId) return;

    updateEvent(
      { id: eventId, data },
      {
        onSuccess: () => {
          navigate(`/events/${eventId}`);
        },
        onError: (error: any) => {
          console.error("Failed to update event:", error);
        },
      },
    );
  };

  if (isFetching) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-[10px] tracking-widest font-bold text-gray-400 uppercase">
            Fetching Event Details...
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      <div className="flex-1">
        {event ? (
          <EventForm
            title="Edit Event"
            initialData={{
              ...event,
              // Map null totalQuantity to form expectation if necessary,
              // but form handles watch(null) correctly
            }}
            isLoading={isUpdating}
            onSubmit={handleUpdate}
          />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-xl font-marcellus text-gray-900 mb-4">
              Event not found
            </h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EditEventPage;

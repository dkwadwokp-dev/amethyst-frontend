import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import EventForm from "../features/events/ui/event-form";
import { useCreateEvent } from "../features/events/actions/use-create-event";
import { AlertCircle, X } from "lucide-react";

const NewEventPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { mutate: createEvent, isPending } = useCreateEvent();

  const handleCreate = (data: any) => {
    setError(null);
    createEvent(data, {
      onSuccess: () => {
        navigate("/events");
      },
      onError: (err: any) => {
        setError(err.message || "Failed to create event. Please try again.");
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      <div className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-bold text-primary uppercase tracking-wider">
                  Submission Error
                </p>
                <p className="text-xs text-red-600 mt-1">{error}</p>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <EventForm
          title="Create New Event"
          onSubmit={handleCreate}
          isLoading={isPending}
        />
      </div>
      <Footer />
    </div>
  );
};

export default NewEventPage;

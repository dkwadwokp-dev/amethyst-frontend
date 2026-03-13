import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../shared/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { eventSchema, type EventFormData } from "../schema/event-schema";

interface EventFormProps {
  initialData?: any;
  onSubmit: (data: EventFormData) => void;
  title: string;
}

const EventForm = ({ initialData, onSubmit, title }: EventFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      date: "",
      time: "",
      location: "",
      desc: "",
      leadImage: "",
      tickets: [],
      ...initialData,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tickets",
  });

  const handleFormSubmit = (data: EventFormData) => {
    onSubmit(data);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-6 font-manrope">
      <h2 className="text-3xl font-marcellus text-gray-900 mb-8">{title}</h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-6 bg-white p-8 shadow-sm border border-gray-100"
      >
        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
            Event Title
          </label>
          <input
            {...register("title")}
            type="text"
            className={`w-full border ${errors.title ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
          />
          {errors.title && (
            <p className="text-[10px] text-primary font-bold">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
              Date
            </label>
            <input
              {...register("date")}
              type="text"
              placeholder="e.g. Aug 24, 2026"
              className={`w-full border ${errors.date ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
            />
            {errors.date && (
              <p className="text-[10px] text-primary font-bold">
                {errors.date.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
              Time
            </label>
            <input
              {...register("time")}
              type="text"
              placeholder="e.g. 7:00 PM - 11:00 PM"
              className={`w-full border ${errors.time ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
            />
            {errors.time && (
              <p className="text-[10px] text-primary font-bold">
                {errors.time.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            className={`w-full border ${errors.location ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
          />
          {errors.location && (
            <p className="text-[10px] text-primary font-bold">
              {errors.location.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
            Image URL
          </label>
          <input
            {...register("leadImage")}
            type="url"
            className={`w-full border ${errors.leadImage ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
          />
          {errors.leadImage && (
            <p className="text-[10px] text-primary font-bold">
              {errors.leadImage.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
            Description
          </label>
          <textarea
            {...register("desc")}
            className={`w-full border ${errors.desc ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none min-h-[120px] transition-colors`}
          ></textarea>
          {errors.desc && (
            <p className="text-[10px] text-primary font-bold">
              {errors.desc.message}
            </p>
          )}
        </div>

        <div className="border-t border-gray-100 pt-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[11px] font-bold tracking-widest text-gray-900 uppercase">
              Tickets
            </h3>
            <Button
              type="button"
              onClick={() => append({ type: "", price: undefined as any })}
              variant="ghost"
              className="text-[10px] tracking-widest flex items-center gap-1 text-primary"
            >
              <Plus className="w-3 h-3" /> ADD TICKET
            </Button>
          </div>

          {fields.length === 0 && (
            <div className="p-8 border border-dashed border-gray-200 text-center">
              <p className="text-xs text-gray-400 font-manrope italic">
                No tickets added. This event will be listed as "Free Entry".
              </p>
            </div>
          )}

          {fields.map((field, index) => (
            <div key={field.id} className="space-y-2">
              <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-start bg-[#F8F9FA] p-4 border border-gray-100 relative">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
                    Ticket Type
                  </label>
                  <input
                    {...register(`tickets.${index}.type`)}
                    type="text"
                    placeholder="e.g. General Admission"
                    className={`w-full border ${errors.tickets?.[index]?.type ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none bg-white transition-colors`}
                  />
                  {errors.tickets?.[index]?.type && (
                    <p className="text-[10px] text-primary font-bold">
                      {errors.tickets?.[index]?.type?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
                    Ticket Price ($)
                  </label>
                  <input
                    {...register(`tickets.${index}.price`, {
                      valueAsNumber: true,
                    })}
                    className={`w-full border ${errors.tickets?.[index]?.price ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none bg-white transition-colors`}
                  />
                  {errors.tickets?.[index]?.price && (
                    <p className="text-[10px] text-primary font-bold">
                      {errors.tickets?.[index]?.price?.message}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-3 text-red-500 hover:text-red-700 transition-colors border border-transparent hover:bg-white mb-[2px]"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {errors.tickets?.root && (
            <p className="text-[10px] text-primary font-bold">
              {errors.tickets.root.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            className="w-full bg-[#2A2E33] hover:bg-black text-white px-8 py-4 text-[11px] tracking-widest rounded-none border-none"
          >
            SAVE EVENT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;

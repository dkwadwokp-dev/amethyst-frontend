import { useState } from "react";
import { Button } from "../../shared/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface EventFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  title: string;
}

const EventForm = ({ initialData, onSubmit, title }: EventFormProps) => {
  const [formData, setFormData] = useState(initialData || {
    title: "",
    date: "",
    time: "",
    location: "",
    desc: "",
    leadImage: "",
    tickets: [{ type: "", price: "" }]
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTicketChange = (index: number, field: string, value: string) => {
    const newTickets = [...formData.tickets];
    newTickets[index] = { ...newTickets[index], [field]: value };
    setFormData({ ...formData, tickets: newTickets });
  };

  const addTicket = () => {
    setFormData({ ...formData, tickets: [...formData.tickets, { type: "", price: "" }] });
  };

  const removeTicket = (index: number) => {
    const newTickets = formData.tickets.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, tickets: newTickets });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-marcellus text-gray-900 mb-8">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-sm border border-gray-100">
        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Event Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none" required />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Date</label>
            <input type="text" name="date" placeholder="e.g. Aug 24, 2026" value={formData.date} onChange={handleChange} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none" required />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Time</label>
            <input type="text" name="time" placeholder="e.g. 7:00 PM - 11:00 PM" value={formData.time} onChange={handleChange} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none" required />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Image URL</label>
          <input type="url" name="leadImage" value={formData.leadImage} onChange={handleChange} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none" required />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Description</label>
          <textarea name="desc" value={formData.desc} onChange={handleChange} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none min-h-[120px]" required></textarea>
        </div>
        
        <div className="border-t border-gray-100 pt-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[11px] font-bold tracking-widest text-gray-900 uppercase">Tickets</h3>
            <Button type="button" onClick={addTicket} variant="ghost" className="text-[10px] tracking-widest flex items-center gap-1 text-[#0021B3]">
              <Plus className="w-3 h-3" /> ADD TICKET
            </Button>
          </div>
          
          {formData.tickets.map((ticket: any, index: number) => (
            <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-4 items-end bg-[#F8F9FA] p-4 border border-gray-100 relative">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Ticket Type</label>
                <input type="text" placeholder="e.g. General Admission" value={ticket.type} onChange={(e) => handleTicketChange(index, 'type', e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none bg-white" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">Ticket Price ($)</label>
                <input type="number" value={ticket.price} onChange={(e) => handleTicketChange(index, 'price', e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none bg-white" required />
              </div>
              {formData.tickets.length > 1 && (
                <button type="button" onClick={() => removeTicket(index)} className="p-3 text-red-500 hover:text-red-700 transition-colors border border-transparent hover:bg-white rounded-sm mb-[2px]">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Button type="submit" variant="primary" className="w-full bg-[#2A2E33] hover:bg-black text-white px-8 py-4 text-[11px] tracking-widest rounded-none border-none">
            SAVE EVENT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;

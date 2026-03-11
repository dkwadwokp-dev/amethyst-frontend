import { useState } from "react";
import type { Event } from "../data/events";
import { Button } from "../../shared/ui/button";
import { X, Minus, Plus } from "lucide-react";

interface PurchaseTicketModalProps {
  event: Event;
  onClose: () => void;
}

const PurchaseTicketModal = ({ event, onClose }: PurchaseTicketModalProps) => {
  const [selectedTicket, setSelectedTicket] = useState<number>(0);
  const [ticketCount, setTicketCount] = useState<number>(1);

  const currentTicket = event.tickets[selectedTicket];
  const totalPrice = currentTicket ? currentTicket.price * ticketCount : 0;

  const handleDecrease = () => {
    if (ticketCount > 1) setTicketCount(ticketCount - 1);
  };

  const handleIncrease = () => {
    if (ticketCount < 10) setTicketCount(ticketCount + 1);
  };

  const handlePurchase = () => {
    alert(`Purchasing ${ticketCount} x ${currentTicket.type} ticket(s) for $${totalPrice}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-sm shadow-xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="font-marcellus text-2xl text-gray-900">Purchase Tickets</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">SELECT TICKET TYPE</h4>
            <div className="space-y-3">
              {event.tickets.map((ticket, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedTicket(idx)}
                  className={`flex justify-between items-center p-4 border cursor-pointer transition-all ${
                    selectedTicket === idx ? 'border-[#0021B3] bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selectedTicket === idx ? 'border-[#0021B3]' : 'border-gray-300'
                    }`}>
                      {selectedTicket === idx && <div className="w-2 h-2 rounded-full bg-[#0021B3]"></div>}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{ticket.type}</span>
                  </div>
                  <span className="font-marcellus text-lg text-[#0021B3]">${ticket.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">SELECT QUANTITY</h4>
            <div className="flex items-center gap-4">
              <button onClick={handleDecrease} className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-12 text-center font-bold text-gray-900 text-lg">{ticketCount}</div>
              <button onClick={handleIncrease} className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <div className="flex justify-between items-end mb-6">
              <span className="text-sm font-bold text-gray-500 uppercase">TOTAL AMOUNT</span>
              <span className="text-3xl font-marcellus text-gray-900">${totalPrice}</span>
            </div>
            <Button onClick={handlePurchase} variant="primary" className="w-full bg-[#2A2E33] hover:bg-black text-white px-6 py-4 text-[11px] font-bold tracking-widest rounded-none border-none shadow-none">
              PROCEED TO PAYMENT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTicketModal;

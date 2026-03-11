import { Button } from '../../shared/ui/button';
import { Edit2, Download, Send, XCircle } from 'lucide-react';

const BookingActions = () => {
  return (
    <div className="bg-[#F8F9FA] pb-16">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary" className="bg-[#2A2E33] hover:bg-black text-white px-6 py-3 text-[10px] tracking-widest rounded-none border-none shadow-none flex items-center justify-center gap-2">
          <Edit2 className="w-3 h-3" /> MODIFY BOOKING
        </Button>
        <Button variant="outline" className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 px-6 py-3 text-[10px] tracking-widest rounded-none shadow-none flex items-center justify-center gap-2 font-bold">
          <Download className="w-3 h-3" /> DOWNLOAD INVOICE
        </Button>
        <Button variant="outline" className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 px-6 py-3 text-[10px] tracking-widest rounded-none shadow-none flex items-center justify-center gap-2 font-bold">
          <Send className="w-3 h-3" /> RESEND INFO
        </Button>
        <Button variant="outline" className="border-red-200 text-red-600 bg-red-50 hover:bg-red-100 hover:border-red-300 px-6 py-3 text-[10px] tracking-widest rounded-none shadow-none flex items-center justify-center gap-2 font-bold ml-auto">
          <XCircle className="w-3 h-3" /> CANCEL BOOKING
        </Button>
      </div>
    </div>
  );
};

export default BookingActions;

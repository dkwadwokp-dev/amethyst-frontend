import { Section } from '../../shared/ui/section';
import { ImagePlaceholder } from '../../shared/ui/image-placeholder';
import { Mail, Phone, Bed, Wifi, Wind, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const BookingDetailsCard = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <Section className="bg-[#F8F9FA] pt-16 pb-8">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-2xl font-marcellus text-gray-900">BOOKING REFERENCE: A1B2C3D4</h2>
        <div className="w-12 h-1 bg-gray-300 mx-auto mt-4"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reservation Info */}
          <div className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-green-100 text-green-800 text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase">Confirmed</span>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">#A1B2C3D4</span>
              </div>
              
              <div className="space-y-4 font-manrope">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Check-in</span>
                  <span className="text-sm font-bold text-gray-900">Oct 15, 2024 - 3:00 PM</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Check-out</span>
                  <span className="text-sm font-bold text-gray-900">Oct 20, 2024 - 11:00 AM</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex gap-8">
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Guests</span>
                 <span className="text-sm text-gray-900">2 Adults, 0 Children</span>
               </div>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6">Payment Summary</h4>
              <div className="space-y-4 font-manrope">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Room Rate (5 Nights)</span>
                  <span>$1,100.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Taxes & Fees</span>
                  <span>$154.00</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
               <span className="font-bold text-sm text-gray-900 uppercase tracking-widest">Total Amount</span>
               <span className="font-bold text-lg text-gray-900">$1,254.00</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Paid in Full via Credit Card (**** 1234)
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Room Details */}
          <div className="bg-white p-8 shadow-sm border border-gray-100">
             <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6">Room Details</h4>
             <ImagePlaceholder className="w-full h-40 mb-6" text="EXECUTIVE SUITE" />
             <div className="flex flex-wrap gap-4 mb-4 text-[10px] text-gray-500 font-bold tracking-widest uppercase">
               <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> 1 KING BED</span>
               <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> FREE WIFI</span>
               <span className="flex items-center gap-1"><Wind className="w-3 h-3" /> AC</span>
             </div>
             <p className="text-xs text-gray-500 leading-relaxed">
               Spacious luxury suite featuring a separate living area, stunning city views, and premium bathroom amenities to ensure a comfortable stay.
             </p>
          </div>

          {/* Contact & Policies */}
          <div className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col">
             <div className="mb-8">
                <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">Hotel Contact</h4>
                <div className="space-y-3 text-xs text-gray-600 font-manrope">
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gray-400" /> reservations@ahhotel.com</div>
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gray-400" /> +1 (555) 123-4567</div>
                </div>
             </div>

             <div className="flex-1">
                <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">Important Information</h4>
                <div className="space-y-2">
                   {[
                     { title: "Cancellation Policy", content: "Free cancellation until 48 hours before check-in. Cancellations made after this period will be charged the first night's rate." },
                     { title: "Check-in Instructions", content: "Please present a valid ID and the credit card used for booking upon arrival." },
                     { title: "Special Requests", content: "No special requests were noted for this reservation. Contact us to add requests." }
                   ].map((acc, idx) => (
                     <div key={idx} className="border border-gray-100 rounded-sm">
                       <button 
                         onClick={() => toggleAccordion(idx)}
                         className="w-full flex justify-between items-center p-3 text-[11px] font-bold tracking-widest text-gray-700 uppercase hover:bg-gray-50"
                       >
                         {acc.title}
                         {openAccordion === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                       </button>
                       {openAccordion === idx && (
                         <div className="p-3 pt-0 text-xs text-gray-500 font-manrope leading-relaxed border-t border-gray-50 bg-gray-50">
                           {acc.content}
                         </div>
                       )}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BookingDetailsCard;

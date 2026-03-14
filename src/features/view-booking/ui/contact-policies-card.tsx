import { Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";

interface ContactPoliciesCardProps {
  booking: any;
  openAccordion: number | null;
  toggleAccordion: (index: number) => void;
}

export const ContactPoliciesCard = ({
  booking,
  openAccordion,
  toggleAccordion,
}: ContactPoliciesCardProps) => {
  return (
    <div className="bg-white p-4 md:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="mb-8">
        <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">
          Hotel Contact
        </h4>
        <div className="space-y-3 text-xs text-gray-600 font-manrope">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" /> reservations@ahhotel.com
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400" /> +1 (555) 123-4567
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">
          Important Information
        </h4>
        <div className="space-y-2">
          {[
            {
              title: "Cancellation Policy",
              content:
                "Free cancellation until 48 hours before check-in. Cancellations made after this period will be charged the first night's rate.",
            },
            {
              title: "Check-in Instructions",
              content:
                "Please present a valid ID and the credit card used for booking upon arrival.",
            },
            {
              title: "Special Requests",
              content:
                booking.notes ||
                "No special requests were noted for this reservation. Contact us to add requests.",
            },
          ].map((acc, idx) => (
            <div key={idx} className="border border-gray-100 bg-white">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center p-3 text-[11px] font-bold tracking-widest text-gray-700 uppercase hover:bg-gray-50 transition-colors"
              >
                {acc.title}
                {openAccordion === idx ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
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
  );
};

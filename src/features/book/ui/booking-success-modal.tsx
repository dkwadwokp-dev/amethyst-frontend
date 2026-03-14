import { useState } from "react";
import { Check, Copy, X, Calendar, User, Hash } from "lucide-react";
import { Button } from "../../shared/ui/button";

interface SuccessModalProps {
  booking: any;
  onClose: () => void;
}

export const BookingSuccessModal = ({
  booking,
  onClose,
}: SuccessModalProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(booking.reference);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-gray-900">
              Booking Confirmed!
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-manrope">
              Thank you for choosing us,{" "}
              <span className="font-bold text-gray-900">
                {booking.firstName}
              </span>
              .
            </p>
          </div>

          <div className="space-y-6">
            {/* Reference Box */}
            <div className="bg-gray-50 p-4 border border-gray-100 relative group">
              <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">
                BOOKING REFERENCE
              </label>
              <div className="flex items-center justify-between">
                <span className="text-xl font-mono font-bold tracking-wider text-gray-900">
                  {booking.reference}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-200 rounded transition-colors group-active:scale-95"
                  title="Copy reference"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                    CHECK-IN
                  </p>
                  <p className="text-xs font-bold text-gray-900">
                    {formatDate(booking.checkIn)}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                    CHECK-OUT
                  </p>
                  <p className="text-xs font-bold text-gray-900">
                    {formatDate(booking.checkOut)}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Hash className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                    TYPE
                  </p>
                  <p className="text-xs font-bold text-gray-900 capitalize">
                    {booking.type}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                    GUESTS
                  </p>
                  <p className="text-xs font-bold text-gray-900">
                    {booking.guests} Person(s)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button
              variant="primary"
              onClick={onClose}
              className="w-full bg-primary hover:bg-black text-white px-6 py-4 text-[11px] font-bold tracking-widest rounded-none border-none"
            >
              CLOSE & EXPLORE
            </Button>
            <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed px-4">
              Please save your booking reference. You can use it to check your
              status later. A confirmation email will be sent shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

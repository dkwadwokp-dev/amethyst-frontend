import { Section } from "../../shared/ui/section";
import { Button } from "../../shared/ui/button";
import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const CheckBookingForm = () => {
  return (
    <Section className="bg-[#F8F9FA] py-24 flex items-center justify-center">
      <div className="bg-white w-full mx-auto max-w-2xl px-8 py-14 shadow-sm text-center flex flex-col items-center">
        <Ticket className="w-8 h-8 text-gray-400 mb-6" />
        <h2 className="text-3xl font-marcellus text-gray-900 mb-4">
          Check Your Booking
        </h2>
        <p className="text-xs text-gray-500 leading-relaxed max-w-sm mb-12 font-manrope">
          Enter your booking reference number below to view, modify, or cancel
          your upcoming reservation.
        </p>

        <form className="w-full max-w-md space-y-6 text-left">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
              BOOKING REFERENCE
            </label>
            <input
              type="text"
              placeholder="e.g. A1B2C3D4"
              className="w-full border-b border-gray-200 py-3 text-sm focus:border-black outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
              LAST NAME / EMAIL
            </label>
            <input
              type="text"
              placeholder="e.g. A1B2C3D4 / user@email.com"
              className="w-full border-b border-gray-200 py-3 text-sm focus:border-black outline-none transition-colors"
            />
          </div>

          <div className="pt-8">
            <Link to="/bookings/A1B2C3D4" className="w-full block">
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-900 text-gray-900 hover:bg-gray-50 py-4 text-[10px] tracking-widest rounded-none uppercase font-bold"
              >
                VIEW BOOKING
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default CheckBookingForm;

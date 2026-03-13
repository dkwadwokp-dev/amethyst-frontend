import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Section } from "../../shared/ui/section";
import { Button } from "../../shared/ui/button";
import { Ticket } from "lucide-react";
import { checkBookingSchema, type CheckBookingFormData } from "../schema/check-booking-schema";

const CheckBookingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckBookingFormData>({
    resolver: zodResolver(checkBookingSchema),
  });

  const onSubmit = (data: CheckBookingFormData) => {
    // In a real app, you would verify the booking first
    console.log("Checking booking:", data);
    navigate(`/bookings/${data.reference}`);
  };

  return (
    <Section className="bg-[#F8F9FA] py-24 flex items-center justify-center">
      <div className="bg-white w-full mx-auto max-w-2xl px-6 md:px-8 py-8 md:py-14 shadow-sm text-center flex flex-col items-center">
        <Ticket className="w-8 h-8 text-gray-400 mb-6" />
        <h2 className="text-3xl font-marcellus text-gray-900 mb-4">
          Check Your Booking
        </h2>
        <p className="text-xs text-gray-500 leading-relaxed max-w-sm mb-12 font-manrope">
          Enter your booking reference number below to view, modify, or cancel
          your upcoming reservation.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6 text-left">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
              BOOKING REFERENCE
            </label>
            <input
              {...register("reference")}
              type="text"
              placeholder="e.g. A1B2C3D4"
              className={`w-full border-b ${errors.reference ? 'border-primary' : 'border-gray-200'} py-3 text-sm focus:border-black outline-none transition-colors`}
            />
            {errors.reference && (
              <p className="text-[10px] text-primary font-bold">{errors.reference.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
              LAST NAME / EMAIL
            </label>
            <input
              {...register("identifier")}
              type="text"
              placeholder="e.g. Jane Doe / user@email.com"
              className={`w-full border-b ${errors.identifier ? 'border-primary' : 'border-gray-200'} py-3 text-sm focus:border-black outline-none transition-colors`}
            />
            {errors.identifier && (
              <p className="text-[10px] text-primary font-bold">{errors.identifier.message}</p>
            )}
          </div>

          <div className="pt-8">
            <Button
              type="submit"
              variant="outline"
              disabled={isSubmitting}
              className="w-full border-gray-900 text-gray-900 hover:bg-gray-50 py-4 text-[10px] tracking-widest rounded-none uppercase font-bold disabled:opacity-50"
            >
              {isSubmitting ? "CHECKING..." : "VIEW BOOKING"}
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default CheckBookingForm;

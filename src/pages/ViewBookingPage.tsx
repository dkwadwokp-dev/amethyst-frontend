import { useParams, useSearchParams } from "react-router-dom";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import BookingDetailsCard from "../features/view-booking/ui/booking-details-card";
import BookingActions from "../features/view-booking/ui/booking-actions";
import CheckBookingFaq from "../features/check-booking/ui/check-booking-faq";
import { useVerifyBookingQuery } from "../features/check-booking/actions/use-verify-booking";
import { Loading } from "../features/shared/ui/loading";
import { AlertCircle, Clock } from "lucide-react";

const ViewBookingPage = () => {
  const { bookingId: id } = useParams<{ bookingId: string }>();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";

  const {
    data: booking,
    isLoading,
    error,
  } = useVerifyBookingQuery({ reference: id || "", email }, !!id && !!email);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA]">
        <Header />
        <Loading fullScreen={true} />
        <Footer />
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="min-h-screen bg-[#F8F9FA]">
        <Header />
        <PageHero
          title="NOT FOUND"
          subtitle="WE COULDN'T FIND YOUR BOOKING"
          usePattern={true}
        />
        <div className="max-w-xl mx-auto py-20 px-6 text-center">
          <p className="text-gray-600 mb-8">
            The booking reference or email provided is incorrect. Please check
            your confirmation email or try again.
          </p>
          <a
            href="/check-booking"
            className="inline-block bg-primary text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-black transition-colors"
          >
            Back to Check Booking
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const isRoomPending = booking.type === "room" && booking.status === "PENDING";

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope">
      <Header />

      {isRoomPending && (
        <div className="bg-orange-50 border-b border-orange-100 py-3 md:py-4 px-4 sticky top-[64px] z-40">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-orange-800 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center animate-in fade-in slide-in-from-top duration-500">
            <Clock className="w-4 h-4 text-orange-600 animate-pulse shrink-0" />
            <span>
              Reserving a room booking and not making payment in 2 hours voids
              the reservation
            </span>
            <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 hidden md:block" />
          </div>
        </div>
      )}

      <PageHero
        title="BOOKING DETAILS"
        subtitle="REVIEW YOUR RESERVATION DETAILS"
        usePattern={true}
      />

      <BookingDetailsCard booking={booking} />
      <BookingActions booking={booking} />

      <CheckBookingFaq />

      <Footer />
    </div>
  );
};

export default ViewBookingPage;

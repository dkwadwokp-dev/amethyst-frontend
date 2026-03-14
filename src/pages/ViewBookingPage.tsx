import { useParams, useSearchParams } from "react-router-dom";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import BookingDetailsCard from "../features/view-booking/ui/booking-details-card";
import BookingActions from "../features/view-booking/ui/booking-actions";
import CheckBookingFaq from "../features/check-booking/ui/check-booking-faq";
import { useVerifyBookingQuery } from "../features/check-booking/actions/use-verify-booking";
import { Loading } from "../features/shared/ui/loading";

const ViewBookingPage = () => {
  const { bookingId: id } = useParams<{ bookingId: string }>();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";

  console.log({ id, email });

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

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope">
      <Header />
      <PageHero
        title="BOOKING DETAILS"
        subtitle="REVIEW YOUR RESERVATION DETAILS"
        usePattern={true}
      />

      <BookingDetailsCard booking={booking} />
      <BookingActions />

      <CheckBookingFaq />

      <Footer />
    </div>
  );
};

export default ViewBookingPage;

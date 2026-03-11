import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import BookingDetailsCard from "../features/view-booking/ui/booking-details-card";
import BookingActions from "../features/view-booking/ui/booking-actions";
import CheckBookingFaq from "../features/check-booking/ui/check-booking-faq";

const ViewBookingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope">
      <Header />
      <PageHero title="BOOKING DETAILS" subtitle="REVIEW YOUR RESERVATION DETAILS" />
      
      <BookingDetailsCard />
      <BookingActions />
      
      <CheckBookingFaq />
      
      <Footer />
    </div>
  );
};

export default ViewBookingPage;

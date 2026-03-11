import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import BookingList from "../features/check-booking/ui/booking-list";

const BookingsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope">
      <Header />
      <PageHero 
        title="ALL BOOKINGS"
        subtitle="MANAGE RESERVATIONS"
      />
      <BookingList />
      <Footer />
    </div>
  );
};

export default BookingsPage;

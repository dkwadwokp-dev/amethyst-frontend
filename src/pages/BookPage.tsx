import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import BookForm from "../features/book/ui/book-form";
import CheckBookingFaq from "../features/check-booking/ui/check-booking-faq";
import PageHero from "../features/shared/ui/page-hero";

const BookPage = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Header />

      <PageHero
        title="Book Your Experience"
        subtitle="RESERVATIONS"
        usePattern={true}
        sx={"!py-18 md:py-32"}
      />

      <div className="bg-[#F8F9FA] pb-16">
        <BookForm />
      </div>

      <CheckBookingFaq />

      <Footer />
    </div>
  );
};

export default BookPage;

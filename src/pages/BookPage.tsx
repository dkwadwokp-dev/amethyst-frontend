import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import BookForm from "../features/book/ui/book-form";
import BookGallery from "../features/book/ui/book-gallery";
import CheckBookingFaq from "../features/check-booking/ui/check-booking-faq";

const BookPage = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Header />
      
      {/* Short dark hero to allow form overlapping */}
      <div className="bg-[#2A2E33] pt-24 pb-40 text-center px-6">
        <h4 className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-4">
          RESERVATIONS
        </h4>
        <h1 className="text-4xl md:text-5xl font-marcellus text-white uppercase tracking-wide">
          Book Your Experience
        </h1>
      </div>

      <div className="bg-[#F8F9FA] pb-16">
        <BookForm />
      </div>

      <BookGallery />
      
      <CheckBookingFaq />

      <Footer />
    </div>
  );
};

export default BookPage;

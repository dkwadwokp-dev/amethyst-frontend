import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import CheckBookingForm from "../features/check-booking/ui/check-booking-form";
import CheckBookingFaq from "../features/check-booking/ui/check-booking-faq";

const CheckBookingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      <PageHero title="CHECK BOOKING" subtitle="YOUR PERFECT URBAN HAVEN" />

      <div className="flex-1 bg-[red]">
        <CheckBookingForm />
        <CheckBookingFaq />
      </div>

      <Footer />
    </div>
  );
};

export default CheckBookingPage;

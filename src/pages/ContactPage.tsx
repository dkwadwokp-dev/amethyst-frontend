import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import ContactFormSection from "../features/contact/ui/contact-form-section";
import ContactInfoCards from "../features/contact/ui/contact-info-cards";
import MapSection from "../features/contact/ui/map-section";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope">
      <Header />
      <PageHero title="CONTACT US" subtitle="YOUR PERFECT URBAN HAVEN" />
      <ContactFormSection />
      <ContactInfoCards />
      <MapSection />
      <Footer />
    </div>
  );
};

export default ContactPage;

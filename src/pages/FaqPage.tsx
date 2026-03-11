import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import FaqList from "../features/faq/ui/faq-list";

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      <PageHero title="FAQ" subtitle="ANSWERS TO YOUR QUESTIONS" />
      
      <div className="flex-1">
        <FaqList />
      </div>

      <Footer />
    </div>
  );
};

export default FaqPage;

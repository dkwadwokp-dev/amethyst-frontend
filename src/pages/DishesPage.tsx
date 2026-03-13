import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import DishCategory from "../features/dishes/ui/dish-category";
import GallerySection from "../features/dishes/ui/gallery-section";
import FaqSection from "../features/dishes/ui/faq-section";

const DishesPage = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Header />
      <PageHero
        title="DISHES"
        subtitle="SAVOR EXCEPTIONAL CULINARY EXPERIENCES"
        image="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2600&auto=format&fit=crop"
      />

      <div className="py-2 md:py-8">
        <DishCategory subtitle="MEALS" title="BREAKFAST" category="breakfast" />
        <DishCategory subtitle="MEALS" title="LUNCH" category="lunch" />
        <DishCategory subtitle="MEALS" title="DINNER" category="dinner" />
        <DishCategory subtitle="MEALS" title="DESSERTS" category="dessert" />
        <DishCategory subtitle="DRINKS" title="DRINKS" category="drinks" />
      </div>

      <GallerySection />
      <FaqSection />

      <Footer />
    </div>
  );
};

export default DishesPage;

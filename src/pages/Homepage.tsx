import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import Hero from "../features/homepage/ui/hero";
import Intro from "../features/homepage/ui/intro";
import Services from "../features/homepage/ui/services";
import About from "../features/homepage/ui/about";
import Menu from "../features/homepage/ui/menu";
import Rooms from "../features/homepage/ui/rooms";
import Amenities from "../features/homepage/ui/amenities";
import Testimonials from "../features/homepage/ui/testimonials";
import Contact from "../features/homepage/ui/contact";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 font-manrope">
      <Header isTransparent />
      <Hero />
      <Intro />
      <Services />
      <About />
      <Menu />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

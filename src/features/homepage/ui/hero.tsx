import { Button } from "../../shared/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
      className="relative bg-[#0B1521] min-h-[600px] flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14faaf2?q=80&w=2600&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-[#0B1521]/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10 text-white relative">
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4 opacity-90">
          WELCOME TO AH HOTEL
        </span>
        <h1 className="text-5xl md:text-7xl font-marcellus mb-6 leading-tight uppercase">
          Your Urban
          <br />
          Sanctuary
        </h1>
        <p className="max-w-2xl text-sm md:text-base font-manrope opacity-90 mb-10 leading-relaxed">
          Discover a harmonious blend of modern luxury and authentic cultural charm. Nestled in the heart of the city, we offer tailored experiences, world-class dining, and unparalleled comfort for both leisure and business travelers.
        </p>
        <Link to="/book">
          <Button
            variant="primary"
            className="bg-transparent border border-white hover:bg-white hover:text-black"
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;


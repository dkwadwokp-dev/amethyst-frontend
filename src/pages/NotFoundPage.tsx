import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import { Button } from "../features/shared/ui/button";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-[#0B1521] opacity-[0.02] rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm mb-8 relative z-10">
          <Compass className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </div>

        <h4 className="text-[12px] font-black tracking-[0.2em] text-primary uppercase mb-4 relative z-10">
          ERROR 404
        </h4>
        
        <h1 className="text-5xl md:text-7xl font-marcellus text-gray-900 mb-6 relative z-10">
          Page Not Found
        </h1>
        
        <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed text-sm relative z-10">
          We couldn't seem to find the page you're looking for. It might have been removed, renamed, or temporarily unavailable.
        </p>
        
        <div className="relative z-10">
          <Link to="/">
            <Button variant="primary" className="bg-primary hover:bg-blue-800 text-white px-8 py-4 text-[11px] font-bold tracking-widest rounded-none shadow-[0_4px_14px_0_rgba(0,33,179,0.25)] hover:shadow-[0_6px_20px_rgba(0,33,179,0.3)] transition-all">
              RETURN HOME
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;

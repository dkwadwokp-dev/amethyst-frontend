import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import { Button } from "../features/shared/ui/button";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-[#0B1521] opacity-[0.02] rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm mb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          >
            <Compass className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </motion.div>
        </div>

        <h4 className="text-[12px] font-black tracking-[0.2em] text-primary uppercase mb-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ERROR 404
          </motion.span>
        </h4>

        <h1 className="text-5xl md:text-7xl font-marcellus text-gray-900 mb-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Page Not Found
          </motion.span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed text-sm relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We couldn't seem to find the page you're looking for. It might have
            been removed, renamed, or temporarily unavailable.
          </motion.span>
        </p>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/">
              <Button
                variant="primary"
                className="bg-primary hover:opacity-90 text-white px-8 py-4 text-[11px] font-bold tracking-widest rounded-none shadow-sm transition-all"
              >
                RETURN HOME
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;

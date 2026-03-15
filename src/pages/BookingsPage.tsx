import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import BookingList from "../features/check-booking/ui/booking-list";
import { motion } from "framer-motion";

const BookingsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#F8F9FA] font-manrope"
    >
      <Header />
      <PageHero 
        title="ALL BOOKINGS"
        subtitle="VIEW AND MANAGE ALL RESERVATIONS"
        image="https://images.unsplash.com/photo-1571863533956-01c88e79957e?q=80&w=2600&auto=format&fit=crop"
      />
      <BookingList />
      <Footer />
    </motion.div>
  );
};

export default BookingsPage;

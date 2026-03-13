import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import RoomList from "../features/rooms/ui/room-list";
import RoomsAmenities from "../features/rooms/ui/rooms-amenities";
import PoliciesSection from "../features/rooms/ui/policies-section";

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Header />
      <PageHero 
        title="ROOMS" 
        subtitle="DISCOVER YOUR PERFECT URBAN HAVEN" 
        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2600&auto=format&fit=crop"
      />
      <RoomList />
      <RoomsAmenities />
      <PoliciesSection />
      <Footer />
    </div>
  );
};

export default RoomsPage;

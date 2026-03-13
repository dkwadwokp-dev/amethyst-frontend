import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import StorySection from "../features/about/ui/story-section";
import CoreValues from "../features/about/ui/core-values";
import VideoTour from "../features/about/ui/video-tour";
import GalleryGrid from "../features/about/ui/gallery-grid";

import PageHero from "../features/shared/ui/page-hero";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Header />
      <PageHero 
        title="OUR STORY" 
        subtitle="LEGACY OF EXCELLENCE SINCE 1998" 
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2600&auto=format&fit=crop"
      />

      <StorySection />
      <CoreValues />
      <VideoTour />
      <GalleryGrid />
      <Footer />
    </div>
  );
};

export default AboutPage;

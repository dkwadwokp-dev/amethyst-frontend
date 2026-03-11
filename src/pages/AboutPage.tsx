import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import StorySection from "../features/about/ui/story-section";
import CoreValues from "../features/about/ui/core-values";
import VideoTour from "../features/about/ui/video-tour";
import GalleryGrid from "../features/about/ui/gallery-grid";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Header />
   
   
      <StorySection />
      <CoreValues />
      <VideoTour />
      <GalleryGrid />
      <Footer />
    </div>
  );
};

export default AboutPage;

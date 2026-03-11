import { Section } from '../../shared/ui/section';
import { Play } from 'lucide-react';

const VideoTour = () => {
  return (
    <Section className="bg-white py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h4 className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-4">EXPERIENCE IT</h4>
          <h2 className="text-3xl md:text-4xl font-marcellus text-gray-900 mb-6 uppercase">Take a Tour</h2>
          <p className="text-xs text-gray-500 leading-relaxed font-manrope">
            Explore our beautifully designed facilities, luxurious rooms, and world-class amenities from the comfort of your screen. Let us give you a glimpse into the perfect urban haven that awaits you.
          </p>
        </div>
        <div className="relative w-full aspect-video bg-[#D1D5DB] flex items-center justify-center cursor-pointer group rounded-sm overflow-hidden">
           <div className="w-16 h-16 bg-[#2A2E33] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default VideoTour;

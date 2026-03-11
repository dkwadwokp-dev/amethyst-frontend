import { Section } from '../../shared/ui/section';
import { ImagePlaceholder } from '../../shared/ui/image-placeholder';

const StorySection = () => {
  return (
    <Section className="bg-white py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ImagePlaceholder className="w-full h-full min-h-[500px] rounded-sm object-cover" src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1200" text="HOTEL EXTEIOR" />
        <div>
          <div className="w-16 h-1 bg-gray-200 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-marcellus text-gray-900 mb-6 uppercase">Our Story</h2>
          <p className="text-xs text-gray-500 leading-relaxed font-manrope mb-6">
            Founded with a vision to redefine urban luxury, AH Hotel seamlessly blends sophisticated modern aesthetics with the absolute warmth of Afrocentric hospitality. Our journey began over a decade ago with a simple mission: to provide an unparalleled oasis of elegance and tranquility in the heart of the city.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed font-manrope mb-12">
            Every detail of our establishment has been meticulously curated to ensure an unforgettable experience for our guests. From our critically acclaimed dining restaurants to our world-class luxury suites, we remain dedicated to setting the highest standard for excellence, boundless comfort, and culture.
          </p>
          <div className="flex gap-4 md:gap-8 flex-col sm:flex-row">
             <div className="border border-gray-200 px-8 py-6 text-center w-full shadow-sm">
               <div className="font-marcellus text-3xl text-gray-900 mb-2">10+</div>
               <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Years Experience</div>
             </div>
             <div className="border border-gray-200 px-8 py-6 text-center w-full shadow-sm">
               <div className="font-marcellus text-3xl text-gray-900 mb-2">75+</div>
               <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Luxury Rooms</div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StorySection;

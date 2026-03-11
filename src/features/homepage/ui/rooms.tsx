import { Section } from '../../shared/ui/section';
import { SectionHeading } from '../../shared/ui/section-heading';
import { ImagePlaceholder } from '../../shared/ui/image-placeholder';
import { Button } from '../../shared/ui/button';
import { Link } from 'react-router-dom';

import { rooms } from '../../rooms/data/rooms';

const Rooms = () => {
  return (
    <Section className="bg-[#F8F9FA]">
      <SectionHeading 
        subtitle="OUR ROOMS"
        title="AVAILABLE ROOMS"
        className="mb-16"
      />
      
      <div className="space-y-4 max-w-5xl mx-auto">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white p-4 flex flex-col md:flex-row gap-8 items-center shadow-sm">
            <ImagePlaceholder className="w-full md:w-64 h-40 flex-shrink-0" text="PHOTO CONTENT" />
            
            <div className="flex-1 py-4">
              <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wide">{room.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{room.desc}</p>
              <div className="flex gap-4 text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                <span>{room.bed}</span>
                <span>{room.size}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center md:border-l border-gray-100 pl-8 min-w-[160px] py-4">
              <div className="text-2xl font-bold font-marcellus mb-1 text-gray-900">${room.price}</div>
              <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-4 font-bold">PER NIGHT</div>
              <Button variant="ghost" className="text-xs font-bold text-[#EA580C]">
                <Link to={`/book?room=${room.id}`}>BOOK NOW</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Rooms;



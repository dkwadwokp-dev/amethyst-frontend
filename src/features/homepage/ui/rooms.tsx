import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { Button } from "../../shared/ui/button";
import { Link } from "react-router-dom";

import { rooms } from "../../rooms/data/rooms";

const Rooms = () => {
  return (
    <Section className="bg-[#F8F9FA]">
      <SectionHeading
        subtitle="OUR ROOMS"
        title="AVAILABLE ROOMS"
        className="mb-10 md:mb-16"
      />

      <div className="space-y-4 max-w-5xl mx-auto">
        {rooms.map((room) => (
          <div
            key={room.id}
            data-cursor-text="VIEW"
            className="bg-white md:px-2 flex flex-col md:flex-row md:items-center shadow-sm group overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative w-full md:w-72 h-64 md:h-48 flex-shrink-0 overflow-hidden">
              <ImagePlaceholder
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                text={room.title}
                src={room.leadImage}
              />
              {/* Mobile Price Tag */}
              <div className="absolute top-4 right-4 md:hidden bg-white/90 backdrop-blur-sm px-4 py-2  shadow-xl z-10">
                <div className="text-lg font-bold font-marcellus text-gray-900">
                  ${room.price}
                </div>
                <div className="text-[7px] tracking-[0.2em] font-black text-gray-400 -mt-1 uppercase">
                  Per Night
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-marcellus text-gray-900 uppercase tracking-wide">
                    {room.title}
                  </h3>
                  <div className="h-px w-8 bg-primary/20 hidden md:block"></div>
                </div>

                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                  {room.desc}
                </p>

                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] md:text-[9px] text-gray-400 font-bold tracking-widest uppercase">
                      Bed Type
                    </span>
                    <span className="text-[10px] md:text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                      {room.bed}
                    </span>
                  </div>
                  <div className="h-8 w-px bg-gray-100"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] md:text-[9px] text-gray-400 font-bold tracking-widest uppercase">
                      Area
                    </span>
                    <span className="text-[10px] md:text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                      {room.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Price & Action */}
              <div className="hidden md:flex flex-col items-center justify-center md:border-l border-gray-100 pl-8 min-w-[180px]">
                <div className="text-3xl font-bold font-marcellus text-gray-900 mb-1">
                  ${room.price}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-6 font-bold">
                  PER NIGHT
                </div>
                <Link to={`/book?room=${room.id}`} className="w-full">
                  <Button
                    variant="primary"
                    className="w-full text-[10px] tracking-[0.2em] font-bold bg-primary text-white border-none rounded-none py-4"
                  >
                    BOOK NOW
                  </Button>
                </Link>
              </div>

              {/* Mobile Action Button */}
              <div className="md:hidden pt-4 border-t border-gray-50">
                <Link to={`/book?room=${room.id}`}>
                  <Button
                    variant="primary"
                    className="w-full text-[11px] tracking-[0.2em] font-bold bg-primary text-white border-none rounded-none py-4"
                  >
                    RESERVE SUITE &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Rooms;

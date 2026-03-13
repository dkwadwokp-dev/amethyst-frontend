import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { Wifi, Coffee, Wind, Tv } from "lucide-react";

const RoomsAmenities = () => {
  const items = [
    { icon: <Wifi className="w-6 h-6" />, title: "FREE WIFI" },
    { icon: <Coffee className="w-6 h-6" />, title: "BREAKFAST" },
    { icon: <Wind className="w-6 h-6" />, title: "AC" },
    { icon: <Tv className="w-6 h-6" />, title: "SMART TV" },
  ];

  return (
    <Section className="bg-white">
      <SectionHeading
        subtitle="WHAT TO EXPECT"
        title="ROOM AMENITIES"
        className="mb-8 md:mb-16"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#F8F9FA] p-6 md:p-12 flex flex-col items-center justify-center text-center shadow-sm"
          >
            <div className="text-gray-900 mb-6">{item.icon}</div>
            <div className="w-6 h-[1.5px] bg-gray-300 mb-6"></div>
            <h4 className="font-bold text-[11px] tracking-widest text-gray-900 uppercase">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default RoomsAmenities;

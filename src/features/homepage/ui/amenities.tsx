import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { Wifi, Waves, Car, ThermometerSnowflake } from "lucide-react";

const amenities = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "FAST WI-FI",
    subtitle: "Stay connected with high-speed internet in every room",
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: "SWIMMING POOL",
    subtitle: "Relax and unwind in our outdoor pool",
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "FREE PARKING",
    subtitle: "Complimentary secure parking for all guests",
  },
  {
    icon: <ThermometerSnowflake className="w-6 h-6" />,
    title: "AIR CONDITIONING",
    subtitle: "Climate control system in all areas",
  },
];

const Amenities = () => {
  return (
    <Section className="bg-white">
      <SectionHeading
        subtitle="OUR FACILITIES"
        title="HOTEL AMENITIES"
        className="mb-10 md:mb-16"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F8F9FA] p-4 md:p-8 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mb-4 md:mb-6 text-gray-900 shadow-sm border border-gray-100">
              {item.icon}
            </div>
            <h4 className="font-bold text-[11px] tracking-widest uppercase mb-3 text-gray-900">
              {item.title}
            </h4>
            <p className="text-gray-500 text-[10px] leading-relaxed max-w-[150px]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Amenities;

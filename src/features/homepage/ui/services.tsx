import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { BedDouble, Utensils, Waves, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "ROOMS",
    icon: <BedDouble className="w-6 h-6" />,
    desc: "Designed for ultimate relaxation, our premium rooms feature plush bedding, panoramic city views, and modern comforts.",
  },
  {
    id: 2,
    title: "RESTAURANT",
    icon: <Utensils className="w-6 h-6" />,
    desc: "Savor exquisite culinary creations crafted by masterful chefs, blending vibrant local flavors with international flair.",
  },
  {
    id: 3,
    title: "POOL & BAR",
    icon: <Waves className="w-6 h-6" />,
    desc: "Unwind by our pristine temperature-controlled pool, paired wonderfully with refreshing signature cocktails.",
  },
  {
    id: 4,
    title: "SPA",
    icon: <Sparkles className="w-6 h-6" />,
    desc: "Rejuvenate your mind and body with our holistic, customized spa therapies and specialized wellness treatments.",
  },
];

const Services = () => {
  return (
    <Section className="bg-[#F8F9FA]">
      <SectionHeading
        subtitle="QUALITY FACILITIES AND MORE"
        title="FAMILIAR IN A REDEFINED BALANCE OF MODERN & LUXURY."
        className="mb-16 max-w-2xl mx-auto"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-6 text-gray-700">
              {service.icon}
            </div>
            <h3 className="font-bold text-[13px] tracking-widest mb-3 uppercase">
              {service.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;

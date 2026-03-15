import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { BedDouble, Utensils, Waves, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
        subtitle="OUR FACILITIES"
        title="REDEFINED MODERN LUXURY"
        className="mb-10 md:mb-16 max-w-2xl mx-auto"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-4 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 flex items-center justify-center rounded-full mb-4 md:mb-6 text-gray-700">
              {service.icon}
            </div>
            <h3 className="font-bold text-[10px] md:text-[13px] tracking-widest mb-2 md:mb-3 uppercase">
              {service.title}
            </h3>
            <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed line-clamp-3">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;

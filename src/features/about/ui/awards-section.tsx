import { Section } from "../../shared/ui/section";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  {
    year: "2024",
    title: "West Africa's Leading Luxury Hotel",
    body: "World Travel Awards",
    desc: "Recognised as the pinnacle of luxury hospitality across the West African region.",
  },
  {
    year: "2023",
    title: "Best Hotel in Ghana",
    body: "Ghana Tourism Awards",
    desc: "Awarded for delivering an exceptional guest experience that showcases the best of Ghanaian hospitality.",
  },
  {
    year: "2023",
    title: "Five-Star Excellence Award",
    body: "Forbes Travel Guide",
    desc: "One of only three hotels in Ghana to receive the prestigious Forbes five-star distinction.",
  },
  {
    year: "2022",
    title: "Best Hotel Restaurant",
    body: "Ghana Restaurant Awards",
    desc: "Our kitchen was celebrated for its masterful blend of local Ghanaian flavours and international fine dining.",
  },
  {
    year: "2022",
    title: "Outstanding Guest Experience",
    body: "TripAdvisor Travellers' Choice",
    desc: "Ranked among the top 1% of hotels worldwide based on verified guest reviews and satisfaction scores.",
  },
  {
    year: "2021",
    title: "Sustainable Luxury Hotel of the Year",
    body: "African Hotel Awards",
    desc: "Honoured for our commitment to environmental responsibility without compromising on world-class luxury.",
  },
];

const AwardsSection = () => {
  return (
    <Section className="bg-[#F8F9FA] md:py-24">
      <div className="mb-12 md:mb-16">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-4"
        >
          RECOGNITION & HONOURS
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-marcellus text-primary uppercase"
        >
          Awards & Accolades
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border border-gray-100 p-6 md:p-8 shadow-sm group hover:border-gray-300 transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <Trophy className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors duration-300" />
              <span className="font-marcellus text-2xl text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                {award.year}
              </span>
            </div>
            <h3 className="font-marcellus text-lg text-gray-900 mb-2 leading-snug">
              {award.title}
            </h3>
            <div className="w-5 h-[1.5px] bg-gray-200 mb-3"></div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
              {award.body}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">{award.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default AwardsSection;

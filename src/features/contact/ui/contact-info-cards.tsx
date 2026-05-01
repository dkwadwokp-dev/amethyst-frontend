import { Section } from "../../shared/ui/section";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfoCards = () => {
  const cards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "EMAIL ADDRhESS",
      lines: ["hello@ametysthotel.com", "events@amethysthotel.com"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "LOCATION",
      lines: ["14 Aviation Road", "Airport Residential Area, Accra, Ghana"],
    },
  ];

  return (
    <Section className="bg-[#F8F9FA] md:pb-24">
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white group p-6 md:p-10 flex flex-col items-center text-center shadow-sm border border-gray-100"
          >
            <div className="text-gray-900 mb-4 group-hover:text-primary md:mb-6">
              {card.icon}
            </div>
            <h4 className="font-bold text-[8px] group-hover:text-primary md:text-[11px] tracking-widest text-gray-900 uppercase mb-4 md:mb-6 flex flex-col items-center gap-2 md:gap-4">
              {card.title}
              <div className="w-4 md:w-6 h-[1px] md:h-[1.5px] bg-gray-300"></div>
            </h4>
            <div className="space-y-1 mt-auto">
              {card.lines.map((line, i) => (
                <p key={i} className="text-[8px] md:text-[11px] text-gray-500">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ContactInfoCards;

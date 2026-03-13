import { Section } from "../../shared/ui/section";
import { Phone, Megaphone, Mail, MapPin } from "lucide-react";

const ContactInfoCards = () => {
  const cards = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "FRONT DESK",
      lines: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "SALES & MARKETING",
      lines: ["+1 (555) 987-0001", "+1 (555) 987-0002"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "EMAIL ADDRESS",
      lines: ["hello@luxuryhotel.com", "events@luxuryhotel.com"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "LOCATION",
      lines: ["123 Luxury Avenue", "Beverly Hills, CA 90210"],
    },
  ];

  return (
    <Section className="bg-[#F8F9FA] md:pb-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-6 md:p-10 flex flex-col items-center text-center shadow-sm border border-gray-100"
          >
            <div className="text-gray-900 mb-4 md:mb-6">{card.icon}</div>
            <h4 className="font-bold text-[8px] md:text-[11px] tracking-widest text-gray-900 uppercase mb-4 md:mb-6 flex flex-col items-center gap-2 md:gap-4">
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
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ContactInfoCards;

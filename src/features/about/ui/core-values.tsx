import { Shield, Sparkles, Heart, Star } from "lucide-react";
import { Section } from "../../shared/ui/section";

const CoreValues = () => {
  const values = [
    { icon: <Shield className="w-5 h-5" />, title: "INTEGRITY" },
    { icon: <Sparkles className="w-5 h-5" />, title: "EXCELLENCE" },
    { icon: <Heart className="w-5 h-5" />, title: "PASSION" },
    { icon: <Star className="w-5 h-5" />, title: "LUXURY" },
  ];

  return (
    <Section className="bg-[#F8F9FA] border-y border-gray-100">
      <div className="grid grid-cols-4 gap-2 md:gap-8">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="flex group flex-col items-center justify-center text-center"
          >
            <div className="w-10 h-10 group-hover:text-primary md:w-12 md:h-12 bg-white flex items-center justify-center shadow-sm mb-3 md:mb-4 text-gray-900 ">
              {val.icon}
            </div>
            <div className="w-4 h-[1px] md:w-6 md:h-[1.5px] bg-gray-300 mb-3 md:mb-4"></div>
            <h4 className="text-[8px] group-hover:text-primary md:text-[10px] font-bold tracking-widest text-gray-900 uppercase">
              {val.title}
            </h4>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CoreValues;

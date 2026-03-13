import { Section } from "../../shared/ui/section";

import { policies } from "../data/policies";

const PoliciesSection = () => {
  return (
    <Section className="bg-[#F8F9FA]">
      <div className="mb-6 md:mb-16">
        <h2 className="text-3xl font-marcellus text-gray-900 border-b border-gray-200 pb-4 inline-block">
          Hotel Policies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-16 gap-y-4 md:gap-y-12">
        {policies.map((policy, i) => (
          <div key={i} className="border-t border-gray-300 pt-4 md:pt-6">
            <h4 className="font-bold text-[11px] tracking-widest uppercase mb-3 text-gray-900">
              {policy.title}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed font-manrope">
              {policy.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PoliciesSection;

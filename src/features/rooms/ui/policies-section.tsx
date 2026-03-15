import { Section } from "../../shared/ui/section";
import { motion } from "framer-motion";

import { policies } from "../data/policies";

const PoliciesSection = () => {
  return (
    <Section className="bg-[#F8F9FA]">
      <div className="mb-6 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-marcellus text-gray-900 border-b border-gray-200 pb-4 inline-block"
        >
          Hotel Policies
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-16 gap-y-4 md:gap-y-12">
        {policies.map((policy, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t border-gray-300 pt-4 md:pt-6"
          >
            <h4 className="font-bold text-[11px] tracking-widest uppercase mb-3 text-gray-900">
              {policy.title}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed font-manrope">
              {policy.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default PoliciesSection;

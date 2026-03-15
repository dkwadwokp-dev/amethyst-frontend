import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { motion } from "framer-motion";

import { faqs } from "../data/faqs";

const FaqSection = () => {
  return (
    <Section className="bg-white py-24">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <SectionHeading
            subtitle="FREQUENTLY ASKED QUESTIONS"
            title="ANSWERS & INSIGHTS"
            alignment="left"
            className="mb-6"
          />
          <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
            Find answers to some of the most common questions our guests ask. If
            you need further assistance, please don't hesitate to reach out to
            our service team.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-t border-gray-200 pt-6"
            >
              <h4 className="font-bold text-[11px] tracking-widest uppercase mb-3 text-gray-900">
                {faq.q}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FaqSection;

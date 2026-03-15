import { Section } from "../../shared/ui/section";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Section className="bg-white pt-12 pb-8 md:pt-20 md:pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base text-gray-600 font-manrope leading-loose italic"
        >
          "A haven built with style, elegance, and outstanding hospitality. We
          pride ourselves on providing world-class facilities and truly
          personalized service to our esteemed guests. Step into a world where
          every detail is crafted for your utmost comfort and absolute peace of
          mind."
        </motion.p>
      </div>
    </Section>
  );
};

export default Intro;

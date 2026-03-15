import { Section } from "../../shared/ui/section";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const VideoTour = () => {
  return (
    <Section className="bg-white md:py-24">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-4"
          >
            EXPERIENCE IT
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-marcellus text-primary mb-6 uppercase"
          >
            Take a Tour
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-gray-500 leading-relaxed font-manrope"
          >
            Explore our beautifully designed facilities, luxurious rooms, and
            world-class amenities from the comfort of your screen. Let us give
            you a glimpse into the perfect urban haven that awaits you.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full aspect-video bg-[#D1D5DB] flex items-center justify-center cursor-pointer group overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            className="w-16 h-16 bg-[#2A2E33] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg"
          >
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default VideoTour;

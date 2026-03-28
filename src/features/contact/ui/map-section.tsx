import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <iframe
          title="Amethyst Hotel Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2100%2C5.5900%2C-0.1700%2C5.6200&layer=mapnik&marker=5.6037%2C-0.1870"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-8 left-8 bg-white p-6 shadow-sm min-w-[280px]"
      >
        <h4 className="font-bold text-sm text-gray-900 mb-1">Hotel Location</h4>
        <div className="w-6 h-[1.5px] bg-gray-300 mb-3"></div>
        <p className="text-xs text-gray-500">14 Aviation Road</p>
        <p className="text-xs text-gray-500">Airport Residential Area</p>
        <p className="text-xs text-gray-500">Accra, Ghana</p>
      </motion.div>
    </div>
  );
};

export default MapSection;

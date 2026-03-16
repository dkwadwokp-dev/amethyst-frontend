import { useImageModal } from "../../shared/context/image-modal-context";
import { Maximize2 } from "lucide-react";
import { Section } from "../../shared/ui/section";
import { motion } from "framer-motion";

const GallerySection = () => {
  const { openModal } = useImageModal();
  const images = [
    {
      url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
      title: "Prime Ribeye Steak",
    },
    {
      url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1200",
      title: "Seafood Paella",
    },
    {
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
      title: "Pan-Seared Salmon",
    },
    {
      url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
      title: "Tiramisu",
    },
  ];

  return (
    <Section className="py-8 md:py-16">
      <div className="mb-8 md:mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-amber-600 font-medium tracking-widest text-sm uppercase block mb-1"
        >
          Our Gallery
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-light text-neutral-900 tracking-tight"
        >
          SIGNATURE CREATIONS
        </motion.h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 auto-rows-[180px] md:auto-rows-[300px]">
        {/* Large item top left (span 2 cols on mobile, 2 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden group col-span-2 md:col-span-2 row-span-1 md:row-span-1 cursor-pointer"
          onClick={() => openModal(images[1].url, images[1].title)}
        >
          <img
            src={images[1].url}
            alt={images[1].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
              <Maximize2 size={24} className="text-white" />
            </div>
            <div className="absolute bottom-6 left-6 animate-in slide-in-from-bottom-2 duration-500">
              <p className="text-white font-light text-xl italic">
                {images[1].title}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Top right (span 1 col, 2 rows on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden group row-span-1 md:row-span-2 col-span-1 cursor-pointer"
          onClick={() => openModal(images[0].url, images[0].title)}
        >
          <img
            src={images[0].url}
            alt={images[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
              <Maximize2 size={24} className="text-white" />
            </div>
            <div className="absolute bottom-6 left-6 animate-in slide-in-from-bottom-2 duration-500">
              <p className="text-white font-light text-xl italic">
                {images[0].title}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom left (mobile: col 1, row 2; desktop: col 1, row 2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden group col-span-1 row-span-1 cursor-pointer"
          onClick={() => openModal(images[2].url, images[2].title)}
        >
          <img
            src={images[2].url}
            alt={images[2].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
              <Maximize2 size={24} className="text-white" />
            </div>
            <div className="absolute bottom-6 left-6 animate-in slide-in-from-bottom-2 duration-500">
              <p className="text-white font-light text-xl italic">
                {images[2].title}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom right (mobile: col 2, row 2; desktop: col 2, row 2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden group col-span-2 md:col-span-1 row-span-1 cursor-pointer"
          onClick={() => openModal(images[3].url, images[3].title)}
        >
          <img
            src={images[3].url}
            alt={images[3].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
              <Maximize2 size={24} className="text-white" />
            </div>
            <div className="absolute bottom-6 left-6 animate-in slide-in-from-bottom-2 duration-500">
              <p className="text-white font-light text-xl italic">
                {images[3].title}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default GallerySection;

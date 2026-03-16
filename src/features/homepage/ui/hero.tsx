import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useImageModal } from "../../shared/context/image-modal-context";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../../../assets/hero-1.png";
import hero2 from "../../../assets/hero-2.png";

const slides = [
  {
    image: hero1,
    smallTitle: "Epicurean Excellence",
    mainTitle: "A Symphony of Modern Luxury",
    desc: "Discover a harmonious blend of tailored experiences and world-class comfort in the heart of the city.",
    link: "/about-us",
    cta: "Explore Our Story",
  },
  {
    image: hero2,
    smallTitle: "Culinary Artistry",
    mainTitle: "Sensory Dining Experiences",
    desc: "Experience the art of fine dining with seasonal menus crafted by world-class chefs in an intimate setting.",
    link: "/dishes",
    cta: "View The Menu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2600&auto=format&fit=crop",
    smallTitle: "Urban Sanctuary",
    mainTitle: "Refined Living Redefined",
    desc: "Retreat to our elegantly appointed suites, designed to be your private haven of peace and sophistication.",
    link: "/rooms",
    cta: "Discover Suites",
  },
];

const Hero = () => {
  const { openModal } = useImageModal();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 8000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1000);
    resetTimer();
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
    resetTimer();
  };

  return (
    <div className="relative bg-[#0a0a0a] h-[100dvh] w-full overflow-hidden flex items-center">
      {/* Background Slides */}
      <div className="absolute inset-0 cursor-none" data-cursor-text="EXPLORE">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[5000ms] ${
                index === current ? "scale-105" : "scale-100"
              } ${index === current ? "cursor-pointer pointer-events-auto" : "pointer-events-none"}`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: "center 50%",
              }}
              onClick={() => openModal(slide.image, slide.mainTitle)}
            />
            {/* Fine-tuned Overlays for an elegant balance */}
            <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Slide Counter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="text-stone-400 font-manrope text-sm tracking-[0.3em]">
                  0{current + 1}
                </span>
                <div className="h-px w-12 bg-stone-600"></div>
                <span className="text-stone-500 font-manrope text-sm tracking-[0.3em]">
                  0{slides.length}
                </span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-primary font-manrope text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-4"
              >
                {slides[current].smallTitle}
              </motion.p>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-5xl md:text-8xl font-marcellus text-white leading-tight mb-8 tracking-[-0.02em] font-light"
              >
                {slides[current].mainTitle}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-xl text-stone-400 text-base md:text-lg font-manrope font-light leading-relaxed mb-12"
              >
                {slides[current].desc}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link
                  to={slides[current].link}
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="text-white font-manrope text-sm font-bold tracking-widest uppercase py-4 border-b border-primary/30 group-hover:border-primary transition-all duration-300">
                    {slides[current].cta}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Layer */}
      <div className="absolute bottom-6 md:bottom-12 left-6 right-6 md:left-auto md:right-12 lg:right-20 z-30 flex flex-row md:flex-col items-center justify-between md:justify-center gap-6 md:gap-8">
        {/* Indicators */}
        <div className="flex flex-row md:flex-col gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrent(index);
                  setTimeout(() => setIsTransitioning(false), 1000);
                  resetTimer();
                }
              }}
              className={`transition-all duration-500 rounded-full ${
                index === current
                  ? "w-12 h-1 md:w-1 md:h-12 bg-primary"
                  : "w-3 h-1 md:w-1 md:h-3 bg-white/80 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 flex cursor-pointer items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/40 transition-all rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 flex cursor-pointer items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/40 transition-all rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-32 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
    </div>
  );
};

export default Hero;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2600&auto=format&fit=crop",
    smallTitle: "Epicurean Excellence",
    mainTitle: "A Symphony of Modern Luxury",
    desc: "Discover a harmonious blend of tailored experiences and world-class comfort in the heart of the city.",
    link: "/about-us",
    cta: "Explore Our Story",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2600&auto=format&fit=crop",
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content Layer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-4xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${index === current ? "block" : "hidden"}`}
            >
              {/* Slide Counter */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-stone-400 font-manrope text-sm tracking-[0.3em]">
                  0{index + 1}
                </span>
                <div className="h-px w-12 bg-stone-600"></div>
                <span className="text-stone-500 font-manrope text-sm tracking-[0.3em]">
                  0{slides.length}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-white/80 font-manrope text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-4">
                {slide.smallTitle}
              </p>

              {/* Main Title */}
              <h1 className="text-5xl md:text-8xl font-marcellus text-white leading-tight mb-8 tracking-[-0.02em] font-light">
                {slide.mainTitle}
              </h1>

              {/* Description */}
              <p className="max-w-xl text-stone-400 text-base md:text-lg font-manrope font-light leading-relaxed mb-12">
                {slide.desc}
              </p>

              {/* CTA */}
              <div>
                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="text-white font-manrope text-sm font-bold tracking-widest uppercase py-4 border-b border-primary/30 group-hover:border-primary transition-all duration-300">
                    {slide.cta}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Layer */}
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-20 z-30 flex flex-col items-center gap-8">
        {/* Indicators */}
        <div className="flex flex-col gap-3">
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
              className={`w-1 transition-all duration-500 rounded-full ${
                index === current
                  ? "h-12 bg-primary"
                  : "h-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/40 transition-all rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/40 transition-all rounded-full"
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

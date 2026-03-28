import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
}) => {
  const isLight = variant === "light";

  return (
    <div
      className={`flex items-center gap-3 md:gap-4 group cursor-pointer ${className}`}
    >
      <div className="relative">
        {/* Decorative Hexagon/Diamond frame */}
        <div
          className={`w-8 h-8 md:w-8 md:h-8 rotate-45 border-[1.5px] transition-all duration-500 group-hover:rotate-90 ${
            isLight
              ? "border-white/40 group-hover:border-white"
              : "border-primary/30 group-hover:border-primary"
          }`}
        ></div>

        {/* Inner symbol - Monogram AH */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
            isLight ? "text-white" : "text-primary"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 md:w-5 md:h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 6L4 20H6.5L8.5 15H15.5L17.5 20H20L13 6H11ZM9.5 13L12 6.8L14.5 13H9.5Z" />
            <path d="M4 4H20V5.5H4V4Z" />
          </svg>
        </div>
      </div>

      <div className="flex-col leading-none flex">
        <span
          className={`text-sm md:text-xl font-marcellus tracking-[0.2em] uppercase font-bold transition-colors ${
            isLight ? "text-white" : "text-gray-900"
          }`}
        >
          Amethyst
        </span>
        <span
          className={`text-[8px] md:text-[9px] tracking-[0.4em] uppercase opacity-60 font-manrope font-bold ${
            isLight ? "text-stone-300" : "text-stone-500"
          }`}
        >
          Suites & Dining
        </span>
      </div>
    </div>
  );
};

export default Logo;

import React from "react";

interface LoadingProps {
  className?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  className = "",
  fullScreen = false,
}) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 flex items-center justify-center bg-white"
    : `flex items-center justify-center py-12 ${className}`;

  return (
    <div className={containerClasses}>
      <div className="relative animate-pulse">
        {/* Decorative Hexagon/Diamond frame - Spinning for loading effect */}
        <div className="w-12 h-12 md:w-16 md:h-16 rotate-45 border-[2px] border-primary/30 animate-[spin_3s_linear_infinite]"></div>

        {/* Inner symbol */}
        <div className="absolute inset-0 flex items-center justify-center text-primary">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-8 md:h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 6L4 20H6.5L8.5 15H15.5L17.5 20H20L13 6H11ZM9.5 13L12 6.8L14.5 13H9.5Z" />
            <path d="M4 4H20V5.5H4V4Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

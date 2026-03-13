import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (mouse) and is not mobile
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, []);

  if (!isDesktop) return null;

  const secondaryColor = "#60a5fa"; // From our theme

  return (
    <div
      className={`custom-cursor-container pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-500`}
    >
      {/* Trailing Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border-2 transition-all duration-300 ease-out flex items-center justify-center text-center overflow-hidden z-[90]"
        style={{
          width: isHovering ? "80px" : "40px",
          height: isHovering ? "80px" : "40px",
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          borderColor: secondaryColor,
          backgroundColor: isHovering
            ? "rgba(96, 165, 250, 0.1)"
            : "transparent",
        }}
      />

      {/* Main Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full transition-transform duration-100 ease-out z-[100] border-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) ${isHovering ? "scale(0.6)" : "scale(1)"}`,
          borderColor: secondaryColor,
        }}
      />
    </div>
  );
};

export default CustomCursor;

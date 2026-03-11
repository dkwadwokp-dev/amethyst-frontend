interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  alignment?: "left" | "center";
  className?: string;
  light?: boolean;
}

export const SectionHeading = ({
  subtitle,
  title,
  alignment = "center",
  className = "",
  light = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex flex-col gap-2 ${alignment === "center" ? "items-center text-center mx-auto" : "items-start"} ${className}`}
    >
      {subtitle && (
        <span
          className={`text-[11px] font-black tracking-[0.2em] uppercase ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl font-marcellus ${light ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
    </div>
  );
};

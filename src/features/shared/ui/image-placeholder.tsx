interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

export const ImagePlaceholder = ({
  className = "",
  text = "IMAGE PLACEMENT",
}: ImagePlaceholderProps) => {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-400 font-manrope font-semibold tracking-widest text-xs uppercase px-4 text-center ${className}`}
    >
      {text}
    </div>
  );
};

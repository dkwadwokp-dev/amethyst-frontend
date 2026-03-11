interface ImagePlaceholderProps {
  className?: string;
  text?: string;
  src?: string;
}

export const ImagePlaceholder = ({
  className = "",
  text = "IMAGE PLACEMENT",
  src,
}: ImagePlaceholderProps) => {
  if (src) {
    return (
      <img src={src} alt={text} className={`object-cover ${className}`} />
    );
  }

  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-400 font-manrope font-semibold tracking-widest text-xs uppercase px-4 text-center ${className}`}
    >
      {text}
    </div>
  );
};

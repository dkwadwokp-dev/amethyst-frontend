import { useImageModal } from "../context/image-modal-context";
import { Maximize2 } from "lucide-react";

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
  const { openModal } = useImageModal();

  if (src) {
    return (
      <div 
        className={`relative group cursor-pointer overflow-hidden ${className}`}
        onClick={() => openModal(src, text)}
      >
        <img 
          src={src} 
          alt={text} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 size={24} className="text-white" />
          </div>
        </div>
      </div>
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

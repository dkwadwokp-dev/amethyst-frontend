import { createContext, useContext, useState, type ReactNode } from "react";

interface ImageModalContextType {
  openModal: (src: string, alt?: string) => void;
  closeModal: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(
  undefined,
);

export const ImageModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ src: "", alt: "" });

  const openModal = (src: string, alt: string = "Image") => {
    setModalData({ src, alt });
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <ImageModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <ImageModal
          src={modalData.src}
          alt={modalData.alt}
          onClose={closeModal}
        />
      )}
    </ImageModalContext.Provider>
  );
};

export const useImageModal = () => {
  const context = useContext(ImageModalContext);
  if (!context) {
    throw new Error("useImageModal must be used within an ImageModalProvider");
  }
  return context;
};

import { X, Download, ZoomIn, ZoomOut, Copy, Check } from "lucide-react";

const ImageModal = ({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) => {
  const [scale, setScale] = useState(1);
  const [isCopied, setIsCopied] = useState(false);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.25));
  const handleResetZoom = () => setScale(1);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(src);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 animate-in fade-in duration-300">
      {/* Top Bar Actions */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
        <div className="text-white/80 font-manrope text-[10px] tracking-[0.3em] uppercase hidden md:block">
          {alt}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 0.25}
              className="p-2 text-white/70 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              title="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-3 text-[10px] font-bold text-white/50 hover:text-white transition-colors"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 2}
              className="p-2 text-white/70 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              title="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
          </div>

          <div className="h-6 w-px bg-white/10 hidden md:block" />

          <button
            onClick={handleDownload}
            className="p-2.5 bg-white/5 rounded-full text-white/70 hover:text-white border border-white/10 transition-all hover:bg-white/10"
            title="Download"
          >
            <Download size={18} />
          </button>

          <button
            onClick={handleCopy}
            className="p-2.5 bg-white/5 rounded-full text-white/70 hover:text-white border border-white/10 transition-all hover:bg-white/10"
            title="Copy Link"
          >
            {isCopied ? (
              <Check size={18} className="text-green-400" />
            ) : (
              <Copy size={18} />
            )}
          </button>

          <button
            onClick={onClose}
            className="p-2.5 bg-primary rounded-full text-white hover:scale-110 transition-all"
            title="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div
        className="w-full h-full flex items-center justify-center p-4 md:p-12 overflow-auto"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className="relative transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl "
            onDoubleClick={handleResetZoom}
          />
        </div>
      </div>

      {/* Mobile Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
        <p className="text-white/30 text-[9px] tracking-widest uppercase font-bold">
          Double tap to reset zoom
        </p>
      </div>
    </div>
  );
};

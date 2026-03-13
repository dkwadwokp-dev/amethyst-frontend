import { useImageModal } from "../../shared/context/image-modal-context";
import { Maximize2 } from "lucide-react";

const GalleryGrid = () => {
  const { openModal } = useImageModal();

  const galleryImages = [
    { url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Hotel Lobby" },
    { url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Luxury Suite" },
    { url: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Fine Dining" },
    { url: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Poolside View" },
    { url: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Hotel Exterior" },
    { url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Executive Lounge" },
  ];

  return (
    <div className="pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="relative group cursor-pointer overflow-hidden rounded-sm" onClick={() => openModal(galleryImages[0].url, galleryImages[0].alt)}>
              <img src={galleryImages[0].url} className="bg-[#D1D5DB] object-cover h-64 w-full transition-transform duration-700 group-hover:scale-105" alt={galleryImages[0].alt} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm" onClick={() => openModal(galleryImages[1].url, galleryImages[1].alt)}>
              <img src={galleryImages[1].url} className="bg-[#E5E7EB] object-cover h-96 w-full transition-transform duration-700 group-hover:scale-105" alt={galleryImages[1].alt} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm" onClick={() => openModal(galleryImages[2].url, galleryImages[2].alt)}>
              <img src={galleryImages[2].url} className="bg-[#D1D5DB] object-cover h-64 w-full transition-transform duration-700 group-hover:scale-105" alt={galleryImages[2].alt} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative group cursor-pointer overflow-hidden rounded-sm" onClick={() => openModal(galleryImages[3].url, galleryImages[3].alt)}>
              <img src={galleryImages[3].url} className="bg-[#E5E7EB] object-cover h-96 w-full transition-transform duration-700 group-hover:scale-105" alt={galleryImages[3].alt} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm" onClick={() => openModal(galleryImages[4].url, galleryImages[4].alt)}>
              <img src={galleryImages[4].url} className="bg-[#D1D5DB] object-cover h-64 w-full transition-transform duration-700 group-hover:scale-105" alt={galleryImages[4].alt} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm" onClick={() => openModal(galleryImages[5].url, galleryImages[5].alt)}>
              <img src={galleryImages[5].url} className="bg-[#E5E7EB] object-cover h-80 w-full transition-transform duration-700 group-hover:scale-105" alt={galleryImages[5].alt} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default GalleryGrid;

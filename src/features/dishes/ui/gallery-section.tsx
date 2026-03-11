const GallerySection = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {/* Large item top left */}
        <div className="bg-[#D1D5DB] md:col-span-2 -sm flex items-center justify-center"></div>
        {/* Top right */}
        <div className="bg-[#E5E7EB] md:row-span-2 -sm flex items-center justify-center"></div>
        {/* Bottom left */}
        <div className="bg-[#E5E7EB] -sm flex items-center justify-center"></div>
        {/* Bottom middle */}
        <div className="bg-[#D1D5DB] -sm flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default GallerySection;

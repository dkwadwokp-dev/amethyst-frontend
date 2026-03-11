const GalleryGrid = () => {
  return (
    <div className="pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="flex flex-col gap-4">
           <div className="bg-[#D1D5DB] h-64 w-full rounded-sm"></div>
           <div className="bg-[#E5E7EB] h-96 w-full rounded-sm"></div>
           <div className="bg-[#D1D5DB] h-64 w-full rounded-sm"></div>
         </div>
         <div className="flex flex-col gap-4">
           <div className="bg-[#E5E7EB] h-96 w-full rounded-sm"></div>
           <div className="bg-[#D1D5DB] h-64 w-full rounded-sm"></div>
           <div className="bg-[#E5E7EB] h-80 w-full rounded-sm"></div>
         </div>
      </div>
    </div>
  );
};

export default GalleryGrid;

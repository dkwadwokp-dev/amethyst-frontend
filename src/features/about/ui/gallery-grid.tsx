const GalleryGrid = () => {
  return (
    <div className="pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="flex flex-col gap-4">
           <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800" className="bg-[#D1D5DB] object-cover h-64 w-full rounded-sm" alt="Hotel 1" />
           <img src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800" className="bg-[#E5E7EB] object-cover h-96 w-full rounded-sm" alt="Hotel 2" />
           <img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800" className="bg-[#D1D5DB] object-cover h-64 w-full rounded-sm" alt="Hotel 3" />
         </div>
         <div className="flex flex-col gap-4">
           <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800" className="bg-[#E5E7EB] object-cover h-96 w-full rounded-sm" alt="Hotel 4" />
           <img src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800" className="bg-[#D1D5DB] object-cover h-64 w-full rounded-sm" alt="Hotel 5" />
           <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800" className="bg-[#E5E7EB] object-cover h-80 w-full rounded-sm" alt="Hotel 6" />
         </div>
      </div>
    </div>
  );
};

export default GalleryGrid;

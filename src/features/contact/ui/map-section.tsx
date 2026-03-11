import { Map } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="relative w-full h-[500px] bg-[#D1D5DB] flex items-center justify-center">
       <Map className="w-32 h-32 text-gray-400" />
       
       <div className="absolute top-8 left-8 bg-white p-6 shadow-sm min-w-[280px]">
           <h4 className="font-bold text-sm text-gray-900 mb-1">Hotel Location</h4>
           <div className="w-6 h-[1.5px] bg-gray-300 mb-3"></div>
           <p className="text-xs text-gray-500">Centrally located in the heart of the city.</p>
       </div>
    </div>
  );
};

export default MapSection;

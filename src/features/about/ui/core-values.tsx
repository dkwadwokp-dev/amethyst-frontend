import { Shield, Sparkles, Heart, Star } from 'lucide-react';

const CoreValues = () => {
  const values = [
    { icon: <Shield className="w-5 h-5" />, title: 'INTEGRITY' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'EXCELLENCE' },
    { icon: <Heart className="w-5 h-5" />, title: 'PASSION' },
    { icon: <Star className="w-5 h-5" />, title: 'LUXURY' },
  ];

  return (
    <div className="bg-[#F8F9FA] py-16 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center">
             <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm mb-4 text-gray-900 rounded-sm">
               {val.icon}
             </div>
             <div className="w-6 h-[1.5px] bg-gray-300 mb-4"></div>
             <h4 className="text-[10px] font-bold tracking-widest text-gray-900 uppercase">{val.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

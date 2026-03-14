import { Utensils } from "lucide-react";
import { diningAreas } from "../../book/data/tables";

interface AreaDetailsCardProps {
  areaId: string;
}

export const AreaDetailsCard = ({ areaId }: AreaDetailsCardProps) => {
  const currentArea = diningAreas.find((da) => da.id === areaId);

  if (!currentArea) return null;

  return (
    <div className="bg-white p-4 md:p-8 shadow-sm border border-gray-100 h-full">
      <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6">
        Area Details
      </h4>

      {currentArea.leadImage && (
        <img
          src={currentArea.leadImage}
          alt={currentArea.title}
          className="w-full h-40 object-cover mb-6 border border-gray-100"
        />
      )}

      <div className="flex items-center gap-2 mb-4 text-[10px] text-gray-500 font-bold tracking-widest uppercase">
        <Utensils className="w-3 h-3 text-gray-400" />
        {currentArea.title}
      </div>

      <p className="text-xs text-gray-500 leading-relaxed font-manrope">
        {currentArea.desc ||
          "Enjoy a unique dining experience in our beautifully appointed space, where every detail is crafted for your comfort."}
      </p>
    </div>
  );
};

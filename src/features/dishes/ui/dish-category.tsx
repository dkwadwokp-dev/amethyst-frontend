import { useState } from 'react';
import { Section } from '../../shared/ui/section';
import { SectionHeading } from '../../shared/ui/section-heading';
import { ImagePlaceholder } from '../../shared/ui/image-placeholder';
import { Button } from '../../shared/ui/button';

interface DishItem {
  id: string | number;
  name: string;
  price: string;
  desc: string;
  image?: string;
}

interface DishCategoryProps {
  subtitle: string;
  title: string;
  items: DishItem[];
}

const DishCategory = ({ subtitle, title, items }: DishCategoryProps) => {
  const [visibleCount, setVisibleCount] = useState(4);
  
  const handleLoadMore = () => {
    setVisibleCount(items.length); // Show all items
  };

  const hasMore = items.length > visibleCount;

  return (
    <Section className="bg-white py-12">
      <SectionHeading subtitle={subtitle} title={title} className="mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {items.slice(0, visibleCount).map(item => (
          <div key={item.id} className="flex flex-col">
             <ImagePlaceholder className="w-full aspect-square mb-6 rounded-sm object-cover" src={item.image} text={item.name} />
             <div className="flex justify-between items-start mb-2">
               <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-900">{item.name}</h4>
               <span className="font-bold text-[11px] text-gray-900">{item.price}</span>
             </div>
             <p className="text-[11px] text-gray-500 leading-relaxed pr-4">{item.desc}</p>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center transition-all">
          <Button 
            variant="primary" 
            onClick={handleLoadMore}
            className="bg-black text-white hover:bg-gray-800 text-[10px] tracking-widest px-10 py-3 rounded-none border-none shadow-none"
          >
            LOAD MORE
          </Button>
        </div>
      )}
    </Section>
  );
};

export default DishCategory;

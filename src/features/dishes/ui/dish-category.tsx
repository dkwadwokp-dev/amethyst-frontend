import { useState } from "react";
import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { Button } from "../../shared/ui/button";
import {
  useDishCategory,
  type DishCategoryType,
} from "../actions/use-dish-category";
import { Loading } from "../../shared/ui/loading";
import type { DishItem } from "../interfaces/dish.interface";
import { motion } from "framer-motion";

interface DishCategoryProps {
  subtitle: string;
  title: string;
  category: DishCategoryType;
}

const DishCategory = ({ subtitle, title, category }: DishCategoryProps) => {
  const { data: items, isLoading, isError } = useDishCategory(category);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    if (items) setVisibleCount(items.length); // Show all items
  };

  const hasMore = items ? items.length > visibleCount : false;

  return (
    <Section className="bg-white py-8 md:py-12">
      <SectionHeading
        subtitle={subtitle}
        title={title}
        className="mb-8 md:mb-12"
      />

      {isLoading ? (
        <Loading className="py-12" />
      ) : isError || !items ? (
        <div className="text-center py-10 text-red-500 font-marcellus tracking-wider text-sm">
          Failed to load {title.toLowerCase()} menu.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {items.slice(0, visibleCount).map((item: DishItem, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <ImagePlaceholder
                  className="w-full aspect-square mb-3 md:mb-6  object-cover"
                  src={item.image}
                  text={item.name}
                />
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-[9px] md:text-[11px] uppercase tracking-widest text-gray-900 line-clamp-1">
                    {item.name}
                  </h4>
                  <span className="font-bold text-[9px] md:text-[11px] text-gray-900 ml-1">
                    {item.price}
                  </span>
                </div>
                <p className="text-[9px] md:text-[11px] text-gray-500 leading-relaxed pr-2 line-clamp-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          {hasMore && (
            <div className="flex justify-center transition-all">
              <Button
                variant="primary"
                onClick={handleLoadMore}
                className="bg-black text-white hover:bg-gray-800 text-[10px] tracking-widest px-10 py-3 rounded-none border-none shadow-none"
              >
                LOAD MORE
              </Button>
            </div>
          )}
        </>
      )}
    </Section>
  );
};

export default DishCategory;

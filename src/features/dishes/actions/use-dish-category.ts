import { useQuery } from "@tanstack/react-query";
import {
  breakfastItems,
  lunchItems,
  dinnerItems,
  dessertItems,
  drinkItems,
} from "../data/dishes";
import type { DishItem } from "../interfaces/dish.interface";

export type DishCategoryType =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "dessert"
  | "drinks";

const getCategoryData = (category: DishCategoryType): DishItem[] => {
  switch (category) {
    case "breakfast":
      return breakfastItems;
    case "lunch":
      return lunchItems;
    case "dinner":
      return dinnerItems;
    case "dessert":
      return dessertItems;
    case "drinks":
      return drinkItems;
    default:
      return [];
  }
};

const fetchDishesByCategory = async (
  category: DishCategoryType,
): Promise<DishItem[]> => {
  // simulating network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return getCategoryData(category);
};

export const useDishCategory = (category: DishCategoryType) => {
  return useQuery({
    queryKey: ["dishes", category],
    queryFn: () => fetchDishesByCategory(category),
  });
};

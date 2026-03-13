import { useQuery } from "@tanstack/react-query";
import {
  breakfastItems,
  lunchItems,
  dinnerItems,
  dessertItems,
  drinkItems,
} from "../data/dishes";
import type { DishItem } from "../interfaces/dish.interface";

const fetchDishesData = async (): Promise<DishItem[]> => {
  // simulating network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    ...breakfastItems.slice(0, 2),
    ...lunchItems.slice(0, 2),
    ...dinnerItems.slice(0, 2),
    ...dessertItems.slice(0, 2),
    ...drinkItems.slice(0, 2),
  ];
};

export const useDishes = () => {
  return useQuery({
    queryKey: ["dishes"],
    queryFn: fetchDishesData,
  });
};

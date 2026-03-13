export interface DishItem {
  id: string;
  name: string;
  price: string;
  desc: string;
  image: string;
}

export interface MenuData {
  breakfastItems: DishItem[];
  lunchItems: DishItem[];
  dinnerItems: DishItem[];
  dessertItems: DishItem[];
  drinkItems: DishItem[];
}

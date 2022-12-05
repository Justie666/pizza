export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: number;
  sizes: number[];
  types: number[];
  rating: number;
};

export type SearchPizzaParams = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

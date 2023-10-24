export type Order = {
  id: number;
  userId: number;
  productIds?: number[] | Productid[]
};

type Productid = {
  id: number;
};
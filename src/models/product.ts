export interface ProductList {
  productName: string;
  price: number;
  amountProduct: Array<any>;
  description: object;
  classify: string;
  imageUrl: object;
  comment: Array<any>;
  newArrival: boolean;
  filter?: any;
  sort?: any;
}

export interface ProductDetail {
  productName: string;
  price: number;
  amountProduct: Array<any>;
  description: object;
  classify: string;
  imageUrl: object;
  comment: Array<any>;
  newArrival: boolean;
}

export type Color = "black" | "white" | "gray" | "blue";

export type Size = "M" | "L" | "XL" | "2XL";

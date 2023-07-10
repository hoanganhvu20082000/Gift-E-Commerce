import { Size, Color } from "./product";

export interface CartItem {
  id: string;
  product_name: string;
  image_url: string;
  price: number;
  quantity: number;
  color: Color;
  size?: Size;
}

export interface Cart {
  cartItems: Array<CartItem> | any[];
}

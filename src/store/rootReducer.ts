import { combineReducers } from "@reduxjs/toolkit";
import routerReducer from "./router/routerReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../store/auth/authSlice";
import registerReducer from "./register/registerSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
import listFavoriteReducer from "./list-favorite/listFavoriteSlice";
import orderReducer from "./order/orderSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const cartUserConfig = {
  key: "cart",
  storage: storage,
};

const listFavoriteConfig = {
  key: "favoriteProduct",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: persistReducer(cartUserConfig, cartReducer),
  register: registerReducer,
  router: routerReducer,
  product: productReducer,
  favorite: persistReducer(listFavoriteConfig, listFavoriteReducer),
  order: orderReducer,
});

export default rootReducer;

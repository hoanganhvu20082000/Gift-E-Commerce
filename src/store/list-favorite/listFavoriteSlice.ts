import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ListProductFavotite {
  fetching: boolean;
  listFavoriteItems: any;
  listFavoriteProduct: any[];
  error: boolean;
}

const initialState: ListProductFavotite = {
  fetching: false,
  listFavoriteItems: null,
  listFavoriteProduct: [],
  error: false,
};

const listFavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    fetchFavoriteListStart(state, actions: PayloadAction<any>) {
      state.fetching = true;
      state.error = false;
    },
    fetchFavoriteListSuccess(state, actions: PayloadAction<any>) {
      state.fetching = false;
      state.listFavoriteProduct = actions.payload;
      state.error = false;
    },
    fetchFavoriteListFailed(state) {
      state.fetching = false;
      state.error = true;
    },
    addProductToFavoriteListStart(state, action: PayloadAction<any>) {
      state.fetching = true;
      state.listFavoriteItems = action.payload;
      state.error = false;
    },
    addProductToFavoriteListSuccess(state, action: PayloadAction<any>) {
      state.fetching = false;
      state.listFavoriteProduct = [
        ...state.listFavoriteProduct,
        action.payload,
      ];
      state.error = false;
    },
    addProductToFavoriteListFailed(state) {
      state.fetching = false;
      state.error = true;
    },

    removeProductFromFavoriteStart(state, action: PayloadAction<any>) {
      state.fetching = true;
      state.listFavoriteItems = action.payload;
      state.error = false;
    },
    removeProductFromFavoriteSuccess(state, action: PayloadAction<any>) {
      state.fetching = false;
      state.listFavoriteProduct = state.listFavoriteProduct.filter(
        (item) => item.id !== action.payload
      );
      state.error = false;
    },
    removeProductFromFavoriteFailed(state) {
      state.fetching = false;
      state.error = true;
    },
    clearFavoriteFailed(state) {
      state.listFavoriteProduct = [];
    },
  },
});

// EXPORT ACTIONS
export const listFavoriteActions = listFavoriteSlice.actions;

// EXPORT REDUCER
const listFavoriteReducer = listFavoriteSlice.reducer;
export default listFavoriteReducer;

// EXPORT SELECTOR
export const listProductFavorite = (state: RootState) =>
  state.favorite.listFavoriteProduct;

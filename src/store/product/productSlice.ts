import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductList } from "../../models/product";
import { RootState } from "../store";

export interface ProductListState {
  fetching: boolean;
  listProduct?: ProductList;
  error: boolean;
  sort?: string;
  filterByClassify?: string;
}

const initialState: ProductListState = {
  fetching: false,
  listProduct: undefined,
  error: false,
  sort: "",
  filterByClassify: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductListStart(state) {
      state.fetching = true;
    },
    fetchproductListSuccess(state, action: PayloadAction<ProductList>) {
      state.fetching = false;
      state.listProduct = action.payload;
      state.error = false;
    },
    fetchProductListFailed(state) {
      state.error = true;
    },
    getSortByUserGroupStart(state) {
      state.fetching = true;
    },
    getSortByUserGroupSuccess(state, action: any) {
      state.fetching = false;
      state.sort = action.payload;
      state.error = false;
    },
    getSortByUserGroupFailed(state) {
      state.error = true;
    },
    getFilterByClassifyStart(state) {
      state.fetching = true;
    },
    getFilterByClassifySuccess(state, action: any) {
      state.fetching = false;
      state.filterByClassify = action.payload;
      state.error = false;
    },
    getFilterByClassifyFailed(state) {
      state.error = true;
    },
  },
});

// EXPORT ACTIONS
export const {
  fetchProductListStart,
  fetchproductListSuccess,
  fetchProductListFailed,
  getSortByUserGroupSuccess,
  getSortByUserGroupStart,
  getSortByUserGroupFailed,
  getFilterByClassifyStart,
  getFilterByClassifySuccess,
  getFilterByClassifyFailed,
} = productSlice.actions;

//EPXORT REDUCER
const productReducer = productSlice.reducer;
export default productReducer;

// SELECTOR
export const dataProduct = (state: RootState) => state.product.listProduct;
export const fetchingProduct = (state: RootState) => state.product.fetching;
export const getSortByUserGroup = (state: RootState) => state.product.sort;
export const getFilterByClassify = (state: RootState) =>
  state.product.filterByClassify;

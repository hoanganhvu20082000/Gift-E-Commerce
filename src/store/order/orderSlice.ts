import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface OrderState {
  fetching: boolean;
  listOrder?: any;
  listOrderByUser?: any;
  error?: boolean;
}

const initialState: OrderState = {
  fetching: false,
  listOrder: [],
  listOrderByUser: [],
  error: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrdersStart(state) {
      state.fetching = true;
    },
    fetchOrdersSuccess(state, action: PayloadAction<any>) {
      state.fetching = false;
      state.listOrder = action.payload;
      state.error = false;
    },
    fetchOrdersFailed(state) {
      state.error = true;
    },
    fetchOrderByUserStart(state) {
      state.fetching = true;
    },
    fetchOrderByUserSuccess(state, action: PayloadAction<any>) {
      state.fetching = false;
      state.listOrderByUser = action.payload;
      state.error = false;
    },
    fetchOrderByUserFailed(state) {
      state.error = true;
    },
  },
});

// EXPORT ACTIONS
export const {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailed,
  fetchOrderByUserStart,
  fetchOrderByUserSuccess,
  fetchOrderByUserFailed,
} = orderSlice.actions;

//EPXORT REDUCER
const orderReducer = orderSlice.reducer;
export default orderReducer;

// SELECTOR
export const getOrder = (state: RootState) => state.order.listOrder;
export const getUserOrder = (state: RootState) => state.order.listOrderByUser;

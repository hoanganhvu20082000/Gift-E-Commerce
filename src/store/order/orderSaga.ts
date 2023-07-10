import { call, put, takeLatest } from "redux-saga/effects";
import { getAllOrder, getOrderByUser } from "../../api/orderApi";
import {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailed,
  fetchOrderByUserStart,
  fetchOrderByUserSuccess,
  fetchOrderByUserFailed,
} from "./orderSlice";

function* fetchAllOrder() {
  try {
    const { data } = yield call(getAllOrder);
    yield put(fetchOrdersSuccess(data));
  } catch (err) {
    console.log("err", err);
    yield put(fetchOrdersFailed());
    console.log("LẤY TẤT CẢ ĐƠN HÀNG THẤT BẠI");
  }
}

function* fetchOrderByUser({ payload }: any) {
  try {
    const { data } = yield getOrderByUser(payload);
    yield put(fetchOrderByUserSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(fetchOrderByUserFailed());
  }
}

export default function* orderSaga() {
  yield takeLatest(fetchOrdersStart.type, fetchAllOrder);
  yield takeLatest(fetchOrderByUserStart.type, fetchOrderByUser);
}

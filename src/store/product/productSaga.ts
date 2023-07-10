import { call, put, takeLatest } from "redux-saga/effects";
import productApi from "../../api/productApi";
import {
  fetchProductListFailed,
  fetchProductListStart,
  fetchproductListSuccess,
  getSortByUserGroupFailed,
  getSortByUserGroupStart,
  getSortByUserGroupSuccess,
  getFilterByClassifyStart,
  getFilterByClassifySuccess,
  getFilterByClassifyFailed,
} from "./productSlice";

function* fetchProductList() {
  try {
    const { data } = yield call(productApi.getAllProduct);
    yield put(fetchproductListSuccess(data));
  } catch (err) {
    console.log("err", err);
    yield put(fetchProductListFailed());
    console.log("LẤY TẤT CẢ SẢN PHẨM THẤT BẠI");
  }
}

function* triggerSortProducts({ payload }: any) {
  try {
    yield put(getSortByUserGroupSuccess(payload));
  } catch (err) {
    yield put(getSortByUserGroupFailed());
  }
}

function* filterByClassify({ payload }: any) {
  try {
    yield put(getFilterByClassifySuccess(payload));
  } catch (err) {
    yield put(getFilterByClassifyFailed());
  }
}

export default function* productListSaga() {
  yield takeLatest(fetchProductListStart.type, fetchProductList);
  yield takeLatest(getSortByUserGroupStart.type, triggerSortProducts);
  yield takeLatest(getFilterByClassifyStart.type, filterByClassify);
}

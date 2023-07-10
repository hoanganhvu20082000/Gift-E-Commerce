import { put, call, takeLeading, delay } from "redux-saga/effects";
import { LoginForm } from "../../models/user";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  logOutFailed,
  logOutSuccess,
  logOutStart,
  getAllUserSuccess,
  getAllUserFailed,
  getAllUserStart,
} from "./authSlice";
import { push } from "redux-first-history";
import userApi from "../../api/userApi";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

function* handleLogin(user: LoginForm) {
  try {
    const { data } = yield call(userApi.login, user);
    const token = jwt_decode(data);
    yield put(loginSuccess(token));
    yield delay(1000);
    yield put(push("/"));
    toast.success("Đăng nhập thành công!");
  } catch (err: any) {
    console.log("err", err);
    yield put(loginFailed());
    toast("🦄 Sai tên đăng nhập hoặc mật khẩu!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

function* handleLogOut() {
  try {
    localStorage.clear();
    yield delay(1000);
    yield put(logOutSuccess());
    yield put(push("/login"));
    toast("🦄 Đăng xuất thành công!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (err) {
    yield put(logOutFailed());
    toast("🦄 Đăng xuất thất bại! Vui lòng kiểm tra lại kết nối", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

function* getAllUsers(role: any) {
  try {
    const { data } = yield call(userApi.getAllUsers);
    yield put(getAllUserSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(getAllUserFailed());
  }
}

export default function* authSaga() {
  yield takeLeading(loginStart.type, handleLogin);
  yield takeLeading(logOutStart.type, handleLogOut);
  yield takeLeading(getAllUserStart.type, getAllUsers);
}

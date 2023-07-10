import { push } from "redux-first-history";
import { call, put, takeLeading } from "redux-saga/effects";
import userApi from "../../api/userApi";
import { FormRegister } from "../../models/user";
import { registerStart, registerSuccess, registerFailed } from "./registerSlice";
import { toast } from "react-toastify";

function* handleRegister(user: FormRegister) {
  console.log("user", user);
  try {
    yield call(userApi.register, user);
    yield put(registerSuccess());
    yield put(push("/login"));
    toast("🦄 Đăng kí thành công!", {
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
    console.log("err", err);
    yield put(registerFailed());
    toast("🦄 Đăng kí thất bại!", {
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

export default function* registerSaga() {
  yield takeLeading(registerStart.type, handleRegister);
}

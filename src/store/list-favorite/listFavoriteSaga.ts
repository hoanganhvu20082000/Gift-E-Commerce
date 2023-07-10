import { toast } from "react-toastify";
import { put, takeLeading, call } from "redux-saga/effects";
import { listFavoriteActions } from "./listFavoriteSlice";
import wishListApi from "../../api/wishListApi";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* fetchFavoriteList({ payload }: any) {
  try {
    const result: ResponseGenerator = yield call(
      wishListApi.fetchWishList,
      payload
    );
    yield put(listFavoriteActions.fetchFavoriteListSuccess(result));
  } catch (err) {
    yield put(listFavoriteActions.fetchFavoriteListFailed());
  }
}

function* addProductToFavoriteList({ payload }: any) {
  const language = localStorage.getItem("i18nextLng");

  const { userId, id } = payload;
  try {
    yield call(wishListApi.createWishListItem, {
      userId,
      id,
    });
    yield put(listFavoriteActions.addProductToFavoriteListSuccess(payload));
    if (language === "en") {
      toast.success("Added to wish-list ");
    } else if (language === "vi") {
      toast.success("Thêm sản phẩm vào yêu thích thành công");
    }
  } catch (err) {
    yield put(listFavoriteActions.addProductToFavoriteListFailed());
    if (language === "en") {
      toast.error("Add to wish-list failed");
    } else if (language === "vi") {
      toast.error("Thêm sản phẩm vào yêu thích thất bại");
    }
  }
}

function* removeProductFromFavoriteList({ payload }: any) {
  const language = localStorage.getItem("i18nextLng");

  try {
    yield put(
      listFavoriteActions.removeProductFromFavoriteSuccess(+payload.id)
    );
    yield call(wishListApi.deleteWishListItem, payload);
    if (language === "en") {
      toast.warning("Removed product from wish-list ");
    } else if (language === "vi") {
      toast.warning("Đã xóa sản phẩm khỏi danh sách yêu thích");
    }
  } catch (err) {
    yield put(listFavoriteActions.removeProductFromFavoriteFailed());
    if (language === "en") {
      toast.error("Remove product from wish-list failed");
    } else if (language === "vi") {
      toast.error("Xóa sản phẩm khỏi danh sách yêu thích thất bại");
    }
  }
}

export default function* listFavoriteProductSaga() {
  yield takeLeading(
    listFavoriteActions.addProductToFavoriteListStart.type,
    addProductToFavoriteList
  );
  yield takeLeading(
    listFavoriteActions.removeProductFromFavoriteStart.type,
    removeProductFromFavoriteList
  );
  yield takeLeading(
    listFavoriteActions.fetchFavoriteListStart.type,
    fetchFavoriteList
  );
}

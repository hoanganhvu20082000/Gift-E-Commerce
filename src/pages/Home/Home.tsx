import NewProduct from "../../components/ChildrenHome/NewProduct/NewProduct";
import BannerPage from "../../components/ChildrenHome/Swiper/BannerPage";
import LoadingModal from "../../components/Loading/Loading";
import { fetchingProduct } from "../../store/product/productSlice";
import { useAppSelector } from "../../store/hooks/hooks";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useEffect } from "react";
import { token } from "../../store/auth/authSlice";
import { cartActions } from "../../store/cart/cartSlice";

export default function Home() {
  const loading = useAppSelector(fetchingProduct);
  const dispatch = useAppDispatch();
  const dataUser = useAppSelector(token);
  const idUser = dataUser?.id;

  useEffect(() => {
    (async () => {
      idUser && dispatch(cartActions.fetchCartStart(idUser));
      try {
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, idUser]);

  return (
    <>
      {loading && <LoadingModal />}
      <BannerPage />
      <NewProduct />
    </>
  );
}

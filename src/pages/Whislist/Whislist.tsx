import { useNavigate } from "react-router-dom";
import { listFavoriteActions } from "../../store/list-favorite/listFavoriteSlice";
import { useAppSelector } from "../../store/hooks/hooks";
import { useEffect, useState } from "react";
import { uniqBy } from "lodash";
import { useDispatch } from "react-redux";
import { token } from "../../store/auth/authSlice";
import wishList from "../../api/wishListApi";

export default function WishList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listFavorite, setListFavorite] = useState([]);

  const user = useAppSelector(token);

  // const listFavoriteProduct = useAppSelector(listProductFavorite);
  // const listFavorite = uniqBy(listFavoriteProduct, "id");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(listFavoriteActions.fetchFavoriteListStart(user.id));
    (async () => {
      try {
        const res = await wishList.fetchWishList(user.id);
        setListFavorite(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, user.id]);

  return (
    <>
      <div className="container px-[12px] mx-auto">
        {listFavorite.length === 0 ? (
          <div className="mt-[48px] mb-[20px] xl:mb-[143px] lg:mt-[90px] flex justify-center items-center font-size-wish-list pb-[20px]">
            No item in wishlist
          </div>
        ) : (
          <div className="mt-[48px] block md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-4 gap-[18px]">
            {uniqBy(listFavorite, "id")?.map((product: any) => (
              <div
                className="px-[12px] mb-[20px] cursor-pointer relative test-hover-block"
                key={product.id}
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                <img
                  className=""
                  src={product.image_url[0].url}
                  alt="Product1"
                />
                <div className="pt-[20px]">
                  <div className="text-[16px] font-bold mb-[16px]">
                    {product.name}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[20px] font-semibold">
                      {product.price} VNĐ
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

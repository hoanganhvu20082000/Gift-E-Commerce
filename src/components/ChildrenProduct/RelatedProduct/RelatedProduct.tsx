import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import {
  dataProduct,
  fetchProductListStart,
} from "../../../store/product/productSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RelatedProduct(props: any) {
  const { classify } = props;
  SwiperCore.use([Autoplay]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductListStart());
  }, [dispatch]);
  const currentData = useAppSelector(dataProduct);
  const filterProduct = currentData?.filter((product: any) =>
    classify.some((i: any) => product.classify.includes(i))
  );
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  return (
    <>
      <div className="mt-[80px]">
        <div className="text-center text-[30px]">
          {t("common:relatedProduct")}
        </div>
        <Swiper
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {filterProduct?.map((product: any) => (
            <SwiperSlide className="opacity-1" key={product.id}>
              <div
                className="px-[12px] mb-[20px] cursor-pointer relative test-hover-block"
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                <img className="" src={product.image_url[0].url} alt="" />
                <div className="pt-[20px]">
                  <div className="text-[16px] font-bold mb-[16px]">
                    {product.name}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[20px] font-semibold">
                      {product.price} VNĐ
                    </span>
                    {/* <FiberManualRecordIcon className="dot-transition" sx={{ fontSize: "18px" }} /> */}
                  </div>
                </div>
                {/* <div className="style-animation-home-product">
                  <span className="style-feature-home-product box-shadow-home-product">
                    <SearchIcon className="text-black hover:text-[red]" sx={{ fontSize: "22px" }} />
                  </span>
                  <span className="style-feature-home-product box-shadow-home-product">
                    <FavoriteIcon
                      className="text-black hover:text-[red]"
                      sx={{ fontSize: "19px" }}
                    />
                  </span>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

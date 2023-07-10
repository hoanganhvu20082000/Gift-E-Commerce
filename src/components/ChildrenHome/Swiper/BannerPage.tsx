import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import bannerApi from "../../../api/bannerApi";
import { useTranslation } from "react-i18next";

export default function BannerPage() {
  SwiperCore.use([Navigation, Autoplay]);
  const [dataBanner, setDataBanner] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response: any = await bannerApi.getDataBanner();
        setDataBanner(response[0]?.banner || []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const { t } = useTranslation(["common", "header", "product", "order"]);

  return (
    <>
      <div className="">
        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
        >
          {dataBanner?.map((data: any, index: any) => (
            <SwiperSlide className="opacity-1" key={index}>
              <div
                className="h-[300px] lg:h-[800px] relative lg:mt-[40px] select-none bg-no-repeat bg-cover bg-[top_center]"
                style={{
                  backgroundImage: `url(${data.image_url})`,
                }}
              >
                <div className="container mx-auto px-[12px]">
                  <div className="pt-[40px] lg:pt-[220px]">
                    <div className="text-white mb-[48px] font-semibold font-size-banner-flexible leading-[28px]">
                      {data.collection}
                    </div>
                    <div className=""></div>
                    <div className="mb-[16px]">
                      <span className="text-white text-[16px] font-normal	">
                        {data.description}
                      </span>
                    </div>
                    {/* <div className="">
                      <button className="flex justify-between items-center gap-[8px] py-[4px] md:py-[8px] px-[8px] md:px-[24px] bg-black">
                        <span className="text-white text-[16px]">
                          {t("common:buyNow")}
                        </span>
                        <ArrowForwardIcon sx={{ color: "#fff" }} />
                      </button>
                    </div> */}
                    <div className="absolute top-[92%] flex gap-[40px] text-white">
                      <Link to="/">
                        <FacebookIcon sx={{ fontSize: "22px" }} />
                      </Link>
                      <Link to="/">
                        <TwitterIcon sx={{ fontSize: "22px" }} />
                      </Link>
                      <Link to="/">
                        <PinterestIcon sx={{ fontSize: "22px" }} />
                      </Link>
                      <Link to="/">
                        <InstagramIcon sx={{ fontSize: "22px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

import CheckIcon from "@mui/icons-material/Check";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
import productImage01 from "../../assets/images/ProductDetail/productImage01.jpg";
import { useTranslation } from "react-i18next";

export default function OrderDetail() {
  const { t } = useTranslation(["order", "user"]);

  return (
    <>
      <div className="container my-[40px] lg:my-[70px] mx-auto px-[12px]">
        <div className="mb-[48px]">
          <div className="text-[18px] flex flex-wrap">
            <div className="text-[#dc3545] font-semibold">{t("order:order")}:</div>&nbsp;
            <div className="font-semibold">#VxYTazuXZacyguBZ874p</div>
          </div>
          <div className="flex justify-between items-center">
            <span className="uppercase font-semibold">Usps:</span>
            <div className="">
              <button className="bg-[#dc3545] hover:bg-[#bb2d3d] px-[9px] py-[6px] rounded-[6px] flex items-center justify-center">
                <span className="text-white text-[14px] font-medium	">
                  {t("order:cancelOrder")}
                </span>
              </button>
            </div>
          </div>

          <div className="hidden md:flex w-[100%] my-[20px]">
            <div className="relative basis-[33.333333%] flex justify-center">
              <div className="bg-[#dc3545] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center z-[1]">
                <div className="flex justify-center items-center">
                  <CheckIcon sx={{ color: "#fff" }} />
                </div>
              </div>
              <div className="absolute w-full h-[12px] top-[16px] bg-[#edcccc] left-[50%] rounded-bl-[10px] rounded-tl-[10px]"></div>
            </div>
            <div className="relative basis-[33.333333%] flex justify-center">
              <div className="bg-[#edcccc] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center z-[1]">
                <div className="flex justify-center items-center">
                  <PanoramaFishEyeIcon sx={{ color: "#fff" }} />
                </div>
              </div>
              <div className="absolute w-full h-[12px] top-[16px] bg-[#edcccc] left-[50%] rounded-bl-[10px] rounded-tl-[10px]"></div>
            </div>
            <div className="relative basis-[33.333333%] flex justify-center">
              <div className="bg-[#edcccc] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center z-[1]">
                <div className="flex justify-center items-center">
                  <PanoramaFishEyeIcon sx={{ color: "#fff" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-between items-center">
            <div className="basis-[33.33333%] flex flex-col justify-center items-center">
              <span className="">
                <FormatListNumberedIcon sx={{ fontSize: "38px" }} />
              </span>
              <span className="uppercase font-semibold">{t("order:pending")}</span>
            </div>
            <div className="basis-[33.33333%] flex flex-col justify-center items-center">
              <span className="">
                <LocalShippingIcon sx={{ fontSize: "38px" }} />
              </span>
              <span className="uppercase font-semibold">{t("order:shipping")}</span>
            </div>
            <div className="basis-[33.33333%] flex flex-col justify-center items-center">
              <span className="">
                <HomeIcon sx={{ fontSize: "38px" }} />
              </span>
              <span className="uppercase font-semibold">{t("order:delivered")}</span>
            </div>
          </div>
        </div>

        <div className="block lg:flex justify-around items-center mb-[40px]">
          <div className="mb-[30px]">
            <div className="text-[18px] font-bold mb-[8px]">
              {t("order:buyerInfo")}:
            </div>
            <div className="flex mb-[8px]">
              <div className="text-[#212529] font-bold">{t("user:name")}:</div>
              <div className="pl-[4px]">kdsjhfkdsf</div>
            </div>
            <div className="flex mb-[8px]">
              <div className="text-[#212529] font-bold">{t("user:phoneNumber")}:</div>
              <div className="pl-[4px]">01234567789</div>
            </div>
            <div className="flex mb-[8px]">
              <div className="text-[#212529] font-bold">{t("user:address")}:</div>
              <div className="pl-[4px]">Việt Nam</div>
            </div>
          </div>

          <div className="">
            <div className="text-[18px] font-bold mb-[8px]">
              {t("order:shippingInfo")}:
            </div>
            <div className="flex mb-[8px]">
              <div className="text-[#212529] font-bold">{t("user:address")}:</div>
              <div className="pl-[4px]">kdsjhfkdsf</div>
            </div>
            <div className="flex mb-[8px]">
              <div className="text-[#212529] font-bold">{t("order:shippingDate")}:</div>
              <div className="pl-[4px]">01234567789</div>
            </div>
            <div className="flex mb-[8px]">
              <div className="text-[#212529] font-bold">{t("order:receivingDate")}:</div>
              <div className="pl-[4px]">Việt Nam</div>
            </div>
            <div className="flex mb-[8px]">
              <div className="text-[#212529] font-bold">{t("order:note")}:</div>
              <div className="pl-[4px]">Chỉ giao giờ hành chính</div>
            </div>
          </div>
        </div>

        <div className="p-[16px] border-[1px] border-solid border-[#d2d2d2]">
          <div className="block md:flex md:gap-[20px] border-b-[1px] border-solid border-[#545050] mx-auto">
            <div className="hidden md:block md:basis-[20%] w-[120px] max-w-[120px] h-auto">
              <img className="" src={productImage01} alt="" />
            </div>
            <div className="md:basis-[70%] flex flex-col flex-auto py-[16px] pb-[16px]">
              <div className="font-bold text-[#212529] text-[20px] mb-[16px]">
                Candles Outdoor Tshirt
              </div>
              <div>
                <span className="text-[#212529] font-bold">Phân loại: </span>
                <span>Trắng,</span>&nbsp;
                <span>XL</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <span className="text-[#212529] font-bold">
                    Số lượng: &nbsp;
                  </span>
                  <span className="">1</span>
                </div>
                <p>$60</p>
              </div>
            </div>
          </div>

          <div className="block md:flex md:gap-[20px] border-b-[1px] border-solid border-[#545050] mx-auto">
            <div className="hidden md:block md:basis-[20%] w-[120px] max-w-[120px] h-auto">
              <img className="" src={productImage01} alt="" />
            </div>
            <div className="md:basis-[70%] flex flex-col flex-auto py-[16px] pb-[16px]">
              <div className="font-bold text-[#212529] text-[20px] mb-[16px]">
                Candles Outdoor Tshirt
              </div>
              <div>
                <span className="text-[#212529] font-bold">Phân loại: </span>
                <span>Trắng,</span>&nbsp;
                <span>XL</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <span className="text-[#212529] font-bold">
                    Số lượng: &nbsp;
                  </span>
                  <span className="">1</span>
                </div>
                <p>$60</p>
              </div>
            </div>
          </div>

          

          <div className="pt-[16px]">
            <div className="flex justify-between items-center">
              <p className="text-[#212529] font-bold">{t("order:subtotal")}</p>
              <p>$85</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#212529] font-bold">{t("order:shippingCost")}</p>
              <p>$5</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#212529] font-bold">{t("order:total")}</p>
              <p>$90</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

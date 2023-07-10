import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks/hooks";
import { Link } from "react-router-dom";
import { cartActions, dataCart } from "../../store/cart/cartSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import _ from "lodash";
import { Col, Row } from "antd";

import { token } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";

export interface FormCheckout {
  initialValues?: CheckoutForm;
  onSubmit?: (checkoutForm: CheckoutForm) => void;
}

export interface CheckoutForm {
  userName: string;
  phoneNumber: string;
  address: string;
  item?: any;
}

export default function Checkout() {
  const { t } = useTranslation(["common", "user", "order", "product"]);
  const cartItems = useAppSelector(dataCart);
  const [finalCart, setFinalCart] = useState<any>();
  const [cartPrice, setCartPrice] = useState<any>();
  const dispatch = useDispatch();
  const userInfo = useAppSelector(token);

  // NHÓM CÁC SẢN PHẨM CÙNG ID, COLOR, SIZE VÀO CÙNG 1 ARRAY KHI USER THÊM SẢN PHẨM VÀO GIỎ HÀNG
  useEffect(() => {
    const groupProductById = _.groupBy(
      cartItems,
      (i) => `"${i.id}+${i.color}+${i.size}"`
    );
    const arrayProduct = Object.values(groupProductById);
    const newArr = arrayProduct.flat(Infinity);
    setFinalCart(newArr);
  }, [cartItems]);

  // CART PRICE
  useEffect(() => {
    const priceCart = finalCart?.reduce(
      (acc: any, curValue: any) => acc + curValue.quantity * curValue.price,
      0
    );
    setCartPrice(priceCart);
  }, [finalCart]);

  const schema = yup
    .object({
      userName: yup.string().trim().required("Vui lòng nhập tên đăng nhập"),
      phoneNumber: yup
        .number()
        .positive()
        .integer()
        .required("Vui lòng nhập số điện thoại của bạn"),
      address: yup.string().trim().required("Vui lòng nhập địa chỉ của bạn"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CheckoutForm>({ resolver: yupResolver(schema) });

  useEffect(() => {
    setValue("item", finalCart);
  }, [cartPrice, finalCart, setValue]);

  const onSubmit = async (data: any) => {
    dispatch(cartActions.checkoutStart({ ...data, userInfo: userInfo || {} }));
  };

  return (
    <>
      <div className="py-[100px]">
        {finalCart?.length > 0 ? (
          <div className="container mx-auto px-[12px]">
            <div className="block xl:flex gap-[50px]">
              {/* FORM THÔNG TIN VẬN CHUYỂN */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="xl:basis-[50%]">
                  <div className="uppercase pb-[16px] mb-[18px] border-b-[1px] border-b-solid border-b-[#e1e1e1] text-[24px] font-semibold">
                    {t("common:billDetail")}
                  </div>
                  <div className="mb-[20px]">
                    <label className="pb-[12px]">
                      <span>{t("user:userName")}</span>
                      <span className="text-[#e53637]">*</span>
                    </label>
                    <input
                      {...register("userName")}
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      type="text"
                    />
                    {errors.userName ? (
                      <p className="text-[#dc3545]">{`${errors.userName.message}`}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-[20px]">
                    <label className="pb-[12px]">
                      <span>{t("user:phoneNumber")}</span>
                      <span className="text-[#e53637]">*</span>
                    </label>
                    <input
                      {...register("phoneNumber")}
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      type="text"
                    />
                    {errors.phoneNumber ? (
                      <p className="text-[#dc3545]">{`${errors.phoneNumber.message}`}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-[20px]">
                    <label className="pb-[12px]">
                      <span>{t("user:address")}</span>
                      <span className="text-[#e53637]">*</span>
                    </label>
                    <input
                      {...register("address")}
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      type="text"
                    />
                    {errors.address ? (
                      <p className="text-[#dc3545]">{`${errors.address.message}`}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                {/* GÍA SẢN PHẨM */}
                <div className="xl:basis-[50%] pt-[30px] xl:pt-0 px-[12px]">
                  <div className="uppercase pb-[16px] border-b-[1px] border-b-solid border-b-[#d7d7d7] text-[24px] font-semibold mb-[20px]">
                    {t("order:yourOrder")}
                  </div>
                  <div className="flex justify-between items-center mb-[18px] font-bold text-[#212529]">
                    <span>{t("product:product")}</span>
                    <span>{t("order:total")}</span>
                  </div>
                  {/* SẢN PHẨM */}
                  {finalCart.map((data: any, index: any) => {
                    return (
                      <div key={index}>
                        <Row gutter={[4, 4]}>
                          <Col span={8}>
                            <div className="flex flex-wrap">
                              {data.product_name} x {data.quantity}
                            </div>
                          </Col>
                          <Col span={8} offset={8} push={1}>
                            <div>{data.price * data.quantity} VNĐ</div>
                          </Col>
                        </Row>
                        <br />
                      </div>
                    );
                  })}
                  {/* GIÁ */}
                  <div className="pb-[28px] border-b-[1px] border-b-solid border-b-[#d7d7d7] mb-[20px]">
                    <div className="flex justify-between items-center">
                      <div className="text-[#212529] font-bold">
                        {t("order:total")}
                      </div>
                      <div className="text-[#e53637] font-bold">
                        {cartPrice} VNĐ
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button className="py-[12px] bg-black w-[100%]">
                      <span className="text-white font-semibold">
                        {t("order:placeOrder")}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="container px-[12px] mx-auto">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-[30px]">{t("common:cartNoItem")}</div>
              <Link to="/store/sort" className="">
                <button className="px-[35px] py-[14px] border-solid border-[1px] border-[#ccc]">
                  <span className="uppercase">{t("common:buyNow")}</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "../../store/hooks/hooks";
import { useEffect, useState } from "react";
import { dataCart } from "../../store/cart/cartSlice";
import _ from "lodash";
import { useAppDispatch } from "../../store/hooks/hooks";
import { cartActions } from "../../store/cart/cartSlice";
import { Tag } from "antd";
import CircleIcon from "@mui/icons-material/Circle";

export default function ShoppingCart() {
  const { t } = useTranslation(["order", "common"]);
  const cartItems = useAppSelector(dataCart);
  let [finalCart, setFinalCart] = useState<any>();
  const dispatch = useAppDispatch();

  // NHÓM CÁC SẢN PHẨM CÙNG ID, COLOR, SIZE VÀO CÙNG 1 ARRAY KHI USER THÊM SẢN PHẨM VÀO GIỎ HÀNG
  useEffect(() => {
    const groupProductById = _.groupBy(
      cartItems,
      (i) => `"${i.id}+${i.color}"`
    );
    const arrayProduct = Object.values(groupProductById);
    const newArr = arrayProduct.flat(Infinity);
    setFinalCart(newArr);
  }, [cartItems]);

  const removeProduct = (index: number) => {
    finalCart.splice(index, 1);
    dispatch(cartActions.removeProductStart(finalCart));
  };

  const addProduct = (product: any) => {
    const newProductQuantity = { ...product, quantity: product.quantity + 1 };
    dispatch(cartActions.updateProductStart(newProductQuantity));
  };
  const minusProduct = (product: any) => {
    if (product.quantity === 0) return;
    const newProductQuantity = { ...product, quantity: product.quantity - 1 };
    dispatch(cartActions.updateProductStart(newProductQuantity));
  };

  return (
    <>
      {finalCart?.length > 0 ? (
        <div className="py-[100px] container px-[12px] mx-auto select-none">
          <div className="container px-[12px] mx-auto overflow-x-auto w-full mb-[50px]">
            <table className="min-w-[850px] table w-full">
              <thead className="border-b-[1px] border-b-[#ccc] border-solid table-header-group">
                <tr className="table-row outline-0 align-middle">
                  <th className="table-cell py-[30px] text-left uppercase">
                    {t("order:product")}
                  </th>
                  <th className="table-cell py-[30px] text-left	uppercase">
                    {t("order:quantity")}
                  </th>
                  <th className="table-cell py-[30px] text-right uppercase">
                    {t("order:total")}
                  </th>
                  <th className="table-cell py-[30px] text-right uppercase"></th>
                </tr>
              </thead>
              <tbody className="table-row-group	border-b-[1px] border-b-[#ccc] border-solid">
                {finalCart.map((data: any, index: any) => {
                  return (
                    <tr
                      className="table-row outline-0 align-middle"
                      key={index}
                    >
                      <td className="table-cell py-[30px] text-left">
                        <div className="flex gap-[10px]">
                          <div className="flex w-[100px] h-[100px] min-w-[100px] min-h-[100px] max-h-[100px] items-center justify-center ">
                            <img src={data.image_url} alt="" />
                          </div>
                          <div className="">
                            <p className="text-[15px] font-semibold pb-[10px]">
                              {data.product_name}
                            </p>
                            <p className="text-[16px] pb-[16px]">
                              <CircleIcon
                                className={"circle-style"}
                                sx={{
                                  color: `${data.color}`,
                                  fontSize: "26px",
                                }}
                              />
                            </p>
                            <p className="text-[18px] font-semibold">
                              {data.price} VNĐ
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell py-[30px] text-right">
                        <div className="w-[80px] flex items-center">
                          <span
                            className="cursor-pointer text-[20px]"
                            onClick={() => minusProduct(data)}
                          >
                            <NavigateBeforeIcon sx={{ fontSize: "30px" }} />
                          </span>
                          <div className="flex items-center justify-center w-[50px] border-0 text-center text-[16px] pt-[2px]">
                            {data.quantity}
                          </div>
                          <span className="cursor-pointer text-[20px]">
                            <NavigateNextIcon
                              sx={{ fontSize: "30px" }}
                              onClick={() => addProduct(data)}
                            />
                          </span>
                        </div>
                      </td>
                      <td className="table-cell py-[30px] text-right font-semibold text-[18px] w-[140px]">
                        {data.quantity * data.price} VNĐ
                      </td>
                      <td className="w-[170px] table-cell py-[30px] text-right">
                        <div className="flex justify-center items-center text-center">
                          <CloseIcon
                            onClick={() => removeProduct(index)}
                            className="cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[10px]">
            <Link
              to="/store/sort"
              className="flex justify-center items-center text-center max-w-[250px] px-[35px] py-[14px] text-[14px] uppercase border-[1px] border-solid border-[#ccc] font-bold tracking-[2px]"
            >
              {t("order:continueShoping")}
            </Link>
            <Link
              to="/checkout"
              className="flex justify-center items-center text-center max-w-[200px] px-[35px] py-[14px] text-[14px] uppercase border-[1px] border-solid border-[#ccc] font-bold tracking-[2px]"
            >
              {t("order:checkout")}
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-[100px] container px-[12px] mx-auto">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-[30px] mb-[48px]">
              {t("common:noItemCart")}
            </div>
            <div className="">
              <Link
                to="/store/sort"
                className="border-[1px] border-solid border-[#ccc] px-[35px] py-[14px]"
              >
                <span className="font-semibold uppercase">
                  {t("common:shopNow")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

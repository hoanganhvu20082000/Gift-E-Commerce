import React, { useCallback, useEffect, useState } from "react";
import logoHeader from "../../../assets/images/logoHeader.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { Link } from "react-router-dom";
import { token, logOutStart } from "../../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import i18n from "../../../i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import SearchComponent from "../../SearchComponent/SearchComponent";
import { dataCart } from "../../../store/cart/cartSlice";
import { Dropdown } from "antd";
import {
  getFilterByClassifyStart,
  getSortByUserGroupStart,
} from "../../../store/product/productSlice";

import {
  FILTER_USER_GROUP_DATA,
  FILTER_CLASSIFY_DATA,
} from "./common.constant";

export default function Header() {
  const userInfo = useAppSelector(token);
  const dataCartUser = useAppSelector(dataCart);
  const dispatch = useAppDispatch();
  const [quantityItem, setQuantityItem] = useState<number>();
  const handleLogout = () => {
    dispatch(logOutStart());
  };
  const { t } = useTranslation(["common", "header", "product", "order"]);

  // CHANGE LANGUAGE
  const handleLanguageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(e.target.value);
    },
    []
  );

  const setSortByUserGroup = (val: any) => {
    dispatch(getSortByUserGroupStart(val.value));
  };
  const setFilterByClassify = (val: any) => {
    dispatch(getFilterByClassifyStart(val.value));
  };

  // GET VALUE LANGUAGE
  useEffect(() => {
    const language: any = localStorage.getItem("i18nextLng");
    const persist: any = JSON.parse(
      localStorage.getItem("persist:auth") || "{}"
    );
    const { token } = persist;
    if (!!token) {
      JSON.parse(token)?.exp < Date.now() / 1000 && handleLogout();
    }
    if (language?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  // COUNT QUATITY ITEMS
  useEffect(() => {
    if (dataCartUser?.length > 0) {
      const quantity = dataCartUser.reduce(
        (acc: any, curValue: any) => acc + curValue.quantity,
        0
      );
      setQuantityItem(quantity);
    }
  }, [dataCartUser]);

  const renderItem = (arrayItem: any[], type: string) => {
    return arrayItem.map((item, index) => ({
      key: index,
      label: (
        <Link
          to="/store/sort"
          className="style-hover-menu"
          onClick={
            type === "userGroup"
              ? () => setSortByUserGroup(item)
              : () => setFilterByClassify(item)
          }
        >
          {item.label || item}
        </Link>
      ),
    }));
  };

  return (
    <>
      <div className="fixed top-0 z-[10] w-full">
        <div className="w-full bg-white shadow-[0_1px_6px_0_rgba(32,33,36,0.28)] transition-header">
          {/* Header >768px */}
          <div className="h-[40px] lg:flex bg-black w-full">
            <div className="container mx-auto flex gap-[14px] py-2 px-[12px] xl:px-0 justify-end items-center">
              <select
                className="bg-black outline-0 border-0 text-white cursor-pointer"
                onChange={handleLanguageChange}
                value={localStorage.getItem("i18nextLng") || "vi" || "en"}
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>

              {/* User */}
              {userInfo ? (
                <div className="relative header-menu cursor-pointer">
                  <span className="text-white ">{userInfo?.user_name},</span>
                  <div className="absolute right-0 top-[18px] bg-[transparent] w-[70px] h-[20px]"></div>
                  <ul className="header-menu-appear z-[99] absolute top-[28px] py-[8px] px-[16px] right-0 w-[240px] bg-white border-[1px] border-[rgba(0,0,0,0.176)] rounded-[6px]">
                    <li className="p-[8px] justify-between pb-[12px] items-center">
                      <Link className="flex style-hover-menu" to="/profile">
                        <PersonIcon />
                        <p className="pl-[12px]">{t("common:profile")}</p>
                      </Link>
                    </li>
                    <li className="px-[8px] justify-between pb-[12px] items-center">
                      <Link className="flex style-hover-menu" to="/order">
                        <ShoppingCartIcon sx={{ fontSize: "22px" }} />
                        <p className="pl-[12px]">{t("order:order")}</p>
                      </Link>
                    </li>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={handleLogout}
                        className="style-button-logout px-[12px] py-[6px] rounded-[6px]"
                      >
                        <span className="text-white font-medium">
                          {t("common:logout")}
                        </span>
                      </button>
                    </div>
                  </ul>
                </div>
              ) : (
                <Link to="/login" className="text-white">
                  {t("common:login")}
                </Link>
              )}
            </div>
          </div>
          {/* Menu */}
          <div className="container px-[12px] mx-auto">
            <div className="flex justify-between items-center	h-[74px] ">
              <Link to="/">
                <img
                  className=""
                  src={logoHeader}
                  alt=""
                  style={{ width: "150px" }}
                />
              </Link>
              <div className="lg:flex gap-[26px] text-header">
                <Link to="/" className="style-hover-menu">
                  {t("common:home")}
                </Link>
                <Dropdown
                  menu={{
                    items: renderItem(FILTER_USER_GROUP_DATA, "userGroup"),
                  }}
                >
                  <Link to="/store/sort" className="style-hover-menu">
                    Bạn tặng ai?
                  </Link>
                </Dropdown>
                <Dropdown
                  menu={{ items: renderItem(FILTER_CLASSIFY_DATA, "classify") }}
                >
                  <Link to="/store/sort" className="style-hover-menu">
                    Nhân ngày gì?
                  </Link>
                </Dropdown>
                <Link to="/about" className="style-hover-menu">
                  {t("header:about")}
                </Link>
                {userInfo?.admin ? (
                  <Link to="/admin" className="style-hover-menu">
                    Admin Page
                  </Link>
                ) : null}
              </div>
              <div className="relative lg:flex gap-[18px]">
                <div>
                  <SearchComponent />
                </div>
                <Link to="/wish-list">
                  <FavoriteIcon
                    className="style-hover-menu"
                    sx={{ fontSize: "30px" }}
                  />
                </Link>
                <Link to="/shopping-cart">
                  <ShoppingCartIcon
                    className="style-hover-menu"
                    sx={{ fontSize: "30px" }}
                  />
                  {dataCartUser?.length > 0 ? (
                    <div className="quantity-product right-[-12px] top-[-12px]">
                      {quantityItem}
                    </div>
                  ) : (
                    <div className="quantity-product right-[-12px] top-[-12px]">
                      0
                    </div>
                  )}
                </Link>
              </div>
              {/* Navbar Mobile */}
              <div className="block lg:hidden">
                <NavbarMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

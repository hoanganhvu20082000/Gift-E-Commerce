import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  dataProduct,
  fetchProductListStart,
  getFilterByClassify,
  getSortByUserGroup,
} from "../../store/product/productSlice";
// import SearchIcon from "@mui/icons-material/Search";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import SortIcon from "@mui/icons-material/Sort";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchingProduct } from "../../store/product/productSlice";
import Loading from "../../components/Loading/Loading";
import { Pagination, Watermark } from "antd";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import { isEmpty, some } from "lodash";

import { FILTER_CLASSIFY, FILTER_USER_GROUP } from "./common";

export default function SortPage() {
  const loading = useAppSelector(fetchingProduct);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation(["product"]);
  const [sortValue, setSortValue] = useState<string>("none");
  const allProduct: any = useAppSelector(dataProduct);
  const [newProduct, setNewProduct] = useState<any>([]);
  const [defaultData, setDefaultData] = useState<any>();
  const [paginateNumber, setPagiNateNumber] = useState<number>(1);
  const [pagiSize, setPageSize] = useState<string>("10");

  useEffect(() => {
    dispatch(fetchProductListStart());
  }, [dispatch]);

  useEffect(() => {
    setNewProduct(allProduct);
    setDefaultData(allProduct);
  }, [allProduct]);

  const sortData = useAppSelector(getSortByUserGroup);
  const filterClassify = useAppSelector(getFilterByClassify);

  const sortValues = FILTER_USER_GROUP.filter(
    (item: any) => item.name === sortData
  );
  const filterByClassify = FILTER_CLASSIFY.filter(
    (item: any) => item.name === filterClassify
  );

  // SHORT PRODUCT
  const sortProduct = (e: any) => {
    console.log(e.target.value);
    setSortValue(e.target.value);
    switch (e.target.value) {
      case "none":
        setNewProduct(defaultData);
        break;
      case "name":
        const arrName = [...newProduct];
        arrName?.sort((a, b) => a.name.localeCompare(b.name));
        setNewProduct(arrName);
        break;
      case "price":
        const arrPrice = [...newProduct];
        arrPrice.sort((a: any, b: any) => a.price - b.price);
        setNewProduct(arrPrice);
        break;
      default:
        break;
    }
  };

  const paginationProduct = (e: any) => {
    setPageSize(e.target.value);
    setPagiNateNumber(1);
  };

  const paginateData = useCallback(
    (data: any) => {
      return (
        data &&
        data.slice((paginateNumber - 1) * +pagiSize, paginateNumber * +pagiSize)
      );
    },
    [pagiSize, paginateNumber]
  );
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pagiSize, paginateNumber]);

  const sortedProduct = useMemo(() => {
    return newProduct?.filter((item: any) => {
      const filterUserGroup = some(
        item.user_group.map((v: any) =>
          !isEmpty(sortValues) ? sortValues[0]?.value.includes(v) : true
        )
      );
      const filterClassify = some(
        item.classify.map((v: any) => {
          return !isEmpty(filterByClassify)
            ? filterByClassify[0]?.value.includes(v)
            : true;
        })
      );

      return filterUserGroup && filterClassify && item && item.active;
    });
  }, [filterByClassify, newProduct, sortValues]);

  const renderImage = (product: any) => (
    <img className="" src={product.image_url[0].url} alt="" />
  );

  return (
    <>
      {loading && <Loading />}
      <div className="block lg:flex justity-start gap-[40px] pb-[24px]">
        <div className="pb-[16px]">
          <div>
            <label htmlFor="text">{t("common:itemsPerPage")}</label>
          </div>
          <div>
            <select
              className="bg-[#fff] w-[100%] outline-0 border-[1px] py-[6px] pl-[12px] pr-[36px] border-[#ced4da] rounded-[5px appearance-none cursor-pointer form-select-arrow-down"
              onChange={paginationProduct}
              value={pagiSize}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div className="">
          <div>
            <label htmlFor="text">{t("common:sortBy")}</label>
          </div>
          <div className="flex justify-between">
            <select
              value={sortValue}
              onChange={sortProduct}
              className="bg-[#fff] w-[100%] outline-0 border-[1px] py-[6px] pl-[12px] pr-[36px] border-[#ced4da] rounded-[5px appearance-none cursor-pointer form-select-arrow-down"
            >
              <option value="none">None</option>
              <option value="name">{t("product:name")}</option>
              <option value="price">{t("product:price")}</option>
            </select>
          </div>
        </div>
      </div>
      <div className="block md:grid md:grid-rows-auto md:grid-cols-2 xl:grid-rows-auto xl:grid-cols-3 gap-[18px]">
        {paginateData(sortedProduct)?.map((product: any) => (
          <div
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
            className="mb-[20px] cursor-pointer relative test-hover-block"
            key={product.id}
          >
            {product.quantity === 0 ? (
              <Watermark
                content={["Out of stock"]}
                font={{ fontSize: 32 }}
                gap={[40, 40]}
              >
                {renderImage(product)}
              </Watermark>
            ) : (
              renderImage(product)
            )}
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
                <FavoriteIcon className="text-black hover:text-[red]" sx={{ fontSize: "19px" }} />
              </span>
            </div> */}
          </div>
        ))}
      </div>
      <div className="xl:basis-[75%] px-[12px]">
        <Outlet />
        <div className="flex justify-center items-center pb-[30px]">
          <Stack spacing={2}>
            <Pagination
              current={paginateNumber}
              total={sortedProduct?.length || []}
              pageSize={+pagiSize}
              onChange={(pageNumber) => {
                setPagiNateNumber(pageNumber);
              }}
              hideOnSinglePage
            />
          </Stack>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { dataProduct, fetchProductListStart } from "../../store/product/productSlice";
import { useNavigate } from "react-router-dom";
import { fetchingProduct } from "../../store/product/productSlice";
import Loading from "../../components/Loading/Loading";
import SortIcon from "@mui/icons-material/Sort";
import { useTranslation } from "react-i18next";

export default function Shirt() {
  const loading = useAppSelector(fetchingProduct);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation(["product"]);
  const [sortValue, setSortValue] = useState<string>("none");
  const allProduct: any = useAppSelector(dataProduct);
  const [newProduct, setNewProduct] = useState<any>();
  const [defaultData, setDefaultData] = useState<any>();

  useEffect(() => {
    dispatch(fetchProductListStart());
  }, [dispatch]);

  useEffect(() => {
    const filterProduct = allProduct?.filter((product: any) => product.category === "pants");
    setNewProduct(filterProduct);
    setDefaultData(filterProduct);
  }, [allProduct]);

  // SHORT PRODUCT
  const sortProduct = (e: any) => {
    setSortValue(e.target.value);
    switch (e.target.value) {
      case "none":
        setNewProduct(defaultData);
        break;
      case "name":
        newProduct?.sort((b: any, a: any) => b.createdAt - a.createdAt);
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="block lg:flex justity-start gap-[40px] pb-[24px]">
        <div className="pb-[16px]">
          <div>
            <label htmlFor="text">{t("common:itemsPerPage")}</label>
          </div>
          <div>
            <select className="bg-[#fff] w-[100%] outline-0 border-[1px] py-[6px] pl-[12px] pr-[36px] border-[#ced4da] rounded-[5px appearance-none cursor-pointer form-select-arrow-down">
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
              {/* <option value="name">{t("product:name")}</option> */}
              <option value="price">{t("product:price")}</option>
            </select>
            <button className="flex justify-center items-center w-[42px] h-[38px] px-[12px] py-[6px] border-[1px] border-[#6c757d] rounded-[3px]">
              <SortIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="block md:grid md:grid-rows-auto md:grid-cols-2 xl:grid-rows-auto xl:grid-cols-3 gap-[18px]">
        {newProduct?.map((product: any) => (
          <div
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
            className="mb-[20px] cursor-pointer relative test-hover-block"
            key={product.id}
          >
            <img className="" src={product.image_url.image_url_01} alt="" />
            <div className="pt-[20px]">
              <div className="text-[16px] font-bold mb-[16px]">{product.product_name}</div>
              <div className="flex justify-between items-center">
                <span className="text-[20px] font-semibold">${product.price}</span>
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
    </>
  );
}

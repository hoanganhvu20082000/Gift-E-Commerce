import SortIcon from "@mui/icons-material/Sort";
import { useTranslation } from "react-i18next";

export default function FilterFeature() {
  const { t } = useTranslation(["product", "common"]);

  return (
    <>
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
            <select className="bg-[#fff] w-[100%] outline-0 border-[1px] py-[6px] pl-[12px] pr-[36px] border-[#ced4da] rounded-[5px appearance-none cursor-pointer form-select-arrow-down">
              <option value="none">{t("common:none")}</option>
              <option value="name">{t("product:name")}</option>
              <option value="price">{t("product:price")}</option>
            </select>
            <button className="flex justify-center items-center w-[42px] h-[38px] px-[12px] py-[6px] border-[1px] border-[#6c757d] rounded-[3px]">
              <SortIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

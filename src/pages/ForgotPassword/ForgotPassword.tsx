import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <div className="background-form py-[40px] flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-[500px]">
          <div className="px-[12px] w-[100%]">
            <div className="w-[100%] h-fit p-[48px] bg-white rounded-[6px]">
              <form noValidate>
                <div className="flex justify-center items-center text-[30px] pb-[20px] font-normal">
                  {t("common:forgotPassword")}
                </div>
                <div className="flex flex-col pb-[42px]">
                  <label className="pb-[8px]">Email</label>
                  <input className="form-style" type="text" />
                  <p className="text-[#dc3545]"></p>
                </div>
                <div className="flex items-center justify-center pb-[18px]">
                  <button className="button-register">
                    <span className="text-white text-[18px] font-medium">{t("common:resetPassword")}</span>
                  </button>
                </div>
                <Link className="flex justify-center text-[#dc3545] font-semibold" to="/">{t("common:home")}</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

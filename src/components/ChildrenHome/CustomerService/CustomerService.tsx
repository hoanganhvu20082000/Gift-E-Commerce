import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useTranslation } from "react-i18next";

export default function CustomerService() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <div className="my-[48px]">
        <div className="container px-[12px] mx-auto">
          <div className="block md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1	lg:gap-[18px]">
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <LocalShippingIcon className="font-size-flexible-icon" />
              </div>
              <div className="style-text-service-above">{t("common:fastDelivery")}</div>
              <div className="style-text-service-under">{t("common:shippingQuote")}</div>
            </div>
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <AdminPanelSettingsIcon  className="font-size-flexible-icon"/>
              </div>
              <div className="style-text-service-above">{t("common:secureInfomation")}</div>
              <div className="style-text-service-under">{t("common:secureInfoQuote")}</div>
            </div>
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <CreditScoreIcon  className="font-size-flexible-icon"/>
              </div>
              <div className="style-text-service-above">{t("common:easyPayment")}</div>
              <div className="style-text-service-under">
                {t("common:easyPaymentQuote")}
              </div>
            </div>
            <div className="px-[8px] py-[16px]">
              <div className="mb-[16px]">
                <SupportAgentIcon  className="font-size-flexible-icon"/>
              </div>
              <div className="style-text-service-above">{t("common:customerService")}</div>
              <div className="style-text-service-under">
                {t("common:customerServiceQuote")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

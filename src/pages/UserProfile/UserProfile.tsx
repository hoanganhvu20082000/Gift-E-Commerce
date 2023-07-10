import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UploadIcon from "@mui/icons-material/Upload";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useAppSelector } from "../../store/hooks/hooks";
import { token } from "../../store/auth/authSlice";
import { useTranslation } from "react-i18next";

export default function UserProfile() {
  const userInfo = useAppSelector(token);
  const { t } = useTranslation(["user"]);

  // THUẬT TOÁN TÍNH PHẨN TRĂM SỐ DƯƠNG, ÂM, SỐ 0 TRONG 1 MẢNG
  // const arr1 = [-1, 1, 0, 1, 0];

  // function plusMinus(arr: any) {
  //   let positive = 0;
  //   let negative = 0;
  //   let zero = 0;

  //   // VONG LAP CHECK DIEU KIEN
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       positive++;
  //     } else if (arr[i] < 0) {
  //       negative++;
  //     } else {
  //       zero++;
  //     }
  //   }

  //   positive = positive / arr.length;
  //   negative = negative / arr.length;
  //   zero = zero / arr.length;

  //   positive.toFixed(6);
  //   negative.toFixed(6);
  //   zero.toFixed(6);

  //   console.log("positive: ", positive);
  //   console.log("negative: ", negative);
  //   console.log("zero: ", zero);
  // }

  return (
    <>
      <div className="lg:pt-[40px] pb-[30px]">
        <div className="px-[20px]">
          <div>
            <div className="">
              <AccountCircleIcon sx={{ color: "#ccc", fontSize: "160px" }} />
            </div>
            <div className="flex justify-center items-center w-[160px] gap-[10px]">
              <div className="flex justify-center w-[40px] h-[40px] items-center rounded-[9999px]">
                <label className="inline-block">
                  <UploadIcon sx={{ color: "#dc4146", fontSize: "30px" }} />
                </label>
                <input className="upload-file-style hidden" type="file" />
              </div>
              <div>
                <BorderColorIcon sx={{ color: "#dc4146" }} />
              </div>
            </div>
          </div>
          {/* Email and Password */}
          <div className="mt-[18px]">
            <div className="flex">
              <div className="flex-[0_0_auto] w-[50%] px-[10px]">
                <div>Email:</div>
                <input
                  className="form-style-user-profile bg-[#e9ecef]"
                  type="email"
                  disabled
                  value={userInfo.email}
                />
              </div>
              <div className="flex-[0_0_auto] w-[50%] px-[10px]">
                <div>{t("user:password")}:</div>
                <input
                  className="form-style-user-profile"
                  type="password"
                  value={userInfo.password}
                />
              </div>
            </div>
          </div>
          {/* Name and FirstName */}
          <div className="mt-[18px]">
            <div className="flex">
              <div className="flex-[0_0_auto] w-[50%] px-[10px]">
                <div>{t("user:firstName")}:</div>
                <input className="form-style-user-profile" type="text" />
              </div>
              <div className="flex-[0_0_auto] w-[50%] px-[10px]">
                <div>{t("user:lastName")}:</div>
                <input className="form-style-user-profile" type="text" />
              </div>
            </div>
          </div>
          {/* PhoneNumber and Address */}
          <div className="mt-[18px]">
            <div className="flex">
              <div className="flex-[0_0_auto] w-[50%] px-[10px]">
                <div>{t("user:phoneNumber")}:</div>
                <input className="form-style-user-profile" type="text" />
              </div>
              <div className="flex-[0_0_auto] w-[50%] px-[10px]">
                <div>{t("user:address")}:</div>
                <input className="form-style-user-profile" type="text" />
              </div>
            </div>
          </div>
          {/* Role */}
          <div className="mt-[18px]">
            <div className="flex">
              <div className="flex-[0_0_auto] w-[50%] px-[10px]">
                <div>{t("user:role")}:</div>
                <input
                  className="form-style-user-profile bg-[#e9ecef]"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

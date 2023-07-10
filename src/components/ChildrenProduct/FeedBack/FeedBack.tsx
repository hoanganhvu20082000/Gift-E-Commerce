import StarBorderIcon from "@mui/icons-material/StarBorder";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useTranslation } from "react-i18next";

export default function FeedBack(productDetail: any) {
  const [value, setValue] = useState<number | null>(0);
  const handleClick = (e: any) => {
    e.preventDefault();
  };
  const { t } = useTranslation(["common"]);

  const data: any = Object.values(productDetail);
  const comment: any = data[0]?.comment;

  // Avarage rating
  const num0 = comment[0]?.fiveStar;
  const num1 = comment[1]?.fourStar;
  const num2 = comment[2]?.threeStar;
  const num3 = comment[3]?.twoStar;
  const num4 = comment[4]?.oneStar;
  const rating =
    (num0 * 5 + num1 * 4 + num2 * 3 + num3 * 2 + num4 * 1) / (num0 + num1 + num2 + num3 + num4);

  const dataFiveStar = comment[0]?.commentFiveStar;
  const dataFourStar = comment[1]?.commentFourStar;
  const dataThreeStar = comment[2]?.commentThreeStar;
  const dataTwoStar = comment[3]?.commentTwoStar;
  const dataOneStar = comment[4]?.commentOneStar;

  return (
    <>
      <div className="my-[30px]">
        <div className="text-[24px] mb-[32px]">{t("common:rating")}</div>
        <div className="flex gap-[12px]">
          <div className="flex flex-col justify-center">
            {rating ? (
              <p className="font-semibold font-size-icon-service-flexible">{rating}</p>
            ) : (
              <p className="font-semibold font-size-icon-service-flexible">0</p>
            )}
            <p className="">{t("common:outOf5")}</p>
          </div>
          <ul className="ml-[18px]">
            <div className="flex items-center text-center">
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">
                {comment[0]?.fiveStar}
              </div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">
                {comment[1]?.fourStar}
              </div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">
                {comment[2]?.threeStar}
              </div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">{comment[3]?.twoStar}</div>
            </div>
            <div className="flex">
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarBorderIcon />
              </span>
              <span>
                <StarIcon sx={{ color: "#faaf00" }} />
              </span>
              <div className="ml-[4px] text-[16px] font-bold text-[red]">{comment[4]?.oneStar}</div>
            </div>
          </ul>
        </div>
        <div className="mt-[50px]">
          <form className="">
            <div className="font-size-comment pb-[16px]">{t("common:comment")}</div>
            <input
              className="w-[100%] height-input-flexible px-[12px] py-[6px] text-[16px] text-[#212529] bg-[#fff] border-[1px] border-solid border-[#ced4da] rounded-[6px] form-style"
              type="text"
            />
            <div className="mt-[16px]">
              <Rating
                sx={{ fontSize: "34px" }}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="mt-[16px]">
              <button
                onClick={handleClick}
                className="px-[12px] py-[6px] bg-[#116dfa] hover:bg-[#0b5ed7] rounded-[6px] transition-button leading-[1.5]"
              >
                <span className="text-[white]">{t("common:comment")}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Comment */}
        {/* Five star */}
        {dataFiveStar &&
          dataFiveStar.map((data: any, index: any) => (
            <div className="mt-[48px]" key={index}>
              <div className="flex gap-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <PersonIcon sx={{ fontSize: "100px" }} />
                  </div>
                  <div>{data.userComment}</div>
                  <div>{data.timeComment}</div>
                </div>
                <div className="flex flex-col justify-center ">
                  <div className="flex justify-start">
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                  </div>
                  <div className="">{data.contentComment}</div>
                </div>
              </div>
              <Divider sx={{ marginTop: "16px" }} variant="middle" />
            </div>
          ))}

        {/* Four star */}
        {dataFourStar &&
          dataFourStar.map((data: any, index: any) => (
            <div className="mt-[48px]" key={index}>
              <div className="flex gap-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <PersonIcon sx={{ fontSize: "100px" }} />
                  </div>
                  <div>{data.userComment}</div>
                  <div>{data.timeComment}</div>
                </div>
                <div className="flex flex-col justify-center ">
                  <div className="flex justify-start">
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                  </div>
                  <div className="">{data.contentComment}</div>
                </div>
              </div>
              <Divider sx={{ marginTop: "16px" }} variant="middle" />
            </div>
          ))}

        {/* Three star */}
        {dataThreeStar &&
          dataThreeStar.map((data: any, index: any) => (
            <div className="mt-[20px]" key={index}>
              <div className="flex gap-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <PersonIcon sx={{ fontSize: "100px" }} />
                  </div>
                  <div>{data.userComment}</div>
                  <div>{data.timeComment}</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div>{data.contentComment}</div>
                  <div>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                  </div>
                </div>
              </div>
              <Divider sx={{ marginTop: "16px" }} variant="middle" />
            </div>
          ))}

        {/* Two star */}
        {dataTwoStar &&
          dataTwoStar.map((data: any, index: any) => (
            <div className="mt-[20px]" key={index}>
              <div className="flex gap-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <PersonIcon sx={{ fontSize: "100px" }} />
                  </div>
                  <div>{data.userComment}</div>
                  <div>{data.timeComment}</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div>{data.contentComment}</div>
                  <div>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                  </div>
                </div>
              </div>
              <Divider sx={{ marginTop: "16px" }} variant="middle" />
            </div>
          ))}

        {/* One star */}
        {dataOneStar &&
          dataOneStar.map((data:any, index:any) => (
            <div className="mt-[20px]" key={index}>
              <div className="flex gap-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <PersonIcon sx={{ fontSize: "100px" }} />
                  </div>
                  <div>{data.userComment}</div>
                  <div>{data.timeComment}</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div>{data.contentComment}</div>
                  <div>
                    <span>
                      <StarIcon sx={{ color: "#faaf00" }} />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                  </div>
                </div>
              </div>
              <Divider sx={{ marginTop: "16px" }} variant="middle" />
            </div>
          ))}

        {/* <div className="mt-[20px] mb-[30px] text-center text-[#386dfa] underline text-[20px] cursor-pointer">
          {t("common:loadMore")}
        </div> */}
      </div>
    </>
  );
}

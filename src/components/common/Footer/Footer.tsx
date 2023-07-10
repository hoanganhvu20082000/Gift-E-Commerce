import logoFooter from "../../../assets/images/logoHeader.png";
import payment from "../../../assets/images/payment.png";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="">
        <div className="bg-black pt-[70px] pb-[25px]">
          <div className="container mx-auto block md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-1">
            <div className="px-[12px] mb-[30px]">
              <Link to="/">
                <img
                  src={logoFooter}
                  alt=""
                  style={{
                    height: "100px",
                  }}
                />
              </Link>
              <div className="mt-[30px] style-text-footer">
                Hoàn thiện trên từng bước tiến - Mang đến sự hài lòng cho tất cả khách hàng.
              </div>
              <div className="mt-[30px]">
                <img src={payment} alt="" />
              </div>
            </div>
            <div className="px-[12px]  margin-left-flexible-footer">
              <div className="title-footer">MUA SẮM</div>
              <div className="flex gap-[10px] flex-col style-text-footer">
                <span className="cursor-pointer">Chi Nhánh Cửa Hàng</span>
                <span className="cursor-pointer">Sản Phẩm Mới</span>
                <span className="cursor-pointer">Hàng Bán Chạy</span>
                <span className="cursor-pointer">Đang Giảm Giá</span>
              </div>
            </div>
            <div className="px-[12px] ">
              <div className="title-footer">KHÁC</div>
              <div className="flex gap-[10px] flex-col style-text-footer">
                <span className="cursor-pointer">Liên Hệ</span>
                <span className="cursor-pointer">Phương Thức Thanh Toán</span>
                <span className="cursor-pointer">Dịch Vụ Vận Chuyển</span>
                <span className="cursor-pointer">Chính Sách Đổi Trả</span>
              </div>
            </div>
            <div className="px-[12px] pb-[30px]">
              <div className="title-footer">Có Gì Mới</div>
              <div className="style-text-footer">
                Trở thành những người đầu tiên biết về sản phẩm mới và ưu đãi hấp dẫn!
              </div>
              <div className="mt-[20px] xl:mt-0 relative">
                <input
                  className="w-full outline-0 py-[15px] bg-black border-b-[2px] border-b-solid border-b-[#e4e6eb] text-[15px] text-[#3d3d3d] placeholder:text-[#333b3c] placeholder:font-[Open_Sans]"
                  type="text"
                  placeholder="Email của bạn"
                />
                <button className="absolute top-0 right-[5px] h-full border-0">
                  <MailIcon sx={{ fontSize: "20px", color: "#b7b7b7" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

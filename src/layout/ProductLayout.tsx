import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import NavbarProduct from "../components/LayoutProduct/NavbarProduct/NavbarProduct";
import BreadCrumbs from "../components/LayoutProduct/BreadCrumbs/BreadCrumbs";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="container mx-auto pt-[74px] lg:pt-[114px]">
        <BreadCrumbs />
        <div className="block xl:flex gap-[40px]">
          <div className="xl:basis-[25%] px-[12px] pt-[20px] pb-[20px]">
            <NavbarProduct />
          </div>
          <div className="xl:basis-[75%] px-[12px]">
            <Outlet />
          </div>
        </div>
        {/* <Outlet context={user} /> */}
      </div>
      <Footer />
    </>
  );
}

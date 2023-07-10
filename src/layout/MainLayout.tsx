import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

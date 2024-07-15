import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Offer from "./Offer/Offer";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  AOS.init();
  return (
    <div className="">
      <div className="max-w-[1400px]  mx-auto px-5 ">
        <Offer />
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <div className=" px-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

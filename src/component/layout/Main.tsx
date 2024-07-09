import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MainLayout = () => {
  const [isHidden, setIsHidden] = useState("block");

  return (
    <div className="">
      <div className="max-w-[1400px]  mx-auto px-5 ">
        <div className={`${isHidden} relative bg-green-400`}>
          <Marquee>
            <h2>Offer Offer Offer Offer</h2>
          </Marquee>
          <div
            onClick={() => setIsHidden("hidden")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-red-500 text-xl z-20 cursor-pointer"
          >
            <AiOutlineClose />
          </div>
        </div>

        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <div className="bg-green-300 px-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

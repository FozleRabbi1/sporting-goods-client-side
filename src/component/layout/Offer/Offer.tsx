import Marquee from "react-fast-marquee";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Offer = () => {
  const [isHidden, setIsHidden] = useState("block");
  return (
    <div className={`${isHidden} relative bg-black text-[#00FFFF] p-1`}>
      <Marquee>
        <h2>
          Enjoy 15% Off Your Next Purchase! As a token of our appreciation,
          Don't miss out on this limited-time offer! Use Code: SAVE15 at
          checkout.
        </h2>
      </Marquee>
      <div
        onClick={() => setIsHidden("hidden")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-red-500 text-xl z-20 cursor-pointer bg-[#7bd8d8] rounded-full p-0.5 mr-1 hover:text-2xl duration-300"
      >
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Offer;

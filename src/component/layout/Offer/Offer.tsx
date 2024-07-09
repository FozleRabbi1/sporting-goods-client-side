import Marquee from "react-fast-marquee";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Offer = () => {
  const [isHidden, setIsHidden] = useState("block");
  return (
    <div className={`${isHidden} relative bg-green-100`}>
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
  );
};

export default Offer;

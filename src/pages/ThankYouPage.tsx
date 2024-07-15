import React from "react";
import { NavLink } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center flex-col">
      <h2 className="text-3xl text-green-400 italic font-semibold">
        {" "}
        Your Order Placed Successfully{" "}
      </h2>
      <NavLink
        to="/"
        className="border py-1 px-5 rounded-xl font-semibold mt-2"
      >
        Go To Home Page
      </NavLink>
    </div>
  );
};

export default ThankYouPage;

import React from "react";
import { NavLink } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div>
      <h2> Your Order Placed Successfully </h2>
      <NavLink to="/">Go To Home Page</NavLink>
    </div>
  );
};

export default ThankYouPage;

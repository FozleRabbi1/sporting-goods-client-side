import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <NavLink className="ml-3" to="/">
        Back To Home
      </NavLink>
    </div>
  );
};

export default NotFound;

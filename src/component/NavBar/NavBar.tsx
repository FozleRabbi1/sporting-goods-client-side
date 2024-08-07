import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import TextTransition, { presets } from "react-text-transition";
import TextTransition from "react-text-transition";
import "./NavBar.css";
import { FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { MdManageHistory, MdOutlineRoundaboutRight } from "react-icons/md";

const TEXTS = ["Sports Store.", "Sports Store..", "Sports Store..."];

const NavBar = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <div className="navbar bg-base-100 px-0 py-3">
        <div className="navbar-start w-full md:w-[40%]">
          <div className="dropdown z-30">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="all-products">All-Products</NavLink>
              </li>
              <li>
                <NavLink to="manage-product">Manage-product</NavLink>
              </li>
              <li>
                <NavLink to="about-us">About-Us</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="flex items-center ">
            {" "}
            <img
              className="size-14 border rounded-full shadow-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWnoyJnn5aANyBkN0d7ErHjkBwBGSv6MbZA&s"
              alt=""
            />{" "}
            <TextTransition
              className="text-2xl font-bold ml-4  "
              springConfig={{ tension: 160, friction: 30 }}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </NavLink>
        </div>

        <div className="navbar-end hidden  lg:flex w-full">
          <NavLink
            className="ml-10 nav-button px-3 py-1 font-semibold text-lg  flex items-center justify-around"
            to="/"
          >
            <FaHome className="mr-1" /> Home
          </NavLink>
          <NavLink
            className="ml-10 nav-button px-3 py-1 font-semibold text-lg flex items-center justify-around"
            to="all-products"
          >
            <FaWallet className="mr-1" /> All-Products
          </NavLink>

          <NavLink
            className="ml-10 nav-button px-3 py-1 font-semibold text-lg flex items-center justify-around"
            to="cart"
          >
            <FaShoppingCart className="mr-1" /> Cart
          </NavLink>
          <NavLink
            className="ml-10 nav-button px-3 py-1 font-semibold text-lg flex items-center justify-around "
            to="manage-product"
          >
            <MdManageHistory className="mr-1" /> Manage-product
          </NavLink>
          <NavLink
            className="ml-10 nav-button px-3 py-1 font-semibold text-lg flex items-center justify-around"
            to="about-us"
          >
            <MdOutlineRoundaboutRight className="mr-1" /> About-Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

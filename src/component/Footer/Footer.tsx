import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-base-content py-10 max-w-[1400px] mx-auto ">
        <aside>
          <img
            className="size-20 border rounded-full"
            src="https://thumbs.dreamstime.com/b/vector-illustration-cricket-sport-logo-typography-sign-ball-wings-crown-isolated-white-background-115269521.jpg"
            alt=""
          />
          <p>ACME Industries Ltd.</p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav className="">
          <h6 className="footer-title">Company</h6>
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
        </nav>

        <nav className="w-full">
          <h6 className="footer-title">Legal</h6>
          <div className="flex w-[50%] justify-between">
            <a className="link link-hover">
              <FaFacebookSquare className="text-2xl text-blue-600" />
            </a>
            <a className="link link-hover">
              <CiInstagram className="text-2xl text-orange-600" />
            </a>
            <a className="link link-hover">
              <FaWhatsappSquare className="text-2xl text-green-600" />
            </a>

            <a className="link link-hover">
              <FaTelegram className="text-2xl text-green-600" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { getAddToCartProduct } from "../../redux/fetures/Cart/getCartProduct";
import { NavLink, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navlink = useNavigate();
  const { data, isLoading, refetch } =
    getAddToCartProduct.useGetAddToCartProductQuery([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navlink("/thankYou");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg  text-white">
        <h2 className="text-2xl mb-6 text-center">
          {" "}
          Confurm Your Order & Enter Your Valid Information
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded bg-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded bg-gray-700"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded bg-gray-700"
            required
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded bg-gray-700"
            required
          ></textarea>

          <button
            className="bg-sky-600 hover:bg-sky-700 block text-center duration-300 w-full py-2 rounded text-white"
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

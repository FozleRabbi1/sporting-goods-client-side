/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
const RatingComponent: React.ComponentType<any> = Rating as any;

const Cart: React.FC<{ item: any }> = ({ item }) => {
  const {
    _id,
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = item;

  return (
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <div className=" border  group" key={_id}>
        <div className="h-[300px] w-[100%] overflow-hidden">
          <img
            className="h-[100%] w-[100%] mx-auto  transform transition-transform duration-500 group-hover:scale-110"
            src={image}
            alt=""
          />
        </div>
        <div className="card-content p-2">
          <h2 className="card-title">{name}</h2>
          <p className="card-description text-[14px] opacity-90">
            {description.slice(0, 45)} ...
          </p>
          <RatingComponent
            readonly
            placeholderRating={rating}
            emptySymbol={<CiStar />}
            placeholderSymbol={<FaStar className="text-yellow-500" />}
            fullSymbol={<FaStar />}
          ></RatingComponent>
          <div className="flex justify-between">
            <span>
              <p className="text-[12px]">brand : {brand}</p>
              <h2 className="text-[12px]">category : {category}</h2>
            </span>
            <span>
              <p className="text-[12px]">stock: {stockQuantity}</p>
              <h2 className="text-[14px] font-semibold text-red-500">
                price : {price}$
              </h2>
            </span>
          </div>
        </div>

        <div className="bg-slate-400 ">
          {stockQuantity <= 0 ? (
            <button className="w-full block text-center text-xl font-semibold bg-red-300  cursor-not-allowed py-1 ">
              {" "}
              Stock Out{" "}
            </button>
          ) : (
            <NavLink
              to={`/single-product/${_id}`}
              className="w-full block text-center text-xl font-semibold  py-1"
            >
              View Details
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

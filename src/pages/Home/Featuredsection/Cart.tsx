/* eslint-disable @typescript-eslint/no-explicit-any */
import Rating from "react-rating";
import "./Card.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Cart = (data: any) => {
  const {
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = data.item;
  return (
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <div className="card border overflow-hidden group" key={data._id}>
        <div className="h-[300px] w-[100%] overflow-hidden">
          <img
            className="h-[100%] w-[100%] mx-auto rounded-t-md transform transition-transform duration-500 group-hover:scale-110"
            src={image}
            alt=""
          />
        </div>
        <div className="card-content p-2">
          <h2 className="card-title">{name}</h2>
          <p className="card-description text-[14px] opacity-90">
            {description}
          </p>
          <Rating
            placeholderRating={rating}
            emptySymbol={<CiStar />}
            placeholderSymbol={<FaStar className="text-yellow-500" />}
            fullSymbol={<FaStar />}
          />
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
        <div className="bg-slate-400 py-1 ">
          <button className="w-full text-center text-xl font-semibold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../redux/fetures/getSingleProducts";
import { addToCart } from "../../redux/fetures/Cart/addToCard";
import { toast } from "sonner";
const RatingComponent: React.ComponentType<any> = Rating as any;

const SingleProductPage = () => {
  const { id } = useParams();
  const [addToCard, { data: addToCardData, isLoading: addToCardIsLoading }] =
    addToCart.useAddToCartMutation();
  const { data, isLoading } = getSingleProduct.useGetSintleProductQuery(id);

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  const {
    name,
    category,
    brand,
    rating,
    description,
    price,
    image,
    stockQuantity,
  } = data?.data;

  const stock = addToCardData?.data?.stockQuantity;

  const handleAddtoCart = (data: any) => {
    const { _id, ...rest } = data;
    const newData = {
      mainId: _id,
      ...rest,
    };
    addToCard(newData);
  };

  if (addToCardData?.success) {
    toast.success("Your Product Added successfully", {
      duration: 3000,
      style: {
        background: "green",
        color: "white",
      },
    });
  }

  return (
    <div className="md:px-20 pb-10">
      <div className="grid md:grid-cols-2">
        <img
          className="h-[60vh] w-[100%] mx-auto rounded-md transform transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt=""
        />

        <div className=" flex flex-col justify-center pl-10 ">
          <h2 className="card-title">{name}</h2>
          <p className="card-description text-[14px] opacity-90">
            {description}
          </p>
          <RatingComponent
            readonly
            placeholderRating={rating}
            emptySymbol={<CiStar />}
            placeholderSymbol={<FaStar className="text-yellow-500" />}
            fullSymbol={<FaStar />}
          />
          <span>
            <p className="text-[14px]">brand : {brand}</p>
            <h2 className="text-[14px]">category : {category}</h2>
          </span>
          <span>
            <p className="text-[14px] flex items-center">
              stock:{" "}
              {addToCardIsLoading ? (
                <span className="loading loading-ring loading-xs"></span>
              ) : stock ? (
                stock
              ) : (
                stockQuantity
              )}
            </p>
            <h2 className="text-[16px] font-semibold text-red-500">
              price : {price}$ /=
            </h2>
          </span>

          <p className="text-red-500 text-sm">
            {" "}
            {stock === 0 && "This Product Is Stock Out At This Moment"}{" "}
          </p>
          <button
            onClick={() => {
              handleAddtoCart(data?.data);
            }}
            className={`${
              (stock === 0 || stock === stockQuantity) &&
              "text-red-500 bg-red-300"
            } inline-block w-1/3 border-b-2 rounded-full shadow-md py-2 font-semibold italic `}
            disabled={(stock === 0 || stock === 0) && true}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

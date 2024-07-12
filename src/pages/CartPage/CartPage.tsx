import { getAddToCartProduct } from "../../redux/fetures/Cart/getCartProduct";

const CartPage = () => {
  const { data } = getAddToCartProduct.useGetAddToCartProductQuery();
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
  return (
    <div className="py-10">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-4 ">
          {data?.data.map((item) => (
            <div className="flex items-center justify-between gap-5 mb-5 px-2 py-1 border rounded relative ">
              <div className="flex items-center gap-4 w-[50%]">
                <img
                  className="size-20 border rounded-full shadow-md"
                  src={item.image}
                  alt=""
                />
                <span>
                  <h2 className="font-semibold"> {item.name}</h2>
                  <h2>Brand : {item.brand}</h2>
                </span>

                <span>
                  <h2 className="font-semibold text-red-500">
                    {item.price} $/=
                  </h2>
                  <h2>persist : {item.addedProduct}</h2>
                </span>

                <span className="flex flex-col ml-auto">
                  <button className="font-bold bg-gray-100 size-8 text-2xl rounded-lg flex items-start justify-center hover:text-green-500 hover:bg-green-100 duration-300 mb-2">
                    +
                  </button>
                  <button className="font-bold bg-gray-100 size-8 text-2xl rounded-lg flex items-start justify-center hover:text-green-500 hover:bg-green-100 duration-300 ">
                    -
                  </button>
                </span>
              </div>

              <div className=" w-[50%] flex justify-end">
                <span className=" flex items-center">
                  <h2 className="font-bold">Total : </h2>{" "}
                  <h2 className="font-semibold text-red-500 ml-1">
                    {item.price * item.addedProduct} $
                  </h2>
                </span>
              </div>
              <button className="absolute -right-2 -top-3 bg-slate-600 size-6 rounded-full text-white text-lg flex justify-center items-center hover:text-red-500 hover:bg-red-100 duration-300">
                X
              </button>
            </div>
          ))}
        </div>
        <div className="calculation">
          <h2>calculation</h2>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

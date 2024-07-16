/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { getAddToCartProduct } from "../../redux/fetures/Cart/getCartProduct";
import { toast } from "sonner";
import { deleteCartFun } from "../../redux/fetures/Cart/deleteCard";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  // const [isTrue, setIsTrue] = useState(false);
  const [incrementDecrement, setIncrementDecrement] = useState<
    [string, string]
  >(["", ""]);
  const { data, isLoading, refetch } =
    getAddToCartProduct.useGetAddToCartProductQuery(incrementDecrement);
  const [deleteCart] = deleteCartFun.useDeleteCartMutation();

  const counterData = data?.data.map((item: any) => {
    const count = item.price * item.addedProduct;
    return count;
  });
  const totalAmount = counterData?.reduce(
    (acc: any, curr: any) => acc + curr,
    0
  );
  const discountPercentage = 15;
  const discountAmount = (totalAmount * discountPercentage) / 100;
  const finalAmount = totalAmount - discountAmount;
  const productCounder = data?.data.map(
    (item: { addedProduct: any }) => item.addedProduct
  );
  const totalProduct = productCounder?.reduce(
    (acc: any, curr: any) => acc + curr,
    0
  );
  const isProductZero = data?.data.map(
    (item: { addedProduct: number }) => item.addedProduct <= 0
  );
  const isTrue = isProductZero?.includes(true);

  const increment = (id: string) => {
    setIncrementDecrement([id, "increment"]);
    refetch();
  };

  const decrement = (id: string) => {
    setIncrementDecrement([id, "decrement"]);
    refetch();
  };

  const handleDelete = (id: string) => {
    try {
      toast("Are you sure you want to delete?", {
        action: {
          label: "Delete",
          onClick: async () => {
            await deleteCart(id).unwrap();
            setIncrementDecrement(["", ""]);
            refetch();
          },
        },
      });
    } catch (error) {
      console.error("Failed to delete the item:", error);
    }
  };

  return (
    <div className="py-10">
      {isLoading ? (
        <div className="w-full h-[50vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-6 lg:col-span-4 ">
            {data?.data.length === 0 ? (
              <div className="w-full h-[50vh] flex justify-center items-center">
                <h2 className="text-4xl text-red-500 italic">No Data Found</h2>
              </div>
            ) : (
              data?.data.map((item: any) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row items-center justify-between sm:gap-5 mb-5 px-2 py-1 border rounded relative "
                >
                  <div className="flex items-center gap-4  lg:w-[50%]">
                    <img
                      className="size-16 sm:size-20 border rounded-full shadow-md"
                      src={item.image}
                      alt=""
                    />

                    <span>
                      <h2 className="text-[12px] sm:text-[16px] font-semibold">
                        {" "}
                        {item.name}
                      </h2>
                      <h2 className="text-[12px] sm:text-[16px]">
                        Brand : {item.brand}
                      </h2>
                    </span>

                    <span>
                      <h2 className="text-[12px] sm:text-[16px] font-semibold text-red-500">
                        {item.price} $/=
                      </h2>
                      <h2 className="text-[12px] sm:text-[16px]">
                        Order :{" "}
                        {isLoading ? (
                          <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                          item.addedProduct
                        )}
                      </h2>
                    </span>

                    <span className="flex flex-col ml-auto">
                      <button
                        onClick={() => {
                          increment(item._id);
                        }}
                        className="font-bold bg-gray-100 size-8 text-2xl rounded-lg flex items-start justify-center hover:text-green-500 hover:bg-green-100 duration-300 mb-2"
                      >
                        +
                      </button>

                      <button
                        onClick={() => {
                          decrement(item._id);
                        }}
                        className={`font-bold bg-gray-100 size-8 text-2xl rounded-lg flex items-start justify-center hover:text-green-500 hover:bg-green-100 duration-300 ${
                          item.addedProduct <= 1 &&
                          "bg-red-300 hover:bg-red-300"
                        } `}
                      >
                        -
                      </button>
                    </span>
                  </div>

                  <div className=" lg:w-[50%] flex justify-end">
                    <span className=" flex items-center">
                      <h2 className="font-bold">Total : </h2>{" "}
                      <h2 className="text-[14px] sm:text-[16px] font-semibold text-red-500 ml-1">
                        {parseFloat(
                          (item.price * item.addedProduct).toString()
                        ).toFixed(2)}
                        $
                      </h2>
                    </span>
                  </div>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="absolute -right-2 -top-3 bg-slate-600 size-6 rounded-full text-white text-lg flex justify-center items-center hover:text-red-500 hover:bg-red-100 duration-300"
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="calculation col-span-6  lg:col-span-2 border px-10 h-[300px] flex flex-col">
            <h2 className="text-center my-4 text-2xl font-bold">
              Order summary
            </h2>
            <div className="flex flex-col flex-grow">
              <span className="flex justify-between mb-2 border-b">
                <p>Total Product</p>{" "}
                <p>
                  {" "}
                  {isLoading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    totalProduct
                  )}{" "}
                </p>
              </span>
              <span className="flex justify-between mb-2 border-b">
                <p>Amount</p>{" "}
                <p>
                  {" "}
                  {isLoading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    parseFloat(totalAmount).toFixed(2)
                  )}{" "}
                </p>
              </span>
              <span className="flex justify-between mb-2 border-b">
                <p>Discount</p> <p> 15% </p>
              </span>
              <span className="flex justify-between mb-2 border-b mt-auto">
                <p>Total Amount</p>{" "}
                <p>
                  {" "}
                  {isLoading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    parseFloat(finalAmount.toString()).toFixed(2)
                  )}
                </p>
              </span>
            </div>
            {data?.data.length === 0 || isTrue ? (
              <button className="border block text-center bg-red-500 p-1 my-1 rounded font-semibold text-white text-xl">
                Proceed to checkout
              </button>
            ) : (
              <NavLink
                to="/checkout-page"
                className={`border block text-center bg-green-400 p-1 my-1 rounded font-semibold text-white text-xl duration-300 `}
              >
                Proceed to checkout
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

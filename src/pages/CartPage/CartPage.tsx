/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getAddToCartProduct } from "../../redux/fetures/Cart/getCartProduct";
import { toast } from "sonner";
import { deleteCartFun } from "../../redux/fetures/Cart/deleteCard";

const CartPage = () => {
  const [incrementDecrement, setIncrementDecrement] = useState({});

  const { data, isLoading, refetch } =
    getAddToCartProduct.useGetAddToCartProductQuery(incrementDecrement);
  const [deleteCart] = deleteCartFun.useDeleteCartMutation();

  useEffect(() => {
    if (incrementDecrement.id) {
      refetch();
    }
  }, [incrementDecrement, refetch]);

  const counterData = data?.data.map((item) => {
    const count = item.price * item.addedProduct;
    return count;
  });
  const totalAmount = counterData?.reduce((acc, curr) => acc + curr, 0);
  const discountPercentage = 15;
  const discountAmount = (totalAmount * discountPercentage) / 100;
  const finalAmount = totalAmount - discountAmount;
  const productCounder = data?.data.map((item) => item.addedProduct);
  const totalProduct = productCounder?.reduce((acc, curr) => acc + curr, 0);

  const increment = (id) => {
    setIncrementDecrement({ id, increment: "increment" });
  };
  const decrement = (id) => {
    setIncrementDecrement({ id, decrement: "decrement" });
  };

  const handleDelete = (id) => {
    toast("If you want to delete? click the button", {
      action: {
        label: "Delete",
        onClick: () => deleteCart(id),
      },
    });
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-4 ">
          {data?.data.map((item: any) => (
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
                  <h2>
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
                      item.addedProduct === 1 &&
                      "bg-red-200 hover:bg-red-200 hover:text-red-500"
                    } `}
                    disabled={item.addedProduct === 1 && true}
                  >
                    -
                  </button>
                </span>
              </div>

              <div className=" w-[50%] flex justify-end">
                <span className=" flex items-center">
                  <h2 className="font-bold">Total : </h2>{" "}
                  <h2 className="font-semibold text-red-500 ml-1">
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
          ))}
        </div>

        <div className="calculation col-span-2 border px-10 h-[350px] flex flex-col">
          <h2 className="text-center my-4 text-2xl font-bold">Order summary</h2>
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
        </div>
      </div>
    </div>
  );
};

export default CartPage;

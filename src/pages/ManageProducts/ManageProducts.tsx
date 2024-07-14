import React from "react";
import { allProducts } from "../../redux/fetures/getAllProducts";
import ManageSIngleCart from "./ManageSIngleCart";

const ManageProducts = () => {
  const { data, isLoading, refetch } =
    allProducts.useGetAllProductsQuery(undefined);

  const getData = data?.data;

  return (
    <div className="lg:w-[70%] mx-auto pb-10">
      <h2 className="md:text-4xl font-bold text-center md:mt-10 md:my-10">
        Manage ALl Products
      </h2>
      <div className="flex justify-end">
        {" "}
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="border w-[100px] md:w-[150px] md:py-2 mb-2 rounded-lg font-semibold"
        >
          Add
        </button>{" "}
      </div>
      {isLoading ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        getData?.map((item) => (
          <ManageSIngleCart data={item} key={item._id}></ManageSIngleCart>
        ))
      )}

      {/* ==========  dialog ============ */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h2 className="text-center font-semibold">Added Your Product</h2>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <span className="flex gap-2 mt-5">
              <input
                placeholder="name"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
              />
              <input
                placeholder="category"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
              />
            </span>

            <span className="flex gap-2">
              <input
                placeholder="stock"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
              />
              <input
                placeholder="brand"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
              />
            </span>

            <span className="flex gap-2">
              <input
                placeholder="rating"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
              />

              <input
                placeholder="price"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
              />
            </span>

            <input
              placeholder="image Url"
              className="border p-1 w-full my-2 rounded px-2"
              type="text"
            />
            <textarea
              placeholder="description"
              className="border p-1 w-full my-2 rounded px-2"
              name=""
              id=""
            ></textarea>

            <button className="border rounded-full w-[200px] py-2 mx-auto block">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageProducts;

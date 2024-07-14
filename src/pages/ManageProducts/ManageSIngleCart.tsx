import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ManageSIngleCart = ({ data }) => {
  return (
    <div className="bg-green-100 mb-4  rounded px-2 py-1">
      <div className="flex items-center justify-around gap-4 ">
        <div className="avatar">
          <div className="mask mask-hexagon size-20 ">
            <img src={data.image} />
          </div>
        </div>

        <span className="flex-1">
          <h2 className="text-[12px] sm:text-[16px] font-semibold">
            {" "}
            {data.name}
          </h2>
          <h2 className="text-[12px] sm:text-[16px]">Brand : {data.brand}</h2>
        </span>

        <span className="flex-1">
          <h2 className="text-[12px] sm:text-[16px] font-semibold">
            {" "}
            {data.category}
          </h2>
          <h2 className="text-[12px] sm:text-[16px]">Price : {data.price}</h2>
        </span>

        <span className="flex-1">
          <h2 className="text-[12px] sm:text-[16px] font-semibold">
            {" "}
            Stock : {data.stockQuantity}
          </h2>
          <h2 className="text-[12px] sm:text-[16px]">Rating : {data.rating}</h2>
        </span>

        <span className="flex flex-col md:flex-row items-center justify-center">
          <FaRegEdit
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="cursor-pointer text-green-500 text-[8px] border size-7 md:size-8 rounded-lg hover:text-green-700 duration-500 sm:text-[26px] font-semibold p-0.5 "
          />
          <MdDeleteForever className="cursor-pointer text-red-500 text-[8px] border size-7 md:size-8 rounded-lg hover:text-red-700 duration-500 sm:text-[26px] font-semibold p-0.5 md:ml-4" />
        </span>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h2 className="text-center font-semibold">Update Your Product</h2>
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

export default ManageSIngleCart;

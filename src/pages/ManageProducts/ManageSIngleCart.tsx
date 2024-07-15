import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { deleteProductApi } from "../../redux/fetures/deleteProduct";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { updateProductApi } from "../../redux/fetures/updateProduct";

const ManageSIngleCart = ({ data }) => {
  const [deleteProduct] = deleteProductApi.useDeleteProductMutation();
  const [getId, setGetId] = useState("");
  const [updateProduct] = updateProductApi.useUpdateProductMutation();

  const handleDelete = async (id) => {
    toast("Are you sure you want to delete?", {
      action: {
        label: "Delete",
        onClick: async () => {
          await deleteProduct(id);
          window.location.reload();
        },
      },
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    brand: "",
    rating: "",
    price: "",
    image: "",
    description: "",
  });

  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { price, rating, stock, ...spred } = formData;
    const updateNewData = {
      id: getId,
      price: parseInt(price),
      rating: parseInt(rating),
      stockQuantity: parseInt(stock),
      ...spred,
    };
    const filterData = (updateNewData) => {
      return Object.fromEntries(
        Object.entries(updateNewData).filter(
          ([key, value]) => value !== "" && !Number.isNaN(value)
        )
      );
    };
    const filteredData = filterData(updateNewData);
    updateProduct(filteredData);
    setFormData({
      name: "",
      category: "",
      stock: "",
      brand: "",
      rating: "",
      price: "",
      image: "",
      description: "",
    });
    window.location.reload();
    modalRef.current.close();
  };

  const handleOpenModal = (id) => {
    setGetId(id);
    modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current.close();
  };

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
            onClick={() => handleOpenModal(data._id)}
            className="cursor-pointer text-green-500 text-[8px] border size-7 md:size-8 rounded-lg hover:text-green-700 duration-500 sm:text-[26px] font-semibold p-0.5 "
          />
          <MdDeleteForever
            onClick={() => handleDelete(data._id)}
            className="cursor-pointer text-red-500 text-[8px] border size-7 md:size-8 rounded-lg hover:text-red-700 duration-500 sm:text-[26px] font-semibold p-0.5 md:ml-4"
          />
        </span>
      </div>

      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <h2 className="text-center font-semibold">Add Your Product</h2>
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              onClick={handleCloseModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <span className="flex gap-2 mt-5">
              <input
                placeholder="name"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                placeholder="category"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
                id="category"
                value={formData.category}
                onChange={handleChange}
              />
            </span>

            <span className="flex gap-2">
              <input
                placeholder="stock"
                className="border p-1 w-full my-2 rounded px-2"
                type="number"
                id="stock"
                value={formData.stock}
                onChange={handleChange}
              />
              <input
                placeholder="brand"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
                id="brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </span>

            <span className="flex gap-2">
              <input
                placeholder="rating"
                className="border p-1 w-full my-2 rounded px-2"
                type="number"
                id="rating"
                value={formData.rating}
                onChange={handleChange}
              />
              <input
                placeholder="price"
                className="border p-1 w-full my-2 rounded px-2"
                type="number"
                id="price"
                value={formData.price}
                onChange={handleChange}
              />
            </span>

            <input
              placeholder="image Url"
              className="border p-1 w-full my-2 rounded px-2"
              type="text"
              id="image"
              value={formData.image}
              onChange={handleChange}
            />
            <textarea
              placeholder="description"
              className="border p-1 w-full my-2 rounded px-2"
              id="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="border rounded-full w-[200px] py-2 mx-auto block"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageSIngleCart;

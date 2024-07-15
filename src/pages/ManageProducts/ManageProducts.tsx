// import React from "react";
// import { allProducts } from "../../redux/fetures/getAllProducts";
// import ManageSIngleCart from "./ManageSIngleCart";
// import { useForm } from "react-hook-form";
// import { createProductApi } from "../../redux/fetures/createProduct";

// const ManageProducts = () => {
//   const { data, isLoading, refetch } =
//     allProducts.useGetAllProductsQuery(undefined);
//   const { handleSubmit, register, reset } = useForm();
//   const [createProduct] = createProductApi.useCreateProductMutation();
//   const [modalVisible, setModalVisible] = useState(true);

//   const getData = data?.data;

//   const onSubmit = (data) => {
//     const { price, rating, stock, ...spred } = data;
//     const newData = {
//       price: parseInt(price),
//       rating: parseInt(rating),
//       stockQuantity: parseInt(stock),
//       ...spred,
//     };
//     console.log(newData);
//     // createProduct(newData);
//     // refetch();
//     setModalVisible(false);
//   };

//   return (
//     <div className="lg:w-[70%] mx-auto pb-10">
//       <h2 className="md:text-4xl font-bold text-center md:mt-10 md:my-10">
//         Manage ALl Products
//       </h2>
//       <div className="flex justify-end">
//         {" "}
//         <button
//           onClick={() => document.getElementById("my_modal_3").showModal()}
//           className="border w-[100px] md:w-[150px] md:py-2 mb-2 rounded-lg font-semibold"
//         >
//           Add
//         </button>{" "}
//       </div>
//       {isLoading ? (
//         <div className="w-full h-[70vh] flex justify-center items-center">
//           <span className="loading loading-spinner loading-lg"></span>
//         </div>
//       ) : (
//         getData?.map((item) => (
//           <ManageSIngleCart data={item} key={item._id}></ManageSIngleCart>
//         ))
//       )}

//       {/* ==========  dialog ============ */}
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <h2 className="text-center font-semibold">Added Your Product</h2>
//           <form
//             method="dialog"
//             onSubmit={(event) => {
//               event.preventDefault();
//               handleSubmit(onSubmit)(event);
//             }}
//           >
//             <button
//             onClick={() => setModalVisible(false)}
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>

//             <span className="flex gap-2 mt-5">
//               <input
//                 placeholder="name"
//                 className="border p-1 w-full my-2 rounded px-2"
//                 type="text"
//                 id="name"
//                 {...register("name")}
//               />
//               <input
//                 placeholder="category"
//                 className="border p-1 w-full my-2 rounded px-2"
//                 type="text"
//                 id="category"
//                 {...register("category")}
//               />
//             </span>

//             <span className="flex gap-2">
//               <input
//                 placeholder="stock"
//                 className="border p-1 w-full my-2 rounded px-2"
//                 type="number"
//                 id="stock"
//                 {...register("stock")}
//               />
//               <input
//                 placeholder="brand"
//                 className="border p-1 w-full my-2 rounded px-2"
//                 type="text"
//                 id="brand"
//                 {...register("brand")}
//               />
//             </span>

//             <span className="flex gap-2">
//               <input
//                 placeholder="rating"
//                 className="border p-1 w-full my-2 rounded px-2"
//                 type="number"
//                 id="rating"
//                 {...register("rating")}
//               />

//               <input
//                 placeholder="price"
//                 className="border p-1 w-full my-2 rounded px-2"
//                 type="number"
//                 id="price"
//                 {...register("price")}
//               />
//             </span>

//             <input
//               placeholder="image Url"
//               className="border p-1 w-full my-2 rounded px-2"
//               type="text"
//               id="image"
//               {...register("image")}
//             />
//             <textarea
//               placeholder="description"
//               className="border p-1 w-full my-2 rounded px-2"
//               id="description"
//               {...register("description")}
//             ></textarea>

//             <button className="border rounded-full w-[200px] py-2 mx-auto block">
//               Submit
//             </button>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default ManageProducts;

import { allProducts } from "../../redux/fetures/getAllProducts";
import ManageSIngleCart from "./ManageSIngleCart";
import { createProductApi } from "../../redux/fetures/createProduct";
import { useState, useRef } from "react";

const ManageProducts = () => {
  const { data, isLoading, refetch } =
    allProducts.useGetAllProductsQuery(undefined);
  const [createProduct] = createProductApi.useCreateProductMutation();
  const getData = data?.data;

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
    const newData = {
      price: parseInt(price),
      rating: parseInt(rating),
      stockQuantity: parseInt(stock),
      ...spred,
    };
    await createProduct(newData);
    refetch();
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
    modalRef.current.close();
  };

  const handleOpenModal = () => {
    modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current.close();
  };

  return (
    <div className="lg:w-[70%] mx-auto pb-10">
      <h2 className="md:text-4xl font-bold text-center md:mt-10 md:my-10">
        Manage All Products
      </h2>
      <div className="flex justify-end">
        <button
          onClick={handleOpenModal}
          className="border w-[100px] md:w-[150px] md:py-2 mb-2 rounded-lg font-semibold"
        >
          Add
        </button>
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
                required
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
                required
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
                required
              />
              <input
                placeholder="brand"
                className="border p-1 w-full my-2 rounded px-2"
                type="text"
                id="brand"
                value={formData.brand}
                onChange={handleChange}
                required
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
                required
              />
            </span>

            <input
              placeholder="image Url"
              className="border p-1 w-full my-2 rounded px-2"
              type="text"
              id="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="description"
              className="border p-1 w-full my-2 rounded px-2"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
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

export default ManageProducts;

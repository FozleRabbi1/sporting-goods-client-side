/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import Cart from "../Home/Featuredsection/Cart";
import { RouterProduct } from "../../redux/fetures/get-AllProducts";
import "react-range-slider-input/dist/style.css";
import { useForm } from "react-hook-form";

type PriceType = {
  min: number;
  max: number;
};

const AllProducts = () => {
  const { handleSubmit, register, reset } = useForm();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sorting, setSorting] = useState("descending");
  const [price, setPrice] = useState<PriceType>({ min: 0, max: 10000 });
  // const [price, setPrice] = useState({});
  let newData;
  const { data, isLoading, refetch } =
    RouterProduct.useGetAllRouterProductsQuery({
      selectedCategory,
      minPrice: price.min,
      maxPrice: price.max,
      sorting,
    });
  newData = data?.data;

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const handleCategory = (event: any) => {
    setPrice({ min: 0, max: 10000 });
    setSorting("");
    setSelectedCategory(event.target.value);
    reset();
  };

  const handleAss = (event: any) => {
    setPrice({ min: 0, max: 10000 });
    setSorting("");
    setSorting(event);
    refetch();
  };

  const handleAssDiss = (event: any) => {
    setPrice({ min: 0, max: 10000 });
    setSorting("");
    setSorting(event);
    refetch();
  };

  const onSubmit = (data: any) => {
    setSelectedCategory("");
    setSorting("");
    setPrice(data);
    reset();
  };

  const handleShowAll = () => {
    setSelectedCategory("");
    setPrice({ min: 0, max: 10000 });
    setSorting("");
    refetch();
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between md:justify-end pt-5 px-5 lg:px-20 ">
        <div className="flex justify-end mb-2 lg:mb-0 lg:mr-5">
          {sorting === "ascending" ? (
            <button
              onClick={() => handleAssDiss("descending")}
              className="input input-bordered input-secondary"
            >
              Descending{" "}
            </button>
          ) : (
            <button
              onClick={() => handleAss("ascending")}
              className="input input-bordered input-secondary"
            >
              Ascending{" "}
            </button>
          )}
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-end items-center w-full"
          >
            <input
              type="number"
              placeholder="Min"
              className="input input-bordered input-secondary w-20 mr-2"
              id="min"
              {...register("min")}
            />
            <input
              type="number"
              placeholder="max"
              className="input input-bordered input-secondary w-20 "
              id="max"
              {...register("max")}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-8 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>

        <label className="input input-secondary lg:w-[180px] flex items-center gap-2 lg:mx-5 my-2 lg:my-0">
          <input
            onChange={handleCategory}
            type="text"
            className="grow"
            placeholder="Find By Name, brand"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <select
          className="select select-secondary lg:w-[180px]"
          onChange={handleCategory}
          value={selectedCategory}
        >
          <option disabled selected>
            Pick your favorite products
          </option>
          <option value="">All Category</option>
          <option value="Helmet">Helmet</option>
          <option value="Pads">Pads</option>
          <option value="Guard">Guard</option>
          <option value="Ball">Ball</option>
          <option value="Gloves">Gloves</option>
          <option value="Bat">Bat</option>
        </select>

        <button
          onClick={handleShowAll}
          type="button"
          className="btn btn-outline btn-secondary lg:ml-5 mt-2 lg:mt-0 "
        >
          Show All
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 md:gap-y-12 md:gap-x-5 lg:gap-10 xl:gap-20 p-5 md:p-10 lg:p-0 xl:p-20 lg:pt-5">
        {newData?.length === 0 ? (
          <p> No data Found </p>
        ) : (
          newData?.map((item: any) => <Cart key={item._id} item={item}></Cart>)
        )}
      </div>
    </div>
  );
};

export default AllProducts;

import { useState } from "react";
import Cart from "../Home/Featuredsection/Cart";
import { RouterProduct } from "../../redux/fetures/get-AllProducts";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState([0, 500]);

  const { data, isLoading } =
    RouterProduct.useGetAllRouterProductsQuery(selectedCategory);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
    // Add any additional logic you want to execute when a category is selected
  };

  return (
    <div>
      <div className="flex justify-end pt-5 px-20">
        <div className="w-[250px]  flex flex-col justify-end ">
          <RangeSlider min={0} max={500} step={5} onInput={setValue} />
          <div className="flex justify-between border-b-2">
            <span> {value[0]} $</span>
            <span> --- </span>
            <span>{value[1]} $</span>
          </div>
        </div>
        <label className="input input-secondary flex items-center gap-2 ml-5">
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
          className="select select-secondary ml-5 "
          onChange={handleCategory}
          value={selectedCategory}
        >
          <option disabled selected>
            Pick your favorite products
          </option>
          <option value="">All</option>
          <option value="Helmet">Helmet</option>
          <option value="Pads">Pads</option>
          <option value="Guard">Guard</option>
          <option value="Ball">Ball</option>
          <option value="Gloves">Gloves</option>
          <option value="Bat">Bat</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-12 md:gap-x-20 p-5 md:p-10 lg:p-20 lg:pt-5">
        {data?.data.length === 0 ? (
          <p> No data Found </p>
        ) : (
          data?.data?.map((item) => <Cart key={item._id} item={item}></Cart>)
        )}
      </div>
    </div>
  );
};

export default AllProducts;

import { NavLink } from "react-router-dom";
import { allProducts } from "../../../redux/fetures/getAllProducts";
import Cart from "./Cart";
import { useEffect } from "react";

const Featuredsection = () => {
  const { data, isLoading, refetch } =
    allProducts.useGetAllProductsQuery(undefined);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  const uniqueCategories = [
    ...new Set(data?.data.map((item) => item.category)),
  ];
  return (
    <div className="bg-[#edf5f5] ">
      <h2 className="text-center text-4xl font-bold pt-5">All Products</h2>
      <p className="px-5 md:px-20 opacity-80 text-justify md:text-center">
        Tincidunt scelerisque! Ridiculus arcu pulvinar ultrices nascetur
        scelerisque, rhoncus elementum, elementum, elementum. Pellentesque, nec.
        Lacus nisi porta ultrices! Ut rhoncus nec nec? Porta dolor, massa
        elementum nec magnis cum, facilisis montes lacus amet, amet dis risus.
        Lectus ut, elementum a.
      </p>
      <div className="flex justify-center flex-wrap gap-4 py-4 pb-0 ld:py-8">
        {uniqueCategories.map((item) => (
          <NavLink
            to={`/catories/${item}`}
            className=" text-center bg-slate-400 w-[120px] p-1 rounded mb-5 text-xl font-semibold"
          >
            {item}
          </NavLink>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 md:gap-y-12 md:gap-x-5 lg:gap-10 xl:gap-20 p-5 md:p-10 lg:p-0 xl:p-20 lg:pt-5">
        {data?.data?.map((item) => (
          <Cart key={item._id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Featuredsection;

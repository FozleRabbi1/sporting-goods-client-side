import { allProducts } from "../../../redux/fetures/getAllProducts";
import Cart from "./Cart";

const Featuredsection = () => {
  const { data, isLoading } = allProducts.useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="bg-green-200 grid grid-cols-3 gap-10 px-36 ">
      {data.data.map((item) => (
        <Cart key={item._id} item={item}></Cart>
      ))}
    </div>
  );
};

export default Featuredsection;

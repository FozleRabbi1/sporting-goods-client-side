import { allProducts } from "../../../redux/fetures/getAllProducts";
import Cart from "./Cart";

const Featuredsection = () => {
  const { data, isLoading } = allProducts.useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="bg-[#edf5f5] ">
      <h2 className="text-center text-4xl font-bold pt-5">All Products</h2>
      <p className="px-20 opacity-80 text-center">
        Tincidunt scelerisque! Ridiculus arcu pulvinar ultrices nascetur
        scelerisque, rhoncus elementum, elementum, elementum. Pellentesque, nec.
        Lacus nisi porta ultrices! Ut rhoncus nec nec? Porta dolor, massa
        elementum nec magnis cum, facilisis montes lacus amet, amet dis risus.
        Lectus ut, elementum a.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-12 md:gap-x-20 p-5 md:p-10 lg:p-20 ">
        {data?.data?.map((item) => (
          <Cart key={item._id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Featuredsection;

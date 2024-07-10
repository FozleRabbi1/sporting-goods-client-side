import { allProducts } from "../../redux/fetures/getAllProducts";
import Cart from "../Home/Featuredsection/Cart";

const AllProducts = () => {
  // const params = useParams();
  const { data, isLoading } = allProducts.useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-12 md:gap-x-20 p-5 md:p-10 lg:p-20 ">
        {data?.data?.map((item) => (
          <Cart key={item._id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

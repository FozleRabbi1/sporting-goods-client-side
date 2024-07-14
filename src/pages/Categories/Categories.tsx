import { useParams } from "react-router-dom";
import { AllCategories } from "../../redux/fetures/getCategories";
import Cart from "../Home/Featuredsection/Cart";
import { useEffect } from "react";

const Categories = () => {
  const params = useParams();
  const { data, refetch } = AllCategories.useGetCategoriesQuery(
    params?.category
  );
  useEffect(() => {
    refetch();
  }, []);

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

export default Categories;

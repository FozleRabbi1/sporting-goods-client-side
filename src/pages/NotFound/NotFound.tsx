import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <h2 className="text-3xl">Page Not Found</h2>
      <NavLink className="mt-4 border rounded-md py-1 px-4" to="/">
        Back To Home
      </NavLink>
    </div>
  );
};

export default NotFound;

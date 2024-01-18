import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Root = () => {
  return (
    <div className="text-slate-800">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Root;

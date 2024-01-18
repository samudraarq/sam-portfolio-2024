import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Root = () => {
  return (
    <div className="text-slate-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Root;

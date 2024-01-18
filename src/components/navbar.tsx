import { Link } from "react-router-dom";
import Logo from "./common/logo";

const Navbar = () => {
  return (
    <div className="absolute inset-x-0">
      <div className="px-5 lg:px-16 md:px-8">
        <div className="container pt-12 pb-10">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-14">
              <Link to="/my-work">my work</Link>
              <a href="#">get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

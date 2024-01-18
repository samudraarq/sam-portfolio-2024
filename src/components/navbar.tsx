import { Link } from "react-router-dom";
import Logo from "./common/logo";
import Section from "./common/section";

const Navbar = () => {
  return (
    <div className="absolute inset-x-0">
      <Section>
        <div className="container pt-12 pb-10">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-14">
              <Link to="/my-work">my work</Link>
              <a href="#">get in touch</a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default Navbar;

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-screen p-3 md:p-5">
      <div className="bg-primary h-full rounded-2xl p-2 md:px-11">
        <div className="container">
          <h1 className="mt-[180px] font-semibold text-5xl max-w-[750px] font-display">
            Hi, I’m Samudra, Web Designer, Webflow Developer, and React
            Developer
          </h1>
          <p className="text-lg max-w-[500px] mt-5">
            I design and build beautiful websites for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, I will give you a time and cost estimate.
          </p>
          <Link to="/my-work">
            <button className="bg-slate-800 text-white rounded-full px-8 py-3 mt-16">
              see my work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;

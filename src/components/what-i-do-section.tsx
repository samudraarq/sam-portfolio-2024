import Section from "./common/section";

const WhatIDoSection = () => {
  return (
    <Section>
      <div className="container mt-[100px]">
        <div className="flex gap-[10px] md:gap-[30px]">
          <div className="flex-1">
            <h1 className="font-semibold text-5xl font-display">What I do</h1>
          </div>
          <div className="flex-1 flex flex-col gap-12">
            <div>
              <h2 className="text-2xl mb-5">Web Design</h2>
              <p className="max-w-[467px]">
                I design beautiful and powerful websites for modern businesses.
                Any business today needs a website that wins customers’ trust
                and helps you do your business well. I make sure your website is
                up to that standard.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-5">Webflow Development</h2>
              <p className="max-w-[467px]">
                I build websites in Webflow where I can create responsive,
                powerful and fully custom websites. Plus, Webflow has an
                incredibly simple Content Editor for you and your team to edit
                website content quickly and easily.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-5">React Development</h2>
              <p className="max-w-[467px]">
                As a React developer, I build responsive, feature-rich web
                applications. React provides a higher level of customization,
                making it suitable for projects that require tailored solutions
                and unique design implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default WhatIDoSection;

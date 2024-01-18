const Footer = () => {
  return (
    <div className="p-3 md:p-5">
      <div className="bg-primary h-full rounded-2xl py-7 px-2 lg:px-11 md:px-3">
        <div className="container">
          <div className="flex gap-[10px] md:gap-[30px]">
            <div className="flex-1">
              <h1 className="font-semibold text-5xl font-display">What I do</h1>
            </div>
            <div className="flex-1">
              <p className="max-w-[467px]">
                If you need a modern and powerful website for your business,
                startup or personally, I am available for work. You can email me
                directly at samudrafaris@gmail.com.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-[200px]">
            © All right reserved – Samudra Faris
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

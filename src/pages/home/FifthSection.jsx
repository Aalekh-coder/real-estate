import React from "react";

const FifthSection = () => {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row text-[#1A1A1A] md:px-10">
      <div className="relative px-5 py-5 md:w-1/2 mt-10">
        <img src="https://i.pinimg.com/736x/0a/7c/e1/0a7ce1a9190cf8bddf40e919edbf6d0d.jpg" className="h-[50vh] rounded-xl lg:h-[60vh] " />
        <img src="https://i.pinimg.com/736x/31/e4/2f/31e42f5ccc99c6208e7f8743728cacbb.jpg" className="h-[50vh] rounded-xl absolute left-28 top-24 border-white border-4 lg:h-[60vh] lg:left-[40vh]"/>
        <img src="https://i.pinimg.com/736x/80/5e/12/805e124f03dc807e974627e4814bff43.jpg" className="rounded-xl mt-10 lg:w-[35vw]"/>
      </div>
      <div className="px-5 lg:mt-10 md:w-1/2">
        <span className="flex flex-col font-bold text-xl mb-2 md:text-3xl lg:text-4xl">
          <p>How It works?</p>
          <p>Find a perfect home</p>
        </span>
        <p className="text-2xl">
          Discover properties that match your unique needs and aspirations for
          comfortable living.
        </p>

        <div className="lg:ml-10 lg:mt-20">
          <div className="flex gap-5 my-4 items-start ml-5">
            <div className="relative h-32 w-32 lg:h-32 lg:w-32">
              <img src="/fifth/Icon.png"  />
              <span className="absolute h-10 w-10 bg-yellow-300 rounded-full -z-20 -top-3 right-2"/>
            </div>

            <div>
              <p className="font-medium text-[#1A1A1A] md:text-lg lg:text-2xl">Find Real Estate</p>
              <p>Explore our extensive database of properties. Use advanced filters to discover homes, plots, or commercial spaces that perfectly match your investment and lifestyle needs.</p>
            </div>
          </div>
          <div className="flex gap-5 my-4 items-start ml-5 ">
            <div className="relative  h-32 w-32 lg:h-32 lg:w-32">
              <img src="/fifth/Icon-3.png" alt="" />
              <span className="absolute h-10 w-10 bg-yellow-300 rounded-full -z-20 -top-3 right-2"></span>
            </div>

            <div>
              <p className="font-medium text-[#1A1A1A] md:text-lg lg:text-2xl">Meet Realtor</p>
              <p> Connect with experienced local real estate agents dedicated to your success. Our expert realtors provide personalized guidance, market insights, and support throughout your property journey.</p>
            </div>
          </div>
          <div className="flex gap-5 my-4 items-start ml-5 ">
            <div className="relative h-32 w-32 lg:h-32 lg:w-32">
              <img src="/fifth/Icon-2.png" className="" />
              <span className="absolute h-10 w-10 bg-yellow-300 rounded-full -z-20 -top-3 right-2"></span>
            </div>

            <div>
              <p className="font-medium text-[#1A1A1A] md:text-lg lg:text-2xl">Take The Keys</p>
              <p> Celebrate your successful acquisition! From negotiation to paperwork, we ensure a smooth closing process, making your transition into a new home or investment seamless and stress-free.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;

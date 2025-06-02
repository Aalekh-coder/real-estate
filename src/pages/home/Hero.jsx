import React from "react";
import Second from "./Second";

const Hero = () => {
  return (
    <div className="h-[100vh]">
      <div
        className="h-[100vh] w-full bg-cover bg-center absolute top-0 -z-10"
        style={{
          backgroundImage: `url('/hero/happy-family-looking-through-window-while-moving-into-new-home.jpg')`,
        }}
      />
      <div className="text-center text-white lg:mt-[5rem] mb-[10rem] ">
        <button className="border px-5 py-2 rounded-full font-bold shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 mt-[10rem] hover:text-zinc-900 duration-200 hover:scale-110">
          Let us guides your Home
        </button>
        <p className="text-4xl font-medium mt-4 lg:font-extrabold lg:text-5xl lg:w-[40vw] lg:mx-auto shadow-lg hover:text-white duration-200 hover:scale-105">
          Discover a place you'll love to live
        </p>
      </div>
    </div>
  );
};

export default Hero;

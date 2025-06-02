import { MapPinHouse, School, University, Users } from "lucide-react";
import React from "react";

const ThirdSection = () => {
  return (
    <div className="w-full  bg-[#ffc526] my-20 py-20 lg:px-10 text-white">
      <p className="text-center font-bold text-2xl md:text-4xl">Why Choose Us</p>
      <p className="text-center text-lg px-5 mt-2 font-medium md:text-2xl mb-8">
        Finding your perfect property, made easy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center justify-center flex-col mt-10 px-8">
          <div className="">
            <School size={60}/>
          </div>
          <div>
            <p className="font-bold text-lg my-2">Find your future Home</p>
          </div>
          <div className="text-center text-xl">
            We help you find a new home by offering a smart real estate
            experience
          </div>
        </div>

        <div className="flex items-center justify-center flex-col mt-10 px-8">
          <div className="">
            <Users size={60}/>
          </div>
          <div>
            <p className="font-bold text-lg my-2">Experienced agents</p>
          </div>
          <div className="text-center text-xl">
            Find an experienced agent who knows your market best
          </div>
        </div>

        <div className="flex items-center justify-center flex-col mt-10 px-8">
          <div className="">
            <MapPinHouse size={60}/>
          </div>
          <div>
            <p className="font-bold text-lg my-2">List your own property</p>
          </div>
          <div className="text-center text-xl">
           Sign up now and sell or rent your own properties
          </div>
        </div>

        <div className="flex items-center justify-center flex-col mt-10 px-8">
          <div className="">
            <University size={60}/>
          </div>
          <div>
            <p className="font-bold text-lg my-2">Buy or rent homes</p>
          </div>
          <div className="text-center text-xl">
           Millions of houses and apartments in your favourite cities
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

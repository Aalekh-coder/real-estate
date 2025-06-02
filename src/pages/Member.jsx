import React from "react";

const Member = () => {
  const popularLocations = [
  "Dwarka",
  "South Delhi",
  "Noida Extension",
  "Gurugram",
  "Ghaziabad",
  "Faridabad",
  "Janakpuri",
  "Vasant Kunj",
  "Indirapuram",
  "Connaught Place",
  "Whitefield, Bengaluru",
  "Kothrud, Pune",
  "Bandra, Mumbai",
  "Jubilee Hills, Hyderabad",
  "New Town, Kolkata",
];
  return (
    <div className="mt-20 w-full text-[#1A1A1A] md:mt-[20vh]">
      <p className="font-bold text-center text-xl md:text-3xl">
        Meet Our Team of Expert
      </p>
      <p className="text-center my-2 md:px-20">
        Discover the dedicated professionals behind your successful property
        journey. Our experienced team offers unparalleled insights and
        personalized service, ensuring your real estate goals are met with
        precision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:mt-10">
        <div className="mx-3 my-5 md:mx-8 lg:mx-10">
          <img src="/members/div.member-thumbnail-wrapper.png" alt="" />
          <p className="font-semibold mt-2 text-xl">John powell</p>
          <p className="text-lg">Service Support</p>
        </div>
        <div className="mx-3 my-5 md:mx-8 lg:mx-10">
          <img src="/members/div.member-thumbnail-wrapper (1).png" alt="" />
          <p className="font-semibold mt-2 text-xl">Thomas James</p>
          <p className="text-lg">Marketing</p>
        </div>
        <div className="mx-3 my-5 md:mx-8 lg:mx-10">
          <img src="/members/div.member-thumbnail-wrapper (2).png" alt="" />
          <p className="font-semibold mt-2 text-xl">Tom wilson</p>
          <p className="text-lg">Designer</p>
        </div>
        <div className="mx-3 my-5 md:mx-8 lg:mx-10">
          <img src="/members/div.member-thumbnail-wrapper (3).png" alt="" />
          <p className="font-semibold mt-2 text-xl">Samuel Palmer</p>
          <p className="text-lg">Marketing</p>
        </div>
      </div>

      <p className="font-bold mt-24 text-center text-xl md:text-3xl">
        Popular Real Estate Markets
      </p>
      <p className="text-center my-2 md:px-20">
       Dive into India's most sought-after real estate markets, where growth meets opportunity. These are the regions exhibiting strong economic indicators, significant infrastructure development, and a consistent demand for properties. Whether you're a buyer, seller, or investor, understand what makes these markets thrive and how to capitalize on their potential.
      </p>

      <div className="px-5 my-10 flex flex-wrap lg:px-32">
        {popularLocations.map((location, index) => (
        <span
          key={index} // Using index as key is acceptable here since the list is static
          className="border border-gray-300 px-5 py-2 rounded-full font-semibold text-black bg-white shadow-sm hover:bg-gray-50 cursor-pointer m-1" // Added more styling for better appearance on white bg
        >
          {location}
        </span>
      ))}
      </div>
    </div>
  );
};

export default Member;

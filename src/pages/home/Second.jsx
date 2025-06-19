import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bath, Bed, LandPlot } from "lucide-react";

const Second = () => {
const realEstateListings = [
  {
    img: "https://images.nobroker.in/img/5da43c2c0e3bcc90ab696a9c/5da43c2c0e3bcc90ab696a9c_87525_364106_large.jpg",
    title: "3BHK Apartment in Dwarka Sector 10",
    description: "Dwarka, New Delhi",
    price: "1.45 Cr",
    beds: 3,
    baths: 2,
    landPlot: "1,600 sqft",
  },
  {
    img: "https://housing-images.n7net.in/01c16c28/162eaa161ac7fafa71d1a7531525134a/v0/large/4_bhk_independent_builder_floor-for-sale-south_extension_ii-New+Delhi-hall.jpg",
    title: "Builder Floor in South Extension",
    description: "South Extension II, Delhi",
    price: "3.25 Cr",
    beds: 3,
    baths: 3,
    landPlot: "2,200 sqft",
  },
  {
    img: "/build/complex-aerial-view-city.jpg",
    title: "Commercial Space for Office Use",
    description: "Karol Bagh, New Delhi",
    price: "5.8 Cr",
    beds: 0,
    baths: 2,
    landPlot: "3,000 sqft",
  },
  {
    img: "/build/dillon-kydd-2keCPb73aQY-unsplash.jpg",
    title: "Studio Apartment for Investment",
    description: "Saket, South Delhi",
    price: "58 Lakh",
    beds: 1,
    baths: 1,
    landPlot: "550 sqft",
  },
  {
    img: "/build/francesca-tosolini-6japTIjUQoI-unsplash.jpg",
    title: "Independent House with Parking",
    description: "Vasant Kunj, New Delhi",
    price: "4.1 Cr",
    beds: 5,
    baths: 4,
    landPlot: "3,500 sqft",
  },
  {
    img: "/build/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    title: "3BHK Flat in Indirapuram",
    description: "Indirapuram, Ghaziabad",
    price: "82 Lakh",
    beds: 3,
    baths: 2,
    landPlot: "1,400 sqft",
  },
  {
    img: "/build/lotus-design-n-print-wRzBarqn3hs-unsplash.jpg",
    title: "Modern 4BHK Townhouse",
    description: "Golf Course Road, Gurugram",
    price: "3.75 Cr",
    beds: 4,
    baths: 4,
    landPlot: "2,700 sqft",
  },
  {
    img: "/build/webaliser-_TPTXZd9mOo-unsplash.jpg",
    title: "2BHK Apartment in Janakpuri",
    description: "Janakpuri, Delhi",
    price: "1.05 Cr",
    beds: 2,
    baths: 2,
    landPlot: "1,050 sqft",
  },
];


  return (
    <div className="w-full text-[#1A1A1A]">
      <h1 className="font-bold text-2xl text-center mt-10 md:text-3xl lg:text-5xl">Home For You</h1>
      <p className="text-center text-lg font-medium md:text-xl lg:text-2xl">Based on your history</p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-5 lg:px-12 lg:grid-cols-3 ">
       {realEstateListings?.map((item,index)=>{
        return <CardReal description={item?.description} img={item?.img} title={item?.title} key={index} price={item?.price} baths={item?.baths} beds={item?.beds} landPlot={item?.landPlot}/>
       }) }
      </div>
    </div>
  );
};

export default Second;


const CardReal = ({ img, title, description, price, beds, baths, landPlot }) => {
  return (
    <div className="shadow-lg px-2 rounded-lg mx-3 my-5 duration-300 hover:scale-110 hover:shadow-zinc-500">
      {/* Property Image */}
      <img
        src={img || "/build/complex-aerial-view-city.jpg"} // Fallback image if 'img' prop is not provided
        alt={title || "Property image"} // Added alt attribute for accessibility
        className="w-full mt-2 rounded-lg"
      />

      <div className="flex items-center justify-between px-2">
        <div>
          {/* Property Title */}
          <p className="font-semibold my-2">{title || "Skyper Pool Apartment"}</p>
          {/* Property Description/Address */}
          <p className="my-4">{description}</p>
        </div>
        {/* Price */}
        <div className="font-semibold text-2xl text-blue-500">₹{price}</div>
      </div>

      {/* Property Details (Beds, Baths, Land Plot) */}
      <div className="flex items-center px-3 py-3 gap-2 pb-4">
        <span className="flex items-center gap-1">
          <Bed size={20} /> {/* Assuming Bed is an icon component */}
          {beds}
        </span>
        <span className="flex items-center gap-1">
          <Bath size={20} /> {/* Assuming Bath is an icon component */}
          {baths}
        </span>
        <span className="flex items-center gap-1">
          <LandPlot size={20} /> {/* Assuming LandPlot is an icon component */}
          {landPlot}
        </span>
      </div>
    </div>
  );
};

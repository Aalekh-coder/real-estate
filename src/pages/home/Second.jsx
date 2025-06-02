import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bath, Bed, LandPlot } from "lucide-react";

const Second = () => {
const realEstateListings = [
  {
    img: "/build/pexels-binyaminmellish-186077.jpg",
    title: "Luxury Hillside ",
    description: "Green Valley, Dehradun",
    price: "8.5lakhs",
    beds: 6,
    baths: 5,
    landPlot: "10,000 sqft",
  },
  {
    img: "/build/bailey-anselme-Bkp3gLygyeA-unsplash.jpg",
    title: "Luxury Hillside Villa",
    description: "Green Valley, Dehradun",
    price: "8.5lakhs",
    beds: 6,
    baths: 5,
    landPlot: "10,000 sqft",
  },
  {
    img: "/build/brian-babb-XbwHrt87mQ0-unsplash.jpg",
    title: "Spacious Family Home",
    description: "Sector 22, Noida",
    price: "320lakhs",
    beds: 4,
    baths: 3,
    landPlot: "2,400 sqft",
  },
  {
    img: "/build/complex-aerial-view-city.jpg",
    title: "Downtown Penthouse",
    description: "Connaught Place, Delhi",
    price: "12lakhs",
    beds: 4,
    baths: 4,
    landPlot: "3,500 sqft",
  },
  {
    img: "/build/dillon-kydd-2keCPb73aQY-unsplash.jpg",
    title: "Cozy Studio Apartment",
    description: "Hauz Khas, Delhi",
    price: "80lakhs",
    beds: 1,
    baths: 1,
    landPlot: "600 sqft",
  },
  {
    img: "/build/francesca-tosolini-6japTIjUQoI-unsplash.jpg",
    title: "Suburban Bungalow",
    description: "Vaishali, Ghaziabad",
    price: "2.8lakhs",
    beds: 3,
    baths: 2,
    landPlot: "1,800 sqft",
  },
  {
    img: "/build/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
    title: "Beachfront Property",
    description: "Goa (Hypothetical listing)",
    price: "150lakhs",
    beds: 7,
    baths: 6,
    landPlot: "15,000 sqft",
  },
  {
    img: "/build/lotus-design-n-print-wRzBarqn3hs-unsplash.jpg",
    title: "Modern Townhouse",
    description: "Gurugram, Haryana",
    price: "4.50lakhs",
    beds: 5,
    baths: 4,
    landPlot: "2,800 sqft",
  },
  {
    img: "/build/webaliser-_TPTXZd9mOo-unsplash.jpg",
    title: "Garden View Apartment",
    description: "Janakpuri, Delhi",
    price: "1.8lakhs",
    beds: 2,
    baths: 2,
    landPlot: "1,100 sqft",
  },
];

  return (
    <div className="w-full text-[#1A1A1A]">
      <h1 className="font-bold text-2xl text-center mt-10 md:text-3xl lg:text-5xl">Home For You</h1>
      <p className="text-center text-lg font-medium md:text-xl lg:text-2xl">Based on your history</p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-5 lg:px-12 lg:grid-cols-3 ">
       {realEstateListings?.map((item,index)=>{
        return <CardReal desciption={item?.description} img={item?.img} title={item?.title} key={index} price={item?.price} baths={item?.baths} beds={item?.beds} landPlot={item?.landPlot}/>
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
          <p className="my-4">{description || "1020 Bloomingdale Ave"}</p>
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

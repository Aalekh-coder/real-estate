import { Bath, Bed, MapPin, SquaresSubtract } from "lucide-react";
import React from "react";

const Listing = () => {
  const indianPropertyData = [
    {
      img: "https://www.dlfhomes.co.in/dlf-floors-phase-3-gurgaon/images/banner-mobile.webp",
      propertyTitle: "Luxury Apartment, DLF Cybercity",
      locationNo: "Sector 24, Gurugram",
      price: "₹3.25 Cr", // ₹3.25 Crores
      bads: 3,
      bath: 3,
      square: "1800sq",
    },
    {
      img: "./build/powerofpurchase-janakpuri.jpg",
      propertyTitle: "Spacious Family Villa",
      locationNo: "ITPL Road, Bengaluru",
      price: "₹4.75 Cr", // ₹4.75 Crores
      bads: 5,
      bath: 4,
      square: "4200sq",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHB9d3AOfFHqKYujQR3gCgnrq07HQv9cT4mQ&s",
      propertyTitle: "Elegant Duplex, South Delhi",
      locationNo: "Vasant Kunj, New Delhi",
      price: "₹7 Cr", // ₹7 Crores
      bads: 4,
      bath: 5,
      square: "3500sq",
    },
    {
      img: "https://homesharp.com/_next/image?url=https%3A%2F%2Fdevelopers.homesharp.com%2Fassets%2F80191e2e-9d7b-46c3-a6d0-826900700a14.jpg&w=3840&q=75",
      propertyTitle: "Modern Apartment",
      locationNo: "Pali Hill, Mumbai",
      price: "₹5.5 Cr", // ₹5.5 Crores
      bads: 3,
      bath: 3,
      square: "1500sq",
    },
    {
      img: "https://is1-3.housingcdn.com/4f2250e8/fabb09e10661d05802a1570159597c82/v0/fs/ranjekar_tirth-kothrud-pune-ranjekar_realty.jpeg",
      propertyTitle: "Affordable Flat",
      locationNo: "Kothrud, Pune",
      price: "₹85 Lks", // ₹85 Lakhs
      bads: 2,
      bath: 2,
      square: "900sq",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-rR9RrioupV8Po7a4u_OidGT8f9WdSsI4g&s",
      propertyTitle: "Independent House",
      locationNo: "Velachery, Chennai",
      price: "₹1.8 Cr", // ₹1.8 Crores
      bads: 3,
      bath: 3,
      square: "1600sq",
    },
    {
      img: "https://lh3.googleusercontent.com/_VDl3m5r8qWDxnMdpU6vMHASP_avcfa3hS5aiK0Rev0cJX_yTCIi5Ch9HPKdfM4cMKGF0UaEJuN5dXLqnwDzj35VMNiu=w400-rw",
      propertyTitle: "Compact Studio",
      locationNo: "Gachibowli, Hyderabad",
      price: "₹65 La", // ₹65 Lakhs
      bads: 1,
      bath: 1,
      square: "600sq",
    },
    {
      img: "https://housing-images.n7net.in/01c16c28/86b339eac6f24e74f0630d7c2d4559e8/v0/large/residential_plot-for-sale-newtown-Kolkata-plot_view.jpg",
      propertyTitle: "Residential Plot",
      locationNo: "New Town, Kolkata",
      price: "₹90 La", // ₹90 Lakhs
      bads: 0, // For plots, consider 0 beds/baths or add a 'type' prop
      bath: 0,
      square: "2400sq",
    },
    {
      img: "https://housing-images.n7net.in/01c16c28/5bbec8c24358e8c4d4b8ece168ad296c/v0/large/4_bhk_villa-for-sale-panvel-Navi+Mumbai-others.jpg",
      locationNo: "Panvel, Navi Mumbai",
      price: "₹2.9 Cr", // ₹2.9 Crores
      bads: 4,
      bath: 4,
      square: "3000sq",
    },
    {
      img: "https://assets.savills.com/properties/IN3102054495/79c014fafc514118a477070452c4e379-wtm_l_gal.jpg",
      propertyTitle: "Penthouse",
      locationNo: "Worli, Mumbai",
      price: "₹10 Cr", // ₹10 Crores
      bads: 4,
      bath: 5,
      square: "4500sq",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7V7x2VDTc1F07BKgh1-GLOMpS7zuDNFz0aQ&s",
      propertyTitle: "Commercial Office",
      locationNo: "Connaught Place, New Delhi",
      price: "₹15 Cr", // ₹15 Crores
      bads: 0,
      bath: 0,
      square: "6000sq",
    },
    {
      img: "https://housing-images.n7net.in/012c1500/4685e68b47b1d48ec427d29d29a5668b/v0/large.jpeg",
      propertyTitle: "2 BHK Apartment",
      locationNo: "HSR Layout, Bengaluru",
      price: "₹1.2 Cr", // ₹1.2 Crores
      bads: 2,
      bath: 2,
      square: "1100sq",
    },
    {
      img: "https://goodhomes.wwmindia.com/content/2021/jun/designdeconstruct11623929950.jpg",
      propertyTitle: "Luxury Farmhouse",
      locationNo: "Outskirts of Jaipur, Rajasthan",
      price: "₹9 Cr", // ₹9 Crores
      bads: 6,
      bath: 7,
      square: "15000sq",
    },
    {
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1281880255028001224/original/ed473d83-71b8-4428-811d-156c0c0755e9.jpeg?im_w=720&width=720&quality=70&auto=webp",
      propertyTitle: "Cozy 1 BHK, Malad",
      locationNo: "Malad West, Mumbai",
      price: "₹70 La", // ₹70 Lakhs
      bads: 1,
      bath: 1,
      square: "550sq",
    },
    {
      img: "https://housing-images.n7net.in/4f2250e8/1d42cc1a8b9d1a1da7d573049cafb986/v0/large/gokuldham_rohini_property_hub-pitampura-delhi-property_hub_delhi.jpeg",
      propertyTitle: "Residential Plot",
      locationNo: "Sector 34, Chandigarh",
      price: "₹1.5 Cr", // ₹1.5 Crores
      bads: 0,
      bath: 0,
      square: "3000sq",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYsoenGqWDDLjfMcfiZdmQ5YHoUjeZhFBXA&s",
      propertyTitle: "Luxury Serviced Apartment",
      locationNo: "Jubilee Hills, Hyderabad",
      price: "₹2 Cr", // ₹2 Crores
      bads: 2,
      bath: 2,
      square: "1400sq",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/541eaa20e4b0eb59dead1cd7/1620311566703-78LVL2UDTA0MC6QS91UD/architects+Greater+Noida",
      propertyTitle: "Modern Townhouse, Noida",
      locationNo: "Sector 50, Noida",
      price: "₹1.95 Cr", // ₹1.95 Crores
      bads: 4,
      bath: 4,
      square: "2200sq",
    },
    {
      img: "https://apollo.olx.in/v1/files/xkznk9u8sh343-IN/image",
      propertyTitle: "Sea-facing Flat",
      locationNo: "ECR Road, Chennai",
      price: "₹3.5 Cr", // ₹3.5 Crores
      bads: 3,
      bath: 3,
      square: "1900sq",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/599339783.webp?k=5331a85ebef18f29dd7a41de36fb153236414ef049f1cb4c64f7d993f9dabb7b&o=",
      propertyTitle: "Vacation Home, Lonavala",
      locationNo: "Lonavala, Maharashtra",
      price: "₹2.3 Cr", // ₹2.3 Crores
      bads: 4,
      bath: 3,
      square: "2800sq",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGFhti9SyTANcZMYX7QyWNo_xns3jDJaqYQ&s",
      propertyTitle: "Premium 3 BHK, Salt Lake",
      locationNo: "Salt Lake City, Kolkata",
      price: "₹1.1 Cr", // ₹1.1 Crores
      bads: 3,
      bath: 2,
      square: "1400sq",
    },
  ];

  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10">
      {indianPropertyData?.map((item, index) => (
        <ListingCard
          key={index}
          img={item?.img}
          propertyTitle={item?.propertyTitle}
          locationNo={item?.locationNo}
          price={item?.price}
          bads={item?.bads}
          bath={item?.bath}
          square={item?.square}
        />
      ))}
    </div>
  );
};

export default Listing;

const ListingCard = ({
  img,
  propertyTitle,
  locationNo,
  price,
  bads,
  bath,
  square,
}) => {
  return (
    <div className="relative mx-2 my-5">
      <img
        src={img ? img : "/Listing/pexels-binyaminmellish-1500459.jpg"}
        className="rounded-xl  md:h-[75vh]"
      />
      <div className="absolute top-2 flex gap-4 items-center ml-5">
        <p className="uppercase font-medium bg-[#1F4B43] px-3 py-1 rounded-full text-white lg:text-[12px]">
          For Sale
        </p>
        <p className="uppercase font-medium bg-[#E7C873]  px-3 py-1 rounded-full text-white lg:text-[12px]">
          Features
        </p>
      </div>

      <div className="text-white backdrop-filter backdrop-blur-lg bg-opacity-35 border-gray-900 flex flex-col px-5 rounded-2xl absolute bottom-3 mx-2">
        <p className="font-bold my-1">
          {propertyTitle ? propertyTitle : "Luxury Family Home"}
        </p>
        <div className="flex items-center gap-2 my-1">
          <MapPin size={19} /> {locationNo ? locationNo : "1800-1818 79th St"}
        </div>
        <div className="flex gap-2 justify-between">
          <div className="font-bold text-blue-200 text-xl">{price ? price : "395,000"}</div>
          <div className="flex items-center">
            <span className="flex items-center gap-2 md:gap-1 px-2 md:px-1">
              <Bed /> {bads ? bads : "4"}
            </span>
            <span className="flex items-center gap-2 md:gap-1 px-2 md:px-1">
              <Bath /> {bath ? bath : "4"}
            </span>
            <span className="flex items-center gap-2 md:gap-1 px-2 md:px-1">
              <SquaresSubtract /> {square ? square : "400"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

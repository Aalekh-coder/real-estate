// import React from 'react'

// const Blog = () => {
//   return (
//     <div className='mt-20'>Blog</div>
//   )
// }

// export default Blog


import React from 'react';

const Blog = () => {
const blogs = [
  { id: 1, name: 'Luxury Villas in Goa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6af6wWPy5WNe7wvnt_Gjk26Xl2qi6_A0fsg&s', location: 'Goa' },
  { id: 2, name: 'Apartments in Mumbai', img: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201906172206231185-2607492-4d4b5feada1611e9a09b0242ac110002.jpg', location: 'Mumbai' },
  { id: 3, name: 'Farmhouses in Punjab', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQC1UvvABS-T4poR56kK_SrOQuNBlRAbCSOg82TpjUQleJWIh1cV_vlFDOLzrL9Te4H0&usqp=CAU', location: 'Punjab' },
  { id: 4, name: 'Hill Stations Homes in Himachal', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqChIJ-9TD_zkm6-0pm5_WE5fo7DpFfaMQA&s', location: 'Himachal Pradesh' },
  { id: 5, name: 'Beach facing Bungalows in Kerala', img: 'https://res.cloudinary.com/voyehomes/image/upload/w_1280,f_auto,c_scale/v1687166603/property/77/image/1ebf46ea-cc0f-4460-b51c-82caec473d74.jpg', location: 'Kerala' },
  { id: 6, name: 'Historical Houses in Rajasthan', img: 'https://i.pinimg.com/736x/c5/42/28/c5422806da8c89cf540462b8f8a09224.jpg', location: 'Rajasthan' },
  { id: 7, name: 'Tea Garden Estates in Assam', img: 'https://static.toiimg.com/photo/50739101.cms', location: 'Assam' },
  { id: 8, name: 'Modern Apartments in Bangalore', img: 'https://www.luxuryresidences.in/seo-assest/images/embassy-lake-terraces-banner.webp', location: 'Bangalore' },
];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Real Estate Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden mx-2 md:mx-8 mt-4 md:mt-8">
            <img src={blog.img} alt={blog.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.name}</h2>
              <p className="text-gray-600">Location: {blog.location}</p>
              <a href={`/blog/${blog.id}`} className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
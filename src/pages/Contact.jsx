// import React from "react";

// const Contact = () => {
//   return (
//     <div className="mt-20 relative">
//       <img
//         src="/contact/pexels-pixabay-259588.jpg"
//         className="fixed top-0 object-cover w-full -z-30 h-full"
//       />
//       <div className="w-full h-[100vh] text-black">
//         <div>
//           <p className="text-center font-semibold text-3xl my-2">Get In Touch</p>
//           <p className="text-black text-center px-3"> A friendly, welcoming sentence or two encouraging users to reach out for inquiries, property assistance, or consultations.</p>
//         </div>
//         <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-5">
              
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'; // Import necessary icons

const Contact = () => {
  return (
    <div className="mt-20 relative min-h-screen">
      {/* Fixed background image */}
      <img
        src="/contact/pexels-pixabay-259588.jpg"
        alt="Modern house background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-30"
      />

      {/* Overlay to ensure readability on the image */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-20"></div>

      {/* Main content container */}
      <div className="w-full text-white py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Title and Introduction */}
        <div className="mb-10">
          <p className="text-center font-bold text-4xl mb-4">Get In Touch</p>
          <p className="text-center text-lg max-w-2xl mx-auto px-3">
            Have questions about buying, selling, or investing in property? Our expert team is ready to assist you. Reach out today!
          </p>
        </div>

        {/* Content Box with Backdrop Filter */}
        <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200 rounded-lg p-6 md:p-8 max-w-4xl mx-auto shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">

            {/* --- Contact Form --- */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6 text-yellow-300">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
                    placeholder="+91-9266474766"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
                    placeholder="Property Inquiry, Partnership, etc."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E7C873] text-[#1F4B43] py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* --- Contact Details & Social Media --- */}
            <div className="flex-1 md:ml-8">
              <h2 className="text-2xl font-bold mb-6 text-yellow-300">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone size={20} className="mr-3 mt-1 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>+91-9266474766</p>
                    <p>+91-9876543210 (Sales)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={20} className="mr-3 mt-1 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>info@softmoreit.co.in</p>
                    <p>support@softmoreit.co.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Office Address:</p>
                    <p>A1B/8, Janakpuri,</p>
                    <p>New Delhi, India 110058</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold mb-2">Business Hours:</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* --- Social Media Links --- */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-yellow-300">Follow Us</h2>
                <div className="flex space-x-5">
                  <a href="https://www.facebook.com/SoftemoreIT/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={28} className="text-white hover:text-yellow-300 transition-colors duration-200" />
                  </a>
                  <a href="https://www.instagram.com/softmore_it/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={28} className="text-white hover:text-yellow-300 transition-colors duration-200" />
                  </a>
                  <a href="https://in.linkedin.com/company/softmore-it" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={28} className="text-white hover:text-yellow-300 transition-colors duration-200" />
                  </a>
                  {/* Add more social icons as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
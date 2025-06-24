import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'; // Import necessary icons

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Company Info */}
        <div className="flex flex-col items-start">
          <div className="flex items-center text-xl font-bold mb-4 capitalize">
            <Home size={24} className="mr-2" />
            houses For Purchase
          </div>
          <p className="text-sm">
            Your trusted partner in finding your perfect property. Simplifying real estate, one home at a time.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/properties" className="hover:underline">Properties</a></li>
            <li><a href="/services" className="hover:underline">Our Services</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <Phone size={16} className="mr-2" /> +91-9266474766
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2" /> info@softmoreit.co.in
            </li>
            <li className="flex items-center">
              <MapPin size={16} className="mr-2" /> A1B/8, Janakpuri, New Delhi, India 110058
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/SoftemoreIT/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} className="hover:text-gray-700" />
            </a>
            <a href="https://www.instagram.com/softmore_it/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} className="hover:text-gray-700" />
            </a>
            <a href="https://in.linkedin.com/company/softmore-it" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} className="hover:text-gray-700" />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Softmore IT. All rights reserved. | <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
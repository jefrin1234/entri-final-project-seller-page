import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-800  py-8 border-t border-gray-200 mt-8 text-white text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">About Us</h2>
            <p className=" leading-relaxed">
              Our platform provides an extensive marketplace for sellers to showcase their products and reach a wider audience. We are committed to delivering the best service and ensuring a seamless experience for both sellers and buyers.
            </p>
          </div>
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-3 ">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/about" className=" hover:text-blue-600">About</a></li>
              <li><a href="/contact" className=" hover:text-blue-600">Contact Us</a></li>
              <li><a href="/terms" className=" hover:text-blue-600">Terms of Service</a></li>
              <li><a href="/privacy" className=" hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
          
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-3 ">Contact Us</h2>
            <p className=" mb-2">
              <a href="mailto:support@example.com" className="hover:text-blue-600">support@example.com</a>
            </p>
            <p className="">123 E-commerce St, Suite 456</p>
            <p className="">City, Country, 12345</p>
          </div>
          
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
            <h2 className="text-lg font-semibold mb-3 ">Follow Us</h2>
            <div className="flex justify-center gap-4">
              <a href="https://facebook.com" className=" hover:text-blue-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className=" hover:text-blue-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className=" hover:text-blue-600">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center  text-sm border-t border-gray-200 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Your E-commerce Site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

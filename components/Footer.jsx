import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">ShopHub</h4>
              <p className="text-sm">
                Your one-stop shop for everything you need.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Customer Service
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

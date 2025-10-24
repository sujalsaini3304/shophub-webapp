import React from "react";

const NewsletterSection = () => {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-400 mb-8">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className=" flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-white border  px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterSection;

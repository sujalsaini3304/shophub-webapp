import { useEffect, useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Heart,
  User,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import useStore from "../../store";

export default function Home() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const {
    server,
    product_category,
    set_products,
    products,
    set_product_category,
  } = useStore();

  const fetchProductCategories = async () => {
    try {
      const res = await axios.get(`${server}/api/admin/product/category`);
      set_product_category(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${server}/api/admin/product`);
      set_products(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (!product_category || product_category.length === 0) {
      fetchProductCategories();
    }
    if (!products || products.length === 0) {
      fetchProducts();
    }
  }, []);

  const addToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking Add to Cart
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Hero Section */}

      <section className="w-full bg-white">
        <picture>
          {/* optional: add resized files to /public and uncomment sources for better performance */}
          {/* <source srcSet="/winter_poster-1024.jpeg" media="(min-width:1024px)" />
    <source srcSet="/winter_poster-768.jpeg" media="(min-width:640px)" /> */}
          <img
            src="/winter_poster.jpeg"
            alt="Hero poster"
            loading="lazy"
            className="w-full  object-center
                 h-48 sm:h-56 md:max-w-260 object-contain md:justify-self-center md:h-72 lg:h-96 xl:h-[520px]"
          />
        </picture>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Shop by Category</h3>
          <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
            View All <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.isArray(product_category) && product_category.length > 0 ? (
            product_category.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition cursor-pointer group"
              >
                <img
                  src={item.image_url}
                  alt={item.category}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                  <h4 className="text-white text-xl font-semibold">
                    {item.category}
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No categories found.</p>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h3>
          <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
            View All <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => {
              // Calculate discounted price for each product
              const originalPrice = product.product_price;
              const discountedPrice =
                originalPrice * (1 - product.product_discount_percentage);
              const discountPercent = Math.round(
                product.product_discount_percentage * 100
              );

              return (
                <div
                  key={product._id}
                  onClick={() => {
                    navigate("/product", {
                      state: { product_id: product._id },
                    });
                  }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.product_name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                    />
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {product.product_name}
                    </h4>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {"★".repeat(Math.floor(product.product_rating))}
                        {"☆".repeat(5 - Math.floor(product.product_rating))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.product_rating})
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600">
                          ₹{discountedPrice.toFixed(2)}
                        </span>
                        {discountPercent > 0 && (
                          <>
                            <span className="text-sm text-gray-500 line-through">
                              ₹{originalPrice.toFixed(2)}
                            </span>
                            <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                              {discountPercent}% OFF
                            </span>
                          </>
                        )}
                      </div>
                      <button
                        onClick={addToCart}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No product found.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

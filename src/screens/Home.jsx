import { useState } from "react";
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

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    {
      name: "Appliances",
      image: "../../public/appliances.jpeg",
    },
    {
      name: "Fashion",
      image: "../../public/fashion.jpeg",
    },
    {
      name: "Home & Living",
      image: "../../public/products.jpeg",
    },
    {
      name: "Herbs",
      image: "../../public/Herbs.jpeg",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Yoga Mat",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Desk Lamp",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
      rating: 4.2,
    },
    {
      id: 8,
      name: "Water Bottle",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      rating: 4.5,
    },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Hero Section */}

      {/* <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"> */}
      {/* <div className="max-w-7xl h-60 w-full mx-auto px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Summer Sale</h2>
            <p className="text-xl md:text-2xl mb-8">
              Up to 50% off on selected items
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
              Shop Now
            </button>
          </div> */}
      {/* <image src="../../public/Herbs.jpeg" className="w-full h-48" alt="poster" /> */}
      {/* </div> */}
      {/* </section> */}

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
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition cursor-pointer group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <h4 className="text-white text-xl font-semibold">
                  {category.name}
                </h4>
              </div>
            </div>
          ))}
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
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                navigate("/product");
              }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {product.name}
                </h4>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={addToCart}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

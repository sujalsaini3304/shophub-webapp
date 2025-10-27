import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Heart,
  User,
  Star,
  ChevronLeft,
  Truck,
  Shield,
  RefreshCw,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import useStore from "../../store";

export default function ProductPages() {
  const location = useLocation();
  const { product_id } = location.state || {};
  const { products } = useStore();
  const [currentPage, setCurrentPage] = useState("product");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [cartItems, setCartItems] = useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find actual product using product_id
  const requiredProduct = products.find((p) => p._id === product_id);

  // Initialize selections when product loads
  React.useEffect(() => {
    if (requiredProduct) {
      setSelectedColor(requiredProduct.product_colour || "");
      setSelectedSize(requiredProduct.product_size_available?.[0] || "");
    }
  }, [requiredProduct]);

  if (!requiredProduct) {
    return <h2 className="text-center mt-10">Product not found!</h2>;
  }

  const relatedProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop",
      rating: 4.3,
    },
    {
      id: 2,
      name: "Phone Case",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Charging Cable",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop",
      rating: 4.4,
    },
    {
      id: 4,
      name: "Portable Speaker",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      rating: 4.7,
    },
  ];

  const addToCart = () => {
    const newItem = {
      id: Date.now(),
      name: requiredProduct.product_name,
      price: discountedPrice,
      quantity: quantity,
      image: requiredProduct.image_url,
      size: selectedSize,
      color: selectedColor,
    };
    setCartItems([...cartItems, newItem]);
    setCurrentPage("checkout");
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // Calculate discounted price
  const originalPrice = requiredProduct.product_price;
  const discountedPrice =
    originalPrice * (1 - requiredProduct.product_discount_percentage);
  const discountPercent = Math.round(
    requiredProduct.product_discount_percentage * 100
  );

  const ProductPage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-blue-600">
            {requiredProduct.category}
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{requiredProduct.product_name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={
                  selectedImage === 0
                    ? requiredProduct.image_url
                    : requiredProduct.product_images[selectedImage - 1]?.url
                }
                alt={requiredProduct.product_name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {/* Main image thumbnail */}
              <button
                onClick={() => setSelectedImage(0)}
                className={`rounded-lg overflow-hidden border-2 bg-gray-100 ${
                  selectedImage === 0 ? "border-blue-600" : "border-gray-200"
                } hover:border-blue-400 transition`}
              >
                <img
                  src={requiredProduct.image_url}
                  alt="Main view"
                  className="w-full h-20 object-contain"
                />
              </button>
              {/* Additional images */}
              {requiredProduct.product_images?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index + 1)}
                  className={`rounded-lg overflow-hidden border-2 bg-gray-100 ${
                    selectedImage === index + 1
                      ? "border-blue-600"
                      : "border-gray-200"
                  } hover:border-blue-400 transition`}
                >
                  <img
                    src={item.url}
                    alt={`View ${index + 2}`}
                    className="w-full h-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {requiredProduct.product_name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(requiredProduct.product_rating)
                        ? "fill-current"
                        : ""
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({requiredProduct.product_rating} rating)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold text-blue-600">
                ₹{discountedPrice.toFixed(2)}
              </span>
              {discountPercent > 0 && (
                <>
                  <span className="ml-3 text-xl text-gray-500 line-through">
                    ₹{originalPrice.toFixed(2)}
                  </span>
                  <span className="ml-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {discountPercent}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">
              {requiredProduct.product_description}
            </p>

            {/* Color Selection */}
            {requiredProduct.product_colour &&
              requiredProduct.product_colour !== "N/A" && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Color
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setSelectedColor(requiredProduct.product_colour)
                      }
                      className="px-4 py-2 border-2 border-blue-600 bg-blue-50 rounded-lg"
                    >
                      {requiredProduct.product_colour}
                    </button>
                  </div>
                </div>
              )}

            {/* Size Selection */}
            {requiredProduct.product_size_available?.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Size
                </label>
                <div className="flex gap-3">
                  {requiredProduct.product_size_available.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg ${
                        selectedSize === size
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200"
                      } hover:border-blue-400 transition`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 h-10 border border-gray-300 rounded-lg flex items-center justify-center font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(
                      Math.min(requiredProduct.product_quantity, quantity + 1)
                    )
                  }
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {requiredProduct.product_quantity} items available
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={addToCart}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Tags */}
            {requiredProduct.product_tags?.length > 0 && (
              <div className="border-t pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {requiredProduct.product_tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-xs text-gray-600">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-xs text-gray-600">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-xs text-gray-600">30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h4>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(Math.floor(item.rating))}
                      {"☆".repeat(5 - Math.floor(item.rating))}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600">
                    ${item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );

  return <ProductPage />;
}

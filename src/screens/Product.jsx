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

export default function ProductPages() {
  const [currentPage, setCurrentPage] = useState("product");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      size: "M",
      color: "Black",
    },
  ]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = {
    name: "Premium Wireless Headphones",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 328,
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding for all-day wear.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop",
    ],
    features: [
      "Active Noise Cancellation",
      "30-Hour Battery Life",
      "Premium Audio Quality",
      "Comfortable Fit",
      "Bluetooth 5.0",
      "Built-in Microphone",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue", "Red"],
  };

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
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
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

  // const Header = () => (
  //   <header className="bg-white shadow-sm sticky top-0 z-50">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center justify-between h-16">
  //         <div className="flex items-center">
  //           <h1
  //             className="text-2xl font-bold text-blue-600 cursor-pointer"
  //             onClick={() => setCurrentPage("product")}
  //           >
  //             ShopHub
  //           </h1>
  //         </div>
  //         <nav className="hidden md:flex space-x-8">
  //           <Link
  //             to="/"
  //             className="text-gray-700 hover:text-blue-600 transition"
  //           >
  //             Home
  //           </Link>
  //           <a
  //             href="#"
  //             className="text-gray-700 hover:text-blue-600 transition"
  //           >
  //             Shop
  //           </a>
  //           <a
  //             href="#"
  //             className="text-gray-700 hover:text-blue-600 transition"
  //           >
  //             Categories
  //           </a>
  //           <a
  //             href="#"
  //             className="text-gray-700 hover:text-blue-600 transition"
  //           >
  //             Deals
  //           </a>
  //           <a
  //             href="#"
  //             className="text-gray-700 hover:text-blue-600 transition"
  //           >
  //             Contact
  //           </a>
  //         </nav>
  //         <div className="flex items-center space-x-4">
  //           <button className="hidden md:block text-gray-700 hover:text-blue-600 transition">
  //             <Search className="w-5 h-5" />
  //           </button>
  //           <button className="text-gray-700 hover:text-blue-600 transition">
  //             <Heart className="w-5 h-5" />
  //           </button>
  //           <button className="text-gray-700 hover:text-blue-600 transition">
  //             <User className="w-5 h-5" />
  //           </button>
  //           <button
  //             className="relative text-gray-700 hover:text-blue-600 transition"
  //             onClick={() => setCurrentPage("checkout")}
  //           >
  //             <ShoppingCart className="w-5 h-5" />
  //             {cartItems.length > 0 && (
  //               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
  //                 {cartItems.length}
  //               </span>
  //             )}
  //           </button>
  //           <button
  //             className="md:hidden text-gray-700"
  //             onClick={() => setMenuOpen(!menuOpen)}
  //           >
  //             {menuOpen ? (
  //               <X className="w-6 h-6" />
  //             ) : (
  //               <Menu className="w-6 h-6" />
  //             )}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     {menuOpen && (
  //       <div className="md:hidden bg-white border-t">
  //         <nav className="px-4 py-4 space-y-3">
  //           <Link to="/" className="block text-gray-700 hover:text-blue-600">
  //             Home
  //           </Link>
  //           <a href="#" className="block text-gray-700 hover:text-blue-600">
  //             Shop
  //           </a>
  //           <a href="#" className="block text-gray-700 hover:text-blue-600">
  //             Categories
  //           </a>
  //           <a href="#" className="block text-gray-700 hover:text-blue-600">
  //             Deals
  //           </a>
  //           <a href="#" className="block text-gray-700 hover:text-blue-600">
  //             Contact
  //           </a>
  //         </nav>
  //       </div>
  //     )}
  //   </header>
  // );

  const ProductPage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-blue-600">
            Electronics
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Headphones</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-600"
                      : "border-gray-200"
                  } hover:border-blue-400 transition`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "fill-current" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold text-blue-600">
                ${product.price}
              </span>
              <span className="ml-3 text-xl text-gray-500 line-through">
                ${product.originalPrice}
              </span>
              <span className="ml-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {Math.round((1 - product.price / product.originalPrice) * 100)}%
                OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Color
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg ${
                      selectedColor === color
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200"
                    } hover:border-blue-400 transition`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Size
              </label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
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
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
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

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
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

  // const CheckoutPage = () => (
  //   <div className="min-h-screen bg-gray-50">
  //    <Header/>

  //     {/* Breadcrumb */}
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
  //       <div className="flex items-center text-sm text-gray-600">
  //         <button
  //           onClick={() => setCurrentPage("product")}
  //           className="hover:text-blue-600 flex items-center"
  //         >
  //           <ChevronLeft className="w-4 h-4" />
  //           Continue Shopping
  //         </button>
  //       </div>
  //     </div>

  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  //       <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

  //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  //         {/* Left Column - Forms */}
  //         <div className="lg:col-span-2 space-y-6">
  //           {/* Shipping Information */}
  //           <div className="bg-white rounded-lg shadow-lg p-6">
  //             <h2 className="text-xl font-bold text-gray-900 mb-4">
  //               Shipping Information
  //             </h2>
  //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //               <div>
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   First Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                 />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   Last Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                 />
  //               </div>
  //               <div className="md:col-span-2">
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   Email
  //                 </label>
  //                 <input
  //                   type="email"
  //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                 />
  //               </div>
  //               <div className="md:col-span-2">
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   Address
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                 />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   City
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                 />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   Postal Code
  //                 </label>
  //                 <input
  //                   type="text"
  //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                 />
  //               </div>
  //               <div className="md:col-span-2">
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   Country
  //                 </label>
  //                 <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  //                   <option>United States</option>
  //                   <option>Canada</option>
  //                   <option>United Kingdom</option>
  //                   <option>Australia</option>
  //                 </select>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Payment Information */}
  //           <div className="bg-white rounded-lg shadow-lg p-6">
  //             <h2 className="text-xl font-bold text-gray-900 mb-4">
  //               Payment Information
  //             </h2>
  //             <div className="space-y-4">
  //               <div>
  //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                   Card Number
  //                 </label>
  //                 <input
  //                   type="text"
  //                   placeholder="1234 5678 9012 3456"
  //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                 />
  //               </div>
  //               <div className="grid grid-cols-2 gap-4">
  //                 <div>
  //                   <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                     Expiry Date
  //                   </label>
  //                   <input
  //                     type="text"
  //                     placeholder="MM/YY"
  //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                   />
  //                 </div>
  //                 <div>
  //                   <label className="block text-sm font-semibold text-gray-700 mb-2">
  //                     CVV
  //                   </label>
  //                   <input
  //                     type="text"
  //                     placeholder="123"
  //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Right Column - Order Summary */}
  //         <div className="lg:col-span-1">
  //           <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
  //             <h2 className="text-xl font-bold text-gray-900 mb-4">
  //               Order Summary
  //             </h2>

  //             {/* Cart Items */}
  //             <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
  //               {cartItems.map((item) => (
  //                 <div key={item.id} className="flex gap-4 border-b pb-4">
  //                   <img
  //                     src={item.image}
  //                     alt={item.name}
  //                     className="w-16 h-16 object-cover rounded"
  //                   />
  //                   <div className="flex-1">
  //                     <h4 className="font-semibold text-sm text-gray-900">
  //                       {item.name}
  //                     </h4>
  //                     <p className="text-xs text-gray-600">
  //                       {item.color} / {item.size}
  //                     </p>
  //                     <div className="flex items-center gap-2 mt-2">
  //                       <button
  //                         onClick={() =>
  //                           updateQuantity(item.id, item.quantity - 1)
  //                         }
  //                         className="w-6 h-6 border rounded hover:bg-gray-100"
  //                       >
  //                         <Minus className="w-3 h-3 mx-auto" />
  //                       </button>
  //                       <span className="text-sm font-semibold">
  //                         {item.quantity}
  //                       </span>
  //                       <button
  //                         onClick={() =>
  //                           updateQuantity(item.id, item.quantity + 1)
  //                         }
  //                         className="w-6 h-6 border rounded hover:bg-gray-100"
  //                       >
  //                         <Plus className="w-3 h-3 mx-auto" />
  //                       </button>
  //                       <button
  //                         onClick={() => removeItem(item.id)}
  //                         className="ml-auto text-red-500 hover:text-red-700"
  //                       >
  //                         <Trash2 className="w-4 h-4" />
  //                       </button>
  //                     </div>
  //                   </div>
  //                   <div className="text-right">
  //                     <p className="font-semibold text-gray-900">
  //                       ${(item.price * item.quantity).toFixed(2)}
  //                     </p>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>

  //             {/* Price Breakdown */}
  //             <div className="space-y-2 border-t pt-4">
  //               <div className="flex justify-between text-gray-700">
  //                 <span>Subtotal</span>
  //                 <span>${subtotal.toFixed(2)}</span>
  //               </div>
  //               <div className="flex justify-between text-gray-700">
  //                 <span>Shipping</span>
  //                 <span>${shipping.toFixed(2)}</span>
  //               </div>
  //               <div className="flex justify-between text-gray-700">
  //                 <span>Tax</span>
  //                 <span>${tax.toFixed(2)}</span>
  //               </div>
  //               <div className="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t">
  //                 <span>Total</span>
  //                 <span>${total.toFixed(2)}</span>
  //               </div>
  //             </div>

  //             {/* Place Order Button */}
  //             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
  //               Place Order
  //             </button>

  //             {/* Trust Badges */}
  //             <div className="flex justify-center gap-4 mt-6 pt-6 border-t text-xs text-gray-600">
  //               <div className="flex items-center">
  //                 <Shield className="w-4 h-4 mr-1" />
  //                 Secure Payment
  //               </div>
  //               <div className="flex items-center">
  //                 <Truck className="w-4 h-4 mr-1" />
  //                 Free Shipping
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return currentPage === "product" ? <ProductPage /> : <CheckoutPage />;
  return <ProductPage />;
}

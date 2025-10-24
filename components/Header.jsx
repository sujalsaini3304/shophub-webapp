import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Heart,
  User,
  ChevronRight,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = React.useState(0);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ShopHub</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Shop
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Categories
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Deals
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </Link>
              <Link
                to="/login"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login", { replace: true });
                }}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {localStorage.getItem("isLogin") === "true"
                  ? "Logout"
                  : "Login"}
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-700 hover:text-blue-600 transition">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-blue-600 transition">
                <Heart className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  navigate("/profile");
                }}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                <User className="w-5 h-5" />
              </button>
              <button
               onClick={() => {
                  navigate("/cart");
                }}
              className="relative text-gray-700 hover:text-blue-600 transition">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="#" className="block text-gray-700 hover:text-blue-600">
                Shop
              </Link>
              <Link to="#" className="block text-gray-700 hover:text-blue-600">
                Categories
              </Link>
              <Link to="#" className="block text-gray-700 hover:text-blue-600">
                Deals
              </Link>
              <Link to="#" className="block text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link
                to="/login"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login", { replace: true });
                }}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {localStorage.getItem("isLogin") === "true"
                  ? "Logout"
                  : "Login"}
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

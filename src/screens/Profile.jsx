import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Heart,
  User,
  Camera,
  Package,
  MapPin,
  CreditCard,
  Settings,
  Bell,
  Lock,
  LogOut,
  Edit2,
  Save,
  ChevronRight,
} from "lucide-react";
import useStore from "../../store";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const { username, user_email } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile"); // profile, orders, addresses, payment, settings
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: username,
    email: user_email,
    phone: "",
    bio: "Shopping enthusiast and tech lover",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  });

  const orders = [
    {
      id: "#ORD-2024-001",
      date: "Oct 15, 2025",
      status: "Delivered",
      total: 159.98,
      items: 2,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    },
    {
      id: "#ORD-2024-002",
      date: "Oct 18, 2025",
      status: "In Transit",
      total: 89.99,
      items: 1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
    },
    {
      id: "#ORD-2024-003",
      date: "Oct 20, 2025",
      status: "Processing",
      total: 249.97,
      items: 3,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
    },
    {
      id: "#ORD-2024-004",
      date: "Oct 21, 2025",
      status: "Delivered",
      total: 79.99,
      items: 1,
      image:
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=100&h=100&fit=crop",
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      address: "456 Business Ave",
      city: "New York",
      state: "NY",
      zip: "10002",
      country: "United States",
      isDefault: false,
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "09/25",
      isDefault: false,
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Smart Watch Pro",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
      inStock: true,
    },
    {
      id: 2,
      name: "Laptop Bag",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
      inStock: true,
    },
    {
      id: 3,
      name: "Wireless Mouse",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop",
      inStock: false,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAccountDeletion = () => {};

  // const Header = () => (
  //   <header className="bg-white shadow-sm sticky top-0 z-50">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center justify-between h-16">
  //         <div className="flex items-center">
  //           <h1 className="text-2xl font-bold text-blue-600">ShopHub</h1>
  //         </div>
  //         <nav className="hidden md:flex space-x-8">
  //           <a
  //             href="#"
  //             className="text-gray-700 hover:text-blue-600 transition"
  //           >
  //             Home
  //           </a>
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
  //           <button className="text-blue-600">
  //             <User className="w-5 h-5" />
  //           </button>
  //           <button className="relative text-gray-700 hover:text-blue-600 transition">
  //             <ShoppingCart className="w-5 h-5" />
  //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
  //               3
  //             </span>
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
  //           <a href="#" className="block text-gray-700 hover:text-blue-600">
  //             Home
  //           </a>
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

  const Sidebar = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <img
            src={profileData.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mt-4">
          {profileData.name}
        </h2>
        <p className="text-gray-600 text-sm">{profileData.email}</p>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => setActiveTab("profile")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "profile"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="font-semibold">Profile</span>
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "orders"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Package className="w-5 h-5" />
          <span className="font-semibold">My Orders</span>
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "wishlist"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Heart className="w-5 h-5" />
          <span className="font-semibold">Wishlist</span>
        </button>
        <button
          onClick={() => setActiveTab("addresses")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "addresses"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">Addresses</span>
        </button>
        <button
          onClick={() => setActiveTab("payment")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "payment"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span className="font-semibold">Payment Methods</span>
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeTab === "settings"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span className="font-semibold">Settings</span>
        </button>
      </nav>

      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition mt-6">
        <LogOut className="w-5 h-5" />
        <span className="font-semibold">Logout</span>
      </button>
    </div>
  );

  const ProfileTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Personal Information
        </h2>
        <button
          onClick={() => setEditMode(!editMode)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {editMode ? (
            <Save className="w-4 h-4" />
          ) : (
            <Edit2 className="w-4 h-4" />
          )}
          {editMode ? "Save" : "Edit"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={profileData.name}
            onChange={(e) =>
              setProfileData({ ...profileData, name: e.target.value })
            }
            disabled={!editMode}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${
              editMode ? "focus:ring-2 focus:ring-blue-500" : "bg-gray-50"
            }`}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) =>
              setProfileData({ ...profileData, email: e.target.value })
            }
            disabled={!editMode}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${
              editMode ? "focus:ring-2 focus:ring-blue-500" : "bg-gray-50"
            }`}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={profileData.phone}
            onChange={(e) =>
              setProfileData({ ...profileData, phone: e.target.value })
            }
            disabled={!editMode}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${
              editMode ? "focus:ring-2 focus:ring-blue-500" : "bg-gray-50"
            }`}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            disabled={!editMode}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${
              editMode ? "focus:ring-2 focus:ring-blue-500" : "bg-gray-50"
            }`}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            value={profileData.bio}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
            disabled={!editMode}
            rows="3"
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${
              editMode ? "focus:ring-2 focus:ring-blue-500" : "bg-gray-50"
            }`}
          />
        </div>
      </div>

      <div className="mt-8 pt-8 border-t">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Account Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-green-600">$1,249</p>
            <p className="text-sm text-gray-600">Total Spent</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">8</p>
            <p className="text-sm text-gray-600">Wishlist Items</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-orange-600">5</p>
            <p className="text-sm text-gray-600">Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );

  const OrdersTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <img
                src={order.image}
                alt="Order"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{order.id}</h3>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{order.items} items</p>
                    <p className="text-lg font-bold text-blue-600">
                      ${order.total}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const WishlistTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-xl font-bold text-blue-600 mb-3">
                ${item.price}
              </p>
              <button
                disabled={!item.inStock}
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  item.inStock
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {item.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AddressesTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add New Address
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border rounded-lg p-4 hover:shadow-md transition relative"
          >
            {address.isDefault && (
              <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                Default
              </span>
            )}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{address.type}</h3>
                <p className="text-gray-700">{address.name}</p>
                <p className="text-gray-600 text-sm">{address.address}</p>
                <p className="text-gray-600 text-sm">
                  {address.city}, {address.state} {address.zip}
                </p>
                <p className="text-gray-600 text-sm">{address.country}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                Edit
              </button>
              <button className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PaymentTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add New Card
        </button>
      </div>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="border rounded-lg p-4 hover:shadow-md transition relative"
          >
            {method.isDefault && (
              <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                Default
              </span>
            )}
            <div className="flex items-center gap-4">
              <div className="w-16 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">
                  {method.type} •••• {method.last4}
                </h3>
                <p className="text-sm text-gray-600">Expires {method.expiry}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                  Edit
                </button>
                <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SettingsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Danger Zone</h2>
        <div className="space-y-4">
          <button
            onClick={handleAccountDeletion}
            className="w-full flex items-center justify-between p-4 border-2 border-red-200 rounded-lg hover:bg-red-50 transition"
          >
            <div className="text-left">
              <p className="font-semibold text-red-600">Delete Account</p>
              <p className="text-sm text-gray-600">
                Permanently delete your account and all data
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
      case "orders":
        return <OrdersTab />;
      case "wishlist":
        return <WishlistTab />;
      case "addresses":
        return <AddressesTab />;
      case "payment":
        return <PaymentTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">My Account</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden bg-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={profileData.avatar}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {/* {profileData.name} */}
                  {username}
                </h2>
                <p className="text-sm text-gray-600">
                  {/* {profileData.email} */}
                  {user_email}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`p-3 rounded-lg text-center ${
                  activeTab === "profile"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <User className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-semibold">Profile</span>
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`p-3 rounded-lg text-center ${
                  activeTab === "orders"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <Package className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-semibold">Orders</span>
              </button>
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`p-3 rounded-lg text-center ${
                  activeTab === "wishlist"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <Heart className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-semibold">Wishlist</span>
              </button>
              <button
                onClick={() => setActiveTab("addresses")}
                className={`p-3 rounded-lg text-center ${
                  activeTab === "addresses"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <MapPin className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-semibold">Address</span>
              </button>
              <button
                onClick={() => setActiveTab("payment")}
                className={`p-3 rounded-lg text-center ${
                  activeTab === "payment"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <CreditCard className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-semibold">Payment</span>
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`p-3 rounded-lg text-center ${
                  activeTab === "settings"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <Settings className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-semibold">Settings</span>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">{renderContent()}</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 mt-16">
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
    </div>
  );
}

// Code - 2
// import React, { useState } from 'react';
// import { ShoppingCart, Menu, X, Search, Heart, User, Camera, Package, MapPin, CreditCard, Settings, Bell, Lock, LogOut, Edit2, Save, ChevronRight } from 'lucide-react';

// export default function UserProfilePage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('profile'); // profile, orders, addresses, payment, settings
//   const [editMode, setEditMode] = useState(false);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+1 (555) 123-4567',
//     bio: 'Shopping enthusiast and tech lover',
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
//   });
//   const [newAddress, setNewAddress] = useState({
//     type: 'Home',
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: 'United States',
//     isDefault: false
//   });

//   const orders = [
//     {
//       id: '#ORD-2024-001',
//       date: 'Oct 15, 2025',
//       status: 'Delivered',
//       total: 159.98,
//       items: 2,
//       image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop'
//     },
//     {
//       id: '#ORD-2024-002',
//       date: 'Oct 18, 2025',
//       status: 'In Transit',
//       total: 89.99,
//       items: 1,
//       image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop'
//     },
//     {
//       id: '#ORD-2024-003',
//       date: 'Oct 20, 2025',
//       status: 'Processing',
//       total: 249.97,
//       items: 3,
//       image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop'
//     },
//     {
//       id: '#ORD-2024-004',
//       date: 'Oct 21, 2025',
//       status: 'Delivered',
//       total: 79.99,
//       items: 1,
//       image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=100&h=100&fit=crop'
//     }
//   ];

//   const addresses = [
//     {
//       id: 1,
//       type: 'Home',
//       name: 'John Doe',
//       address: '123 Main Street',
//       city: 'New York',
//       state: 'NY',
//       zip: '10001',
//       country: 'United States',
//       isDefault: true
//     },
//     {
//       id: 2,
//       type: 'Work',
//       name: 'John Doe',
//       address: '456 Business Ave',
//       city: 'New York',
//       state: 'NY',
//       zip: '10002',
//       country: 'United States',
//       isDefault: false
//     }
//   ];

//   const [addressList, setAddressList] = useState(addresses);

//   const paymentMethods = [
//     {
//       id: 1,
//       type: 'Visa',
//       last4: '4242',
//       expiry: '12/26',
//       isDefault: true
//     },
//     {
//       id: 2,
//       type: 'Mastercard',
//       last4: '8888',
//       expiry: '09/25',
//       isDefault: false
//     }
//   ];

//   const wishlistItems = [
//     { id: 1, name: 'Smart Watch Pro', price: 299.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop', inStock: true },
//     { id: 2, name: 'Laptop Bag', price: 59.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop', inStock: true },
//     { id: 3, name: 'Wireless Mouse', price: 39.99, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop', inStock: false }
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Delivered': return 'bg-green-100 text-green-800';
//       case 'In Transit': return 'bg-blue-100 text-blue-800';
//       case 'Processing': return 'bg-yellow-100 text-yellow-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const handleAddAddress = () => {
//     if (!newAddress.name || !newAddress.address || !newAddress.city || !newAddress.state || !newAddress.zip) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     const addressToAdd = {
//       ...newAddress,
//       id: Date.now()
//     };

//     setAddressList([...addressList, addressToAdd]);
//     setShowAddressModal(false);
//     setNewAddress({
//       type: 'Home',
//       name: '',
//       address: '',
//       city: '',
//       state: '',
//       zip: '',
//       country: 'United States',
//       isDefault: false
//     });
//   };

//   const handleDeleteAddress = (id) => {
//     setAddressList(addressList.filter(addr => addr.id !== id));
//   };

//   const handleSetDefaultAddress = (id) => {
//     setAddressList(addressList.map(addr => ({
//       ...addr,
//       isDefault: addr.id === id
//     })));
//   };

//   const Header = () => (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold text-blue-600">ShopHub</h1>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition">Shop</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition">Categories</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition">Deals</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <button className="hidden md:block text-gray-700 hover:text-blue-600 transition">
//               <Search className="w-5 h-5" />
//             </button>
//             <button className="text-gray-700 hover:text-blue-600 transition">
//               <Heart className="w-5 h-5" />
//             </button>
//             <button className="text-blue-600">
//               <User className="w-5 h-5" />
//             </button>
//             <button className="relative text-gray-700 hover:text-blue-600 transition">
//               <ShoppingCart className="w-5 h-5" />
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <button
//               className="md:hidden text-gray-700"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <nav className="px-4 py-4 space-y-3">
//             <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-600">Shop</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-600">Categories</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-600">Deals</a>
//             <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );

//   const Sidebar = () => (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="text-center mb-6">
//         <div className="relative inline-block">
//           <img
//             src={profileData.avatar}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
//           />
//           <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
//             <Camera className="w-4 h-4" />
//           </button>
//         </div>
//         <h2 className="text-xl font-bold text-gray-900 mt-4">{profileData.name}</h2>
//         <p className="text-gray-600 text-sm">{profileData.email}</p>
//       </div>

//       <nav className="space-y-2">
//         <button
//           onClick={() => setActiveTab('profile')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
//           }`}
//         >
//           <User className="w-5 h-5" />
//           <span className="font-semibold">Profile</span>
//         </button>
//         <button
//           onClick={() => setActiveTab('orders')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
//           }`}
//         >
//           <Package className="w-5 h-5" />
//           <span className="font-semibold">My Orders</span>
//         </button>
//         <button
//           onClick={() => setActiveTab('wishlist')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             activeTab === 'wishlist' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
//           }`}
//         >
//           <Heart className="w-5 h-5" />
//           <span className="font-semibold">Wishlist</span>
//         </button>
//         <button
//           onClick={() => setActiveTab('addresses')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             activeTab === 'addresses' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
//           }`}
//         >
//           <MapPin className="w-5 h-5" />
//           <span className="font-semibold">Addresses</span>
//         </button>
//         <button
//           onClick={() => setActiveTab('payment')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             activeTab === 'payment' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
//           }`}
//         >
//           <CreditCard className="w-5 h-5" />
//           <span className="font-semibold">Payment Methods</span>
//         </button>
//         <button
//           onClick={() => setActiveTab('settings')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
//           }`}
//         >
//           <Settings className="w-5 h-5" />
//           <span className="font-semibold">Settings</span>
//         </button>
//       </nav>

//       <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition mt-6">
//         <LogOut className="w-5 h-5" />
//         <span className="font-semibold">Logout</span>
//       </button>
//     </div>
//   );

//   const ProfileTab = () => (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
//         <button
//           onClick={() => setEditMode(!editMode)}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           {editMode ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
//           {editMode ? 'Save' : 'Edit'}
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
//           <input
//             type="text"
//             value={profileData.name}
//             onChange={(e) => setProfileData({...profileData, name: e.target.value})}
//             disabled={!editMode}
//             className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${editMode ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'}`}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             value={profileData.email}
//             onChange={(e) => setProfileData({...profileData, email: e.target.value})}
//             disabled={!editMode}
//             className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${editMode ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'}`}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
//           <input
//             type="tel"
//             value={profileData.phone}
//             onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
//             disabled={!editMode}
//             className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${editMode ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'}`}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
//           <input
//             type="date"
//             disabled={!editMode}
//             className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${editMode ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'}`}
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
//           <textarea
//             value={profileData.bio}
//             onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
//             disabled={!editMode}
//             rows="3"
//             className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${editMode ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'}`}
//           />
//         </div>
//       </div>

//       <div className="mt-8 pt-8 border-t">
//         <h3 className="text-lg font-bold text-gray-900 mb-4">Account Statistics</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="bg-blue-50 rounded-lg p-4 text-center">
//             <p className="text-3xl font-bold text-blue-600">12</p>
//             <p className="text-sm text-gray-600">Total Orders</p>
//           </div>
//           <div className="bg-green-50 rounded-lg p-4 text-center">
//             <p className="text-3xl font-bold text-green-600">$1,249</p>
//             <p className="text-sm text-gray-600">Total Spent</p>
//           </div>
//           <div className="bg-purple-50 rounded-lg p-4 text-center">
//             <p className="text-3xl font-bold text-purple-600">8</p>
//             <p className="text-sm text-gray-600">Wishlist Items</p>
//           </div>
//           <div className="bg-orange-50 rounded-lg p-4 text-center">
//             <p className="text-3xl font-bold text-orange-600">5</p>
//             <p className="text-sm text-gray-600">Reviews</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const OrdersTab = () => (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
//       <div className="space-y-4">
//         {orders.map((order) => (
//           <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition">
//             <div className="flex items-start gap-4">
//               <img src={order.image} alt="Order" className="w-20 h-20 object-cover rounded-lg" />
//               <div className="flex-1">
//                 <div className="flex items-start justify-between mb-2">
//                   <div>
//                     <h3 className="font-bold text-gray-900">{order.id}</h3>
//                     <p className="text-sm text-gray-600">{order.date}</p>
//                   </div>
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
//                     {order.status}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600">{order.items} items</p>
//                     <p className="text-lg font-bold text-blue-600">${order.total}</p>
//                   </div>
//                   <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
//                     View Details
//                     <ChevronRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const WishlistTab = () => (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {wishlistItems.map((item) => (
//           <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
//             <div className="relative">
//               <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//               <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition">
//                 <Heart className="w-5 h-5 text-red-500 fill-current" />
//               </button>
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
//               <p className="text-xl font-bold text-blue-600 mb-3">${item.price}</p>
//               <button
//                 disabled={!item.inStock}
//                 className={`w-full py-2 rounded-lg font-semibold transition ${
//                   item.inStock
//                     ? 'bg-blue-600 text-white hover:bg-blue-700'
//                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 }`}
//               >
//                 {item.inStock ? 'Add to Cart' : 'Out of Stock'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const AddressesTab = () => (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
//         <button
//           onClick={() => setShowAddressModal(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           Add New Address
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {addressList.map((address) => (
//           <div key={address.id} className="border rounded-lg p-4 hover:shadow-md transition relative">
//             {address.isDefault && (
//               <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
//                 Default
//               </span>
//             )}
//             <div className="flex items-start gap-3 mb-4">
//               <MapPin className="w-5 h-5 text-blue-600 mt-1" />
//               <div>
//                 <h3 className="font-bold text-gray-900 mb-1">{address.type}</h3>
//                 <p className="text-gray-700">{address.name}</p>
//                 <p className="text-gray-600 text-sm">{address.address}</p>
//                 <p className="text-gray-600 text-sm">{address.city}, {address.state} {address.zip}</p>
//                 <p className="text-gray-600 text-sm">{address.country}</p>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               {!address.isDefault && (
//                 <button
//                   onClick={() => handleSetDefaultAddress(address.id)}
//                   className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm"
//                 >
//                   Set Default
//                 </button>
//               )}
//               <button
//                 onClick={() => handleDeleteAddress(address.id)}
//                 className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Address Modal */}
//       {showAddressModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900">Add New Address</h3>
//                 <button
//                   onClick={() => setShowAddressModal(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Address Type</label>
//                   <div className="flex gap-3">
//                     {['Home', 'Work', 'Other'].map((type) => (
//                       <button
//                         key={type}
//                         onClick={() => setNewAddress({...newAddress, type})}
//                         className={`px-6 py-2 border-2 rounded-lg font-semibold transition ${
//                           newAddress.type === type
//                             ? 'border-blue-600 bg-blue-50 text-blue-600'
//                             : 'border-gray-200 text-gray-700 hover:border-blue-300'
//                         }`}
//                       >
//                         {type}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     value={newAddress.name}
//                     onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter full name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
//                   <input
//                     type="text"
//                     value={newAddress.address}
//                     onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter street address"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
//                     <input
//                       type="text"
//                       value={newAddress.city}
//                       onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="City"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
//                     <input
//                       type="text"
//                       value={newAddress.state}
//                       onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="State"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code *</label>
//                     <input
//                       type="text"
//                       value={newAddress.zip}
//                       onChange={(e) => setNewAddress({...newAddress, zip: e.target.value})}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="ZIP Code"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
//                     <select
//                       value={newAddress.country}
//                       onChange={(e) => setNewAddress({...newAddress, country: e.target.value})}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option>United States</option>
//                       <option>Canada</option>
//                       <option>United Kingdom</option>
//                       <option>Australia</option>
//                       <option>India</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="setDefault"
//                     checked={newAddress.isDefault}
//                     onChange={(e) => setNewAddress({...newAddress, isDefault: e.target.checked})}
//                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <label htmlFor="setDefault" className="ml-2 text-sm text-gray-700">
//                     Set as default address
//                   </label>
//                 </div>
//               </div>

//               <div className="flex gap-3 mt-6">
//                 <button
//                   onClick={() => setShowAddressModal(false)}
//                   className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddAddress}
//                   className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
//                 >
//                   Save Address
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const PaymentTab = () => (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//           Add New Card
//         </button>
//       </div>
//       <div className="space-y-4">
//         {paymentMethods.map((method) => (
//           <div key={method.id} className="border rounded-lg p-4 hover:shadow-md transition relative">
//             {method.isDefault && (
//               <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
//                 Default
//               </span>
//             )}
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
//                 <CreditCard className="w-8 h-8 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h3 className="font-bold text-gray-900">{method.type} •••• {method.last4}</h3>
//                 <p className="text-sm text-gray-600">Expires {method.expiry}</p>
//               </div>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
//                   Edit
//                 </button>
//                 <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const SettingsTab = () => (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-xl font-bold text-gray-900 mb-6">Danger Zone</h2>
//         <div className="space-y-4">
//           <button className="w-full flex items-center justify-between p-4 border-2 border-red-200 rounded-lg hover:bg-red-50 transition">
//             <div className="text-left">
//               <p className="font-semibold text-red-600">Delete Account</p>
//               <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
//             </div>
//             <ChevronRight className="w-5 h-5 text-red-400" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'profile': return <ProfileTab />;
//       case 'orders': return <OrdersTab />;
//       case 'wishlist': return <WishlistTab />;
//       case 'addresses': return <AddressesTab />;
//       case 'payment': return <PaymentTab />;
//       case 'settings': return <SettingsTab />;
//       default: return <ProfileTab />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       {/* Breadcrumb */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex items-center text-sm text-gray-600">
//           <a href="#" className="hover:text-blue-600">Home</a>
//           <span className="mx-2">/</span>
//           <span className="text-gray-900">My Account</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar - Hidden on mobile, shown on desktop */}
//           <div className="hidden lg:block">
//             <Sidebar />
//           </div>

//           {/* Mobile Navigation */}
//           <div className="lg:hidden bg-white rounded-lg shadow-lg p-4 mb-6">
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={profileData.avatar}
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
//               />
//               <div>
//                 <h2 className="text-lg font-bold text-gray-900">{profileData.name}</h2>
//                 <p className="text-sm text-gray-600">{profileData.email}</p>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 gap-2">
//               <button
//                 onClick={() => setActiveTab('profile')}
//                 className={`p-3 rounded-lg text-center ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-700'}`}
//               >
//                 <User className="w-5 h-5 mx-auto mb-1" />
//                 <span className="text-xs font-semibold">Profile</span>
//               </button>
//               <button
//                 onClick={() => setActiveTab('orders')}
//                 className={`p-3 rounded-lg text-center ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-700'}`}
//               >
//                 <Package className="w-5 h-5 mx-auto mb-1" />
//                 <span className="text-xs font-semibold">Orders</span>
//               </button>
//               <button
//                 onClick={() => setActiveTab('wishlist')}
//                 className={`p-3 rounded-lg text-center ${activeTab === 'wishlist' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-700'}`}
//               >
//                 <Heart className="w-5 h-5 mx-auto mb-1" />
//                 <span className="text-xs font-semibold">Wishlist</span>
//               </button>
//               <button
//                 onClick={() => setActiveTab('addresses')}
//                 className={`p-3 rounded-lg text-center ${activeTab === 'addresses' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-700'}`}
//               >
//                 <MapPin className="w-5 h-5 mx-auto mb-1" />
//                 <span className="text-xs font-semibold">Address</span>
//               </button>
//               <button
//                 onClick={() => setActiveTab('payment')}
//                 className={`p-3 rounded-lg text-center ${activeTab === 'payment' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-700'}`}
//               >
//                 <CreditCard className="w-5 h-5 mx-auto mb-1" />
//                 <span className="text-xs font-semibold">Payment</span>
//               </button>
//               <button
//                 onClick={() => setActiveTab('settings')}
//                 className={`p-3 rounded-lg text-center ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-700'}`}
//               >
//                 <Settings className="w-5 h-5 mx-auto mb-1" />
//                 <span className="text-xs font-semibold">Settings</span>
//               </button>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="lg:col-span-3">
//             {renderContent()}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-300 py-12 mt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h4 className="text-white text-lg font-semibold mb-4">ShopHub</h4>
//               <p className="text-sm">Your one-stop shop for everything you need.</p>
//             </div>
//             <div>
//               <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">About Us</a></li>
//                 <li><a href="#" className="hover:text-white">Contact</a></li>
//                 <li><a href="#" className="hover:text-white">FAQ</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white text-lg font-semibold mb-4">Customer Service</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">Shipping Info</a></li>
//                 <li><a href="#" className="hover:text-white">Returns</a></li>
//                 <li><a href="#" className="hover:text-white">Track Order</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:text-white">Facebook</a>
//                 <a href="#" className="hover:text-white">Twitter</a>
//                 <a href="#" className="hover:text-white">Instagram</a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
//             <p>&copy; 2025 ShopHub. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

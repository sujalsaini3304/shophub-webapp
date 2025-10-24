import React, { useState } from 'react';
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Heart,
  User,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ArrowLeft,
  Lock,
  Truck,
  Tag,
  Gift,
  CreditCard,
  Check
} from 'lucide-react';
import Header from '../../components/Header';

export default function CartPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 79.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
      color: 'Black',
      size: 'M',
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 199.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
      color: 'Silver',
      size: 'L',
      inStock: true
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 89.99,
      quantity: 2,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
      color: 'Blue',
      size: '42',
      inStock: true
    }
  ]);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    shippingMethod: 'standard'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    paymentMethod: 'card', // card, upi, cod
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    upiId: ''
  });

  const [orderNumber, setOrderNumber] = useState('');

  const shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', price: 10.0, days: '5-7 business days' },
    { id: 'express', name: 'Express Shipping', price: 25.0, days: '2-3 business days' },
    { id: 'overnight', name: 'Overnight Shipping', price: 45.0, days: '1 business day' }
  ];

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      setDiscount(10);
      setPromoApplied(true);
    } else if (promoCode.toUpperCase() === 'SAVE20') {
      setDiscount(20);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const selectedShipping = shippingMethods.find((m) => m.id === shippingInfo.shippingMethod);
  const shippingCost = selectedShipping ? selectedShipping.price : 10.0;
  const discountAmount = (subtotal * discount) / 100;
  const tax = (subtotal - discountAmount) * 0.1;
  const total = subtotal - discountAmount + shippingCost + tax;

  const handlePlaceOrder = () => {
    const orderNum = 'ORD-' + Date.now().toString().slice(-8);
    setOrderNumber(orderNum);
    setCurrentStep(5);
  };

//   const Header = () => (
    // <header className="bg-white shadow-sm sticky top-0 z-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">ShopHub</h1>
    //       </div>
    //       <nav className="hidden md:flex space-x-8">
    //         <a href="#" className="text-gray-700 hover:text-blue-600 transition">
    //           Home
    //         </a>
    //         <a href="#" className="text-gray-700 hover:text-blue-600 transition">
    //           Shop
    //         </a>
    //         <a href="#" className="text-gray-700 hover:text-blue-600 transition">
    //           Categories
    //         </a>
    //         <a href="#" className="text-gray-700 hover:text-blue-600 transition">
    //           Deals
    //         </a>
    //         <a href="#" className="text-gray-700 hover:text-blue-600 transition">
    //           Contact
    //         </a>
    //       </nav>
    //       <div className="flex items-center space-x-4">
    //         <button className="hidden md:block text-gray-700 hover:text-blue-600 transition">
    //           <Search className="w-5 h-5" />
    //         </button>
    //         <button className="text-gray-700 hover:text-blue-600 transition">
    //           <Heart className="w-5 h-5" />
    //         </button>
    //         <button className="text-gray-700 hover:text-blue-600 transition">
    //           <User className="w-5 h-5" />
    //         </button>
    //         <button className="relative text-blue-600">
    //           <ShoppingCart className="w-5 h-5" />
    //           {cartItems.length > 0 && (
    //             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
    //               {cartItems.length}
    //             </span>
    //           )}
    //         </button>
    //         <button
    //           className="md:hidden text-gray-700"
    //           onClick={() => setMenuOpen(!menuOpen)}
    //           aria-label="Toggle menu"
    //         >
    //           {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {menuOpen && (
    //     <div className="md:hidden bg-white border-t shadow-sm">
    //       <nav className="px-4 py-4 space-y-3">
    //         <a href="#" className="block text-gray-700 hover:text-blue-600">
    //           Home
    //         </a>
    //         <a href="#" className="block text-gray-700 hover:text-blue-600">
    //           Shop
    //         </a>
    //         <a href="#" className="block text-gray-700 hover:text-blue-600">
    //           Categories
    //         </a>
    //         <a href="#" className="block text-gray-700 hover:text-blue-600">
    //           Deals
    //         </a>
    //         <a href="#" className="block text-gray-700 hover:text-blue-600">
    //           Contact
    //         </a>
    //       </nav>
    //     </div>
    //   )}
    // </header>
//   );

  const ProgressBar = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        {[
          { step: 1, label: 'Cart', icon: ShoppingCart },
          { step: 2, label: 'Shipping', icon: Truck },
          { step: 3, label: 'Payment', icon: CreditCard },
          { step: 4, label: 'Review', icon: Check }
        ].map((item, index) => (
          <React.Fragment key={item.step}>
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition ${
                  currentStep >= item.step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
                aria-current={currentStep === item.step ? 'step' : undefined}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <span
                className={`mt-2 text-sm font-semibold ${
                  currentStep >= item.step ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.label}
              </span>
            </div>
            {index < 3 && (
              <div
                className={`flex-1 h-1 mx-4 transition ${
                  currentStep > item.step ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const CartStep = () => (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart ({cartItems.length} items)</h1>

      {cartItems.length === 0 ? (
        <section className="bg-white rounded-lg shadow-lg p-12 text-center">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some items to get started!</p>
          <button
            onClick={() => alert('Implement continue shopping')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Continue Shopping
          </button>
        </section>
      ) : (
        <div className="lg:flex lg:space-x-8">
          <section className="flex-1 space-y-4 lg:max-w-4xl">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col flex-1 justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Color: {item.color} | Size: {item.size}
                      </p>
                      {item.inStock ? (
                        <span className="text-sm text-green-600 font-semibold">In Stock</span>
                      ) : (
                        <span className="text-sm text-red-600 font-semibold">Out of Stock</span>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right min-w-[120px]">
                      <p className="text-2xl font-bold text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="lg:w-80 mt-8 lg:mt-0 sticky top-20 self-start bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({discount}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-700">
                <span>Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={promoApplied}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  aria-label="Promo code"
                />
              </div>
              {!promoApplied ? (
                <button
                  onClick={applyPromoCode}
                  className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
                >
                  Apply Code
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                  <Check className="w-5 h-5" />
                  Promo code applied!
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">Try: SAVE10 or SAVE20</p>
            </div>

            <div className="flex justify-between text-xl font-bold text-gray-900 mb-6 pt-4 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setCurrentStep(2)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              aria-label="Proceed to Shipping"
            >
              Proceed to Shipping <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Secure Checkout
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Free Returns
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );

  // ShippingStep, PaymentStep, ReviewStep, ConfirmationStep components...

  // Due to length constraints, I will provide concise but complete ShippingStep, PaymentStep, ReviewStep,
  // and ConfirmationStep components with similar responsive optimizations:

  const ShippingStep = () => (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Information</h1>

      <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentStep(3);
          }}
          aria-label="Shipping Information Form"
        >
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              value={shippingInfo.firstName}
              onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              id="lastName"
              type="text"
              value={shippingInfo.lastName}
              onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={shippingInfo.email}
              onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone *
            </label>
            <input
              id="phone"
              type="tel"
              value={shippingInfo.phone}
              onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              Street Address *
            </label>
            <input
              id="address"
              type="text"
              value={shippingInfo.address}
              onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
              City *
            </label>
            <input
              id="city"
              type="text"
              value={shippingInfo.city}
              onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
              State *
            </label>
            <input
              id="state"
              type="text"
              value={shippingInfo.state}
              onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
              ZIP Code *
            </label>
            <input
              id="zipCode"
              type="text"
              value={shippingInfo.zipCode}
              onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
              Country *
            </label>
            <select
              id="country"
              value={shippingInfo.country}
              onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <fieldset>
              <legend className="text-xl font-bold text-gray-900 mb-4">Shipping Method</legend>
              <div className="space-y-3">
                {shippingMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition ${
                      shippingInfo.shippingMethod === method.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value={method.id}
                        checked={shippingInfo.shippingMethod === method.id}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, shippingMethod: e.target.value })
                        }
                        className="w-4 h-4 text-blue-600"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{method.name}</p>
                        <p className="text-sm text-gray-600">{method.days}</p>
                      </div>
                    </div>
                    <span className="font-bold text-blue-600">${method.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="md:col-span-2 flex gap-4 mt-6">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Cart
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2"
            >
              Continue to Payment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );

  const PaymentStep = () => (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment Information</h1>

      <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Credit Card Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentStep(4);
          }}
          aria-label="Payment Information Form"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-semibold text-gray-700 mb-2">
                Cardholder Name *
              </label>
              <input
                id="cardName"
                type="text"
                value={paymentInfo.cardName}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Card Number *
              </label>
              <input
                id="cardNumber"
                type="text"
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  value={paymentInfo.expiryDate}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 mb-2">
                  CVV *
                </label>
                <input
                  id="cvv"
                  type="text"
                  value={paymentInfo.cvv}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                  placeholder="123"
                  maxLength="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center pt-4">
              <input
                type="checkbox"
                id="saveCard"
                checked={paymentInfo.saveCard}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, saveCard: e.target.checked })}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="saveCard" className="ml-2 text-sm text-gray-700">
                Save this card for future purchases
              </label>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Shipping
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2"
              >
                Review Order
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
        <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
        <div>
          <p className="font-semibold text-blue-900">Secure Payment</p>
          <p className="text-sm text-blue-700">Your payment information is encrypted and secure.</p>
        </div>
      </section>
    </main>
  );

  const ReviewStep = () => (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Review Your Order</h1>

      <div className="lg:flex lg:space-x-6">
        <section className="flex-1 space-y-6 lg:max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Order Items</h2>
              <button
                onClick={() => setCurrentStep(1)}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                aria-label="Edit Cart Items"
              >
                Edit
              </button>
            </div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article key={item.id} className="flex gap-4 border-b pb-4 last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Color: {item.color} | Size: {item.size}
                    </p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right min-w-[100px] font-bold text-blue-600">
                    ${ (item.price * item.quantity).toFixed(2) }
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Shipping Information</h2>
              <button
                onClick={() => setCurrentStep(2)}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                aria-label="Edit Shipping Information"
              >
                Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-900 font-semibold">
                {shippingInfo.firstName} {shippingInfo.lastName}
              </p>
              <p className="text-gray-600">{shippingInfo.address}</p>
              <p className="text-gray-600">
                {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
              </p>
              <p className="text-gray-600">{shippingInfo.country}</p>
              <p className="text-gray-600 pt-2">{shippingInfo.email}</p>
              <p className="text-gray-600">{shippingInfo.phone}</p>
              <div className="pt-4 border-t">
                <p className="text-gray-900 font-semibold">Shipping Method</p>
                <p className="text-gray-600">
                  {selectedShipping?.name} - ${selectedShipping?.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">{selectedShipping?.days}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
              <button
                onClick={() => setCurrentStep(3)}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                aria-label="Edit Payment Method"
              >
                Edit
              </button>
            </div>
            <div className="flex items-center gap-4">
              {paymentInfo.paymentMethod === 'card' && paymentInfo.cardNumber && (
                <>
                  <div className="w-16 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Credit Card ending in {paymentInfo.cardNumber.slice(-4)}
                    </p>
                    <p className="text-sm text-gray-600">{paymentInfo.cardName}</p>
                  </div>
                </>
              )}
              {paymentInfo.paymentMethod === 'upi' && (
                <>
                  <div className="w-16 h-10 bg-gradient-to-br from-orange-500 to-green-500 rounded flex items-center justify-center text-white font-bold">
                    UPI
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">UPI Payment</p>
                    <p className="text-sm text-gray-600">
                      {paymentInfo.upiId || 'UPI ID to be provided'}
                    </p>
                  </div>
                </>
              )}
              {paymentInfo.paymentMethod === 'cod' && (
                <>
                  <div className="w-16 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cash on Delivery</p>
                    <p className="text-sm text-gray-600">Pay when you receive</p>
                  </div>
                </>
              )}
              {paymentInfo.paymentMethod === 'card' && !paymentInfo.cardNumber && (
                <>
                  <div className="w-16 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Credit/Debit Card</p>
                    <p className="text-sm text-gray-600">Card details to be provided</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <aside className="lg:w-80 mt-6 lg:mt-0 sticky top-20 self-start bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({discount}%)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold text-gray-900 mb-6 pt-4 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 mb-4"
            aria-label="Place Order"
          >
            <Lock className="w-5 h-5" />
            Place Order
          </button>

          <button
            onClick={() => setCurrentStep(3)}
            className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold flex items-center justify-center gap-2"
            aria-label="Back to Payment"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Payment
          </button>
        </aside>
      </div>
    </main>
  );

  const ConfirmationStep = () => (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been confirmed.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">Order Number</p>
          <p className="text-2xl font-bold text-blue-600">{orderNumber}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Estimated Delivery</h3>
            <p className="text-sm text-gray-600">{selectedShipping?.days}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Gift className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Items Ordered</h3>
            <p className="text-sm text-gray-600">{cartItems.length} products</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Total Paid</h3>
            <p className="text-sm text-gray-600">${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-gray-900 mb-4">Order Details</h3>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.quantity}x {item.name}
                </span>
                <span className="font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-green-600 mb-2">
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-lg pt-2 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-8">
          <p>
            A confirmation email has been sent to{' '}
            <span className="font-semibold text-gray-900">{shippingInfo.email}</span>
          </p>
          <p className="mt-2">You can track your order status in your account dashboard.</p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            Track Order
          </button>
          <button
            onClick={() => setCurrentStep(1)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </main>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header/>

      <main className="grow">
        {currentStep < 5 && <ProgressBar />}

        {currentStep === 1 && <CartStep />}
        {currentStep === 2 && <ShippingStep />}
        {currentStep === 3 && <PaymentStep />}
        {currentStep === 4 && <ReviewStep />}
        {currentStep === 5 && <ConfirmationStep />}
      </main>

      <footer className="bg-gray-800 text-gray-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">ShopHub</h4>
              <p className="text-sm">Your one-stop shop for everything you need.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
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
              <h4 className="text-white text-lg font-semibold mb-4">Customer Service</h4>
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
              <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
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

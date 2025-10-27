import React, { useState } from "react";

const Test = () => {
  const [productForm, setProductForm] = useState({
    product_name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [name]: value,  // ✅ This must update the state correctly
    }));
  };

  return (
    <div className="p-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Product Name *
      </label>
      <input
        type="text"
        name="product_name"
        value={productForm.product_name}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        placeholder="Enter product name"
      />
      <p className="mt-2 text-sm text-green-600">
        ✅ Value in State: {productForm.product_name}
      </p>
    </div>
  );
};

export default Test;

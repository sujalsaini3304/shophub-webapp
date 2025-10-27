import React, { useState, useRef } from "react";
import {
  Package,
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  Eye,
  X,
  Upload,
  Tag,
  DollarSign,
  Box,
  Ruler,
  TrendingUp,
  Image as ImageIcon,
  CheckIcon,
} from "lucide-react";
import useStore from "../../store";
import axios from "axios";
import { Alert } from "@mui/material";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm">© 2024 ShopHub Admin. All rights reserved.</p>
    </div>
  </footer>
);

const ProductForm = ({
  productForm,
  handleInputChange,
  tempSize,
  setTempSize,
  addSize,
  removeSize,
  tempTag,
  setTempTag,
  addTag,
  removeTag,
  mainImagePreview,
  productImagesPreview,
  handleMainImageChange,
  handleProductImagesChange,
  removeProductImage,
  productImagesInputRef,
  isModal = false,
  handleAddProduct,
  handleEditProduct,
  resetForm,
  setShowModal,
  setActiveTab,
  isFormSubmit,
}) => {
  const { isAddProductFormSubmit, set_isAddProductFormSubmit } = useStore();
  return (
    <div className={`${!isModal ? "bg-white rounded-lg shadow-lg p-6" : ""}`}>
      <div className="space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name *
              </label>
              <input
                name="product_name"
                type="text"
                value={productForm.product_name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={productForm.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select category</option>
                {[
                  "Electronics",
                  "Fashion",
                  "Home & Living",
                  "Sports",
                  "Beauty",
                  "Books",
                ].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Description *
              </label>
              <textarea
                name="product_description"
                value={productForm.product_description}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product description"
              />
            </div>
          </div>
        </div>

        {/* Pricing & Inventory */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Pricing & Inventory
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price *
              </label>
              <input
                name="product_price"
                type="text"
                inputMode="decimal"
                value={productForm.product_price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Discount % *
              </label>
              <input
                name="product_discount_percentage"
                type="text"
                inputMode="decimal"
                value={productForm.product_discount_percentage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity *
              </label>
              <input
                name="product_quantity"
                type="text"
                inputMode="numeric"
                value={productForm.product_quantity}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Images</h3>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Main Product Image *
            </label>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload main product image (JPG, PNG, WebP)
                </p>
              </div>
              {mainImagePreview && (
                <div className="relative">
                  <img
                    src={mainImagePreview}
                    alt="Main preview"
                    className="w-24 h-24 object-cover rounded-lg border-2 border-blue-500"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="border-t pt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Product Images
            </label>
            <div className="mb-3">
              <input
                ref={productImagesInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleProductImagesChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload multiple images (JPG, PNG, WebP)
              </p>
            </div>

            {productImagesPreview.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {productImagesPreview.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => removeProductImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-200 shadow-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                      >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Attributes */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Product Attributes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Colour
              </label>
              <input
                name="product_colour"
                type="text"
                value={productForm.product_colour}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Black, White"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating
              </label>
              <input
                name="product_rating"
                type="text"
                inputMode="decimal"
                min="0"
                max="5"
                value={productForm.product_rating}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.0"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Available Sizes
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={tempSize}
                onChange={(e) => setTempSize(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addSize()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add size (e.g., S, M, L)"
              />
              <button
                type="button"
                onClick={addSize}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {productForm.product_size_available.map((size, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2"
                >
                  {size}
                  <button
                    type="button"
                    onClick={() => removeSize(index)}
                    className="ml-1 hover:bg-blue-200 rounded-full p-1 transition-colors duration-200 touch-manipulation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={tempTag}
                onChange={(e) => setTempTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTag()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add tag"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {productForm.product_tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="ml-1 hover:bg-green-200 rounded-full p-1 transition-colors duration-200 touch-manipulation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dimensions & Weight */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Dimensions & Weight
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Length (cm)
              </label>
              <input
                name="product_length"
                type="text"
                inputMode="decimal"
                value={productForm.product_length}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Breadth (cm)
              </label>
              <input
                name="product_breadth"
                type="text"
                inputMode="decimal"
                value={productForm.product_breadth}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                name="product_height"
                type="text"
                inputMode="decimal"
                value={productForm.product_height}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Weight (kg)
              </label>
              <input
                name="product_weight"
                type="text"
                inputMode="decimal"
                value={productForm.product_weight}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="flex items-center gap-2">
            <input
              name="is_available"
              type="checkbox"
              checked={productForm.is_available}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-semibold text-gray-700">
              Product is available for sale
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 border-t">
          {!isAddProductFormSubmit ? (
            <button
              type="button"
              onClick={() => {
                set_isAddProductFormSubmit(true);
                isModal ? handleEditProduct() : handleAddProduct();
              }}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              {isModal ? "Update Product" : "Add Product"}
            </button>
          ) : (
            <div id="productLoader" className="flex-1 ">
              <svg
                id="productCircleLoader"
                className="justify-self-center"
                viewBox="25 25 50 50"
              >
                <circle cx="50" cy="50" r="16"></circle>
              </svg>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              resetForm();
              if (isModal) setShowModal(false);
              else setActiveTab("list");
            }}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AddProduct() {
  const [activeTab, setActiveTab] = useState("list");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const [productForm, setProductForm] = useState({
    category: "", // *Required
    main_image_file: null, // *Required
    product_images_files: [], // *Required
    product_name: "", // *Required
    product_price: "", // *Required
    product_rating: 0,
    product_description: "", // *Required
    product_quantity: "", // *Required
    product_length: "",
    product_breadth: "",
    product_height: "",
    product_weight: "",
    product_discount_percentage: "", // *Required
    product_like_count: 0,
    product_colour: "",
    product_size_available: [],
    product_tags: [],
    is_available: true,
  });

  const [mainImagePreview, setMainImagePreview] = useState("");
  const [productImagesPreview, setProductImagesPreview] = useState([]);
  const productImagesInputRef = useRef(null);
  const { server, isAddProductFormSubmit, set_isAddProductFormSubmit } =
    useStore();

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      category: "Electronics",
      image_url:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      image_public_id: "img_001",
      product_images: [
        {
          url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
          public_id: "img_001_1",
        },
      ],
      product_name: "Premium Wireless Headphones",
      product_price: 79.99,
      product_rating: 4.5,
      product_description:
        "High-quality wireless headphones with noise cancellation",
      product_quantity: 50,
      product_length: 20,
      product_breadth: 18,
      product_height: 10,
      product_weight: 0.3,
      product_discount_percentage: 10,
      product_like_count: 234,
      product_colour: "Black",
      product_size_available: ["Standard"],
      product_tags: ["audio", "wireless", "premium"],
      is_available: true,
    },
    {
      id: 2,
      category: "Fashion",
      image_url:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
      image_public_id: "img_002",
      product_images: [
        {
          url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
          public_id: "img_002_1",
        },
      ],
      product_name: "Running Shoes Pro",
      product_price: 89.99,
      product_rating: 4.8,
      product_description: "Professional running shoes with cushioning",
      product_quantity: 30,
      product_length: 30,
      product_breadth: 15,
      product_height: 12,
      product_weight: 0.5,
      product_discount_percentage: 15,
      product_like_count: 567,
      product_colour: "Blue",
      product_size_available: ["8", "9", "10", "11"],
      product_tags: ["sports", "running", "shoes"],
      is_available: true,
    },
  ]);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Sports",
    "Beauty",
    "Books",
  ];
  const [tempSize, setTempSize] = useState("");
  const [tempTag, setTempTag] = useState("");

  // Unified input handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setProductForm({
      category: "",
      main_image_file: null,
      product_images_files: [],
      product_name: "",
      product_price: "",
      product_rating: 0.0,
      product_description: "",
      product_quantity: "",
      product_length: "",
      product_breadth: "",
      product_height: "",
      product_weight: "",
      product_discount_percentage: "",
      product_like_count: 0,
      product_colour: "",
      product_size_available: [],
      product_tags: [],
      is_available: true,
    });
    setMainImagePreview("");
    setProductImagesPreview([]);
    setEditingProduct(null);
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductForm((prev) => ({ ...prev, main_image_file: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setProductForm((prev) => ({
        ...prev,
        product_images_files: [...(prev.product_images_files || []), ...files],
      }));
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProductImagesPreview((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
      // clear the file input so browser doesn't keep previous selection
      if (productImagesInputRef.current)
        productImagesInputRef.current.value = "";
    }
  };

  const removeProductImage = (index) => {
    setProductForm((prev) => ({
      ...prev,
      product_images_files: (prev.product_images_files || []).filter(
        (_, i) => i !== index
      ),
    }));
    setProductImagesPreview((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddProduct = async () => {
    try {
      console.log("Requested to add product...");
      set_isAddProductFormSubmit(true); // ⬅ show loader

      const formData = new FormData();

      // Append text fields
      formData.append("category", productForm.category || "");
      formData.append("product_name", productForm.product_name || "");
      formData.append("product_price", productForm.product_price || 0.0);
      formData.append(
        "product_discount_percentage",
        productForm.product_discount_percentage || 0.0
      );
      formData.append("product_quantity", productForm.product_quantity || 0);
      formData.append(
        "product_description",
        productForm.product_description || ""
      );
      formData.append("product_colour", productForm.product_colour || "N/A");
      formData.append(
        "product_size_available",
        productForm.product_size_available?.join(",") || ""
      );
      formData.append(
        "product_tags",
        productForm.product_tags?.join(",") || ""
      );
      formData.append("product_length", productForm.product_length || 0.0);
      formData.append("product_breadth", productForm.product_breadth || 0.0);
      formData.append("product_height", productForm.product_height || 0.0);
      formData.append("product_weight", productForm.product_weight || 0.0);
      formData.append("product_rating", productForm.product_rating || 0.0);
      formData.append(
        "product_like_count",
        productForm.product_like_count || 0
      );
      formData.append("is_available", productForm.is_available ?? true);

      // Base image required
      if (!productForm.main_image_file) {
        alert("Base image is required!");
        return;
      }
      formData.append("image_base", productForm.main_image_file);

      // Additional images
      productForm.product_images_files?.forEach((file) => {
        formData.append("images", file);
      });

      // Send request
      const response = await axios.post(
        `http://localhost:8000/api/admin/create/product`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Success
      if (response.status === 201) {
        setMessage(response.data.message);
        setShowMessage(true);
        setProducts((prev) => [...prev, response.data.product]);
        console.log("Product added successfully!");
      } else {
        setMessage(response.data.message || "Failed to add product");
        setShowMessage(true);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage(
        error.response?.data?.message ||
          "An error occurred while adding the product."
      );
      setShowMessage(true);
    } finally {
      set_isAddProductFormSubmit(false);
      setTimeout(() => {
        setShowMessage(false);
        resetForm();
        setMessage("");
      }, 3000);
    }
  };

  const handleEditProduct = () => {
    const updatedProduct = {
      ...productForm,
      id: editingProduct.id,
      image_url: mainImagePreview || editingProduct.image_url,
      image_public_id: editingProduct.image_public_id,
      product_images:
        productImagesPreview.length > 0
          ? productImagesPreview.map((url, idx) => ({
              url,
              public_id: `img_${Date.now()}_${idx}`,
            }))
          : editingProduct.product_images,
      product_price: parseFloat(productForm.product_price) || 0,
      product_quantity: parseInt(productForm.product_quantity) || 0,
      product_discount_percentage:
        parseFloat(productForm.product_discount_percentage) || 0,
      product_length: parseFloat(productForm.product_length) || 0,
      product_breadth: parseFloat(productForm.product_breadth) || 0,
      product_height: parseFloat(productForm.product_height) || 0,
      product_weight: parseFloat(productForm.product_weight) || 0,
    };

    delete updatedProduct.main_image_file;
    delete updatedProduct.product_images_files;

    setProducts(
      products.map((p) => (p.id === editingProduct.id ? updatedProduct : p))
    );
    resetForm();
    setShowModal(false);
    alert("Product updated successfully!");
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setProductForm(() => ({ ...product }));
    setMainImagePreview(product.image_url || "");
    setProductImagesPreview(
      product.product_images?.map((img) => img.url) || []
    );
    setShowModal(true);
  };

  const addSize = () => {
    if (tempSize.trim()) {
      setProductForm((prev) => ({
        ...prev,
        product_size_available: [
          ...(prev.product_size_available || []),
          tempSize.trim(),
        ],
      }));
      setTempSize("");
    }
  };

  const removeSize = (index) => {
    setProductForm((prev) => ({
      ...prev,
      product_size_available: (prev.product_size_available || []).filter(
        (_, i) => i !== index
      ),
    }));
  };

  const addTag = () => {
    if (tempTag.trim()) {
      setProductForm((prev) => ({
        ...prev,
        product_tags: [...(prev.product_tags || []), tempTag.trim()],
      }));
      setTempTag("");
    }
  };

  const removeTag = (index) => {
    setProductForm((prev) => ({
      ...prev,
      product_tags: (prev.product_tags || []).filter((_, i) => i !== index),
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
      <header className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  ShopHub Admin
                </h1>
                <p className="text-xs text-gray-600">Product Management</p>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-4">
              <button
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition font-semibold"
                onClick={() => {
                  /* optional: add dashboard behavior */
                }}
              >
                Dashboard
              </button>
              <button
                className="px-4 py-2 text-blue-600 font-semibold border-b-2 border-blue-600"
                onClick={() => {
                  setActiveTab("list");
                }}
              >
                Products
              </button>
              <button
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition font-semibold"
                onClick={() => {
                  /* optional: add orders behavior */
                }}
              >
                Orders
              </button>
            </nav>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {!mobileOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <X className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden mt-2 pb-4 border-t">
              <div className="flex flex-col px-2 space-y-1">
                <button
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => {
                    setMobileOpen(false);
                    /* optional: dashboard action */
                  }}
                >
                  Dashboard
                </button>
                <button
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 font-semibold text-blue-600"
                  onClick={() => {
                    setActiveTab("list");
                    setMobileOpen(false);
                  }}
                >
                  Products
                </button>
                <button
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => {
                    setMobileOpen(false);
                    /* optional: orders action */
                  }}
                >
                  Orders
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Products</h2>
            <p className="text-gray-600">Manage your product inventory</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setActiveTab("add");
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add New Product
          </button>
        </div>

        {activeTab === "add" && showMessage && (
          <Alert
            className="mb-4"
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
          >
            Product created successfully in database.
          </Alert>
        )}

        {activeTab === "list" && (
          <>
            {/* Filter Bar */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Products</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {products.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">In Stock</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {products.filter((p) => p.product_quantity > 0).length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Box className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Categories</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {categories.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Tag className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Value</p>
                    <p className="text-2xl font-bold text-gray-900">
                      $
                      {products
                        .reduce(
                          (sum, p) =>
                            sum + p.product_price * p.product_quantity,
                          0
                        )
                        .toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-12 text-center">
                          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-600 font-semibold">
                            No products found
                          </p>
                          <p className="text-sm text-gray-500">
                            Try adjusting your search or filters
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image_url}
                                alt={product.product_name}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {product.product_name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {product.product_rating} ★ |{" "}
                                  {product.product_like_count} likes
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-bold text-gray-900">
                                ${product.product_price}
                              </p>
                              {product.product_discount_percentage > 0 && (
                                <p className="text-xs text-green-600">
                                  {product.product_discount_percentage}% off
                                </p>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`font-semibold ${
                                product.product_quantity > 20
                                  ? "text-green-600"
                                  : product.product_quantity > 5
                                  ? "text-yellow-600"
                                  : "text-red-600"
                              }`}
                            >
                              {product.product_quantity} units
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                product.is_available
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {product.is_available ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => openEditModal(product)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                title="Edit"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* {activeTab === "add" && <ProductForm />} */}
        {activeTab === "add" && (
          <ProductForm
            productForm={productForm}
            handleInputChange={handleInputChange}
            tempSize={tempSize}
            setTempSize={setTempSize}
            addSize={addSize}
            removeSize={removeSize}
            tempTag={tempTag}
            setTempTag={setTempTag}
            addTag={addTag}
            removeTag={removeTag}
            mainImagePreview={mainImagePreview}
            productImagesPreview={productImagesPreview}
            handleMainImageChange={handleMainImageChange}
            handleProductImagesChange={handleProductImagesChange}
            removeProductImage={removeProductImage}
            productImagesInputRef={productImagesInputRef}
            isModal={false}
            handleAddProduct={handleAddProduct}
            handleEditProduct={handleEditProduct}
            resetForm={resetForm}
            setShowModal={setShowModal}
            setActiveTab={setActiveTab}
          />
        )}
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full my-8">
            <div className="p-6 border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Edit Product
                </h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              {/* <ProductForm isModal={true} /> */}
              <ProductForm
                productForm={productForm}
                handleInputChange={handleInputChange}
                tempSize={tempSize}
                setTempSize={setTempSize}
                addSize={addSize}
                removeSize={removeSize}
                tempTag={tempTag}
                setTempTag={setTempTag}
                addTag={addTag}
                removeTag={removeTag}
                mainImagePreview={mainImagePreview}
                productImagesPreview={productImagesPreview}
                handleMainImageChange={handleMainImageChange}
                handleProductImagesChange={handleProductImagesChange}
                removeProductImage={removeProductImage}
                productImagesInputRef={productImagesInputRef}
                isModal={true}
                handleAddProduct={handleAddProduct}
                handleEditProduct={handleEditProduct}
                resetForm={resetForm}
                setShowModal={setShowModal}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

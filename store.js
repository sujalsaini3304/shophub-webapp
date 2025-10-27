import { create } from "zustand";

const useStore = create((set) => ({
  server: import.meta.env.VITE_HOST_SERVER,
  username: "",
  user_email: "",
  product_category: [],
  products: [],

  set_username: (value) => set({ username: value }),
  set_user_email: (value) => set({ user_email: value }),
  set_product_category: (value) => set({ product_category: value }),
  set_products: (value) => set({ products: value }),

  isAddProductFormSubmit: false,
  set_isAddProductFormSubmit: (value) => set({ isAddProductFormSubmit: value }),
}));

export default useStore;

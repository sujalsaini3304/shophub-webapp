import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      server:  import.meta.env.VITE_HOST_SERVER,
      username: "",
      user_email: "",
      set_username: (value) => set(() => ({ username: value })),
      set_user_email: (value) => set(() => ({ user_email: value })),
      product_category:[],
      set_product_category: (value) => set(() => ({ product_category: value }))
    }),
    {
      name: "user-data",
    }
  )
);

export default useStore;


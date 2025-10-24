import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      server: process.env.HOST_SERVER ,
      username: "",
      user_email: "",
      set_username: (value) => set(() => ({ username: value })),
      set_user_email: (value) => set(() => ({ user_email: value })),
    }),
    {
      name: "user-data",
    }
  )
);

export default useStore;


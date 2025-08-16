import { create } from "zustand";
import type { ProductWithParam } from "../interfaces/Products.ts";

interface CartState {
  cart: ProductWithParam[];
  addToCart: (product: ProductWithParam) => void;
  fetchCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => {
      const updatedCart = [...state.cart, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return { cart: updatedCart };
    });
  },

  fetchCart: () => {
    const storedData = localStorage.getItem("cartItems");
    set({ cart: storedData ? JSON.parse(storedData) : [] });
  },
}));

import { create } from "zustand";
import type { ProductWithParam } from "../interfaces/Products.ts";

interface CartState {
  cart: ProductWithParam[];
  addToCart: (product: ProductWithParam) => void;
  fetchCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (newProduct) => {
    set((state) => {
      let updatedCart = [...state.cart];

      const index = updatedCart.findIndex(
        (item) =>
          item.product.id === newProduct.product.id &&
          item.size === newProduct.size &&
          item.color === newProduct.color
      );

      if (index !== -1) updatedCart[index].amount += newProduct.amount;
      else updatedCart = [...updatedCart, newProduct];


      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return { cart: updatedCart };
    });
  },


  fetchCart: () => {
    const storedData = localStorage.getItem("cartItems");
    set({ cart: storedData ? JSON.parse(storedData) : [] });
  },
}));

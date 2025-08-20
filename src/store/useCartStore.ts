import {create} from "zustand";
import type {ProductWithParam} from "../interfaces/Products.ts";

interface CartState {
  cart: ProductWithParam[];
  addToCart: (product: ProductWithParam) => void;
  fetchCart: () => void;
  updateProductAmount: (product: ProductWithParam, amount: number) => void;
  deleteProduct: (product: ProductWithParam) => void;
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

      return {cart: updatedCart};
    });
  },


  fetchCart: () => {
    const storedData = localStorage.getItem("cartItems");
    set({cart: storedData ? JSON.parse(storedData) : []});
  },

  updateProductAmount: (productP: ProductWithParam, amount: number) => {
    set((state) => {
      const updatedCart = state.cart.map((product) => {
        if (
          product.product.id === productP.product.id &&
          product.size === productP.size &&
          product.color === productP.color
        ) {
          return {...product, amount};
        }
        return product;
      });

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return {cart: updatedCart};
    });
  },

  deleteProduct: (productP: ProductWithParam) => {
    set((state) => {
      const updatedCart = state.cart.filter(product =>
        !(product.product.id === productP.product.id &&
          product.size === productP.size &&
          product.color === productP.color))

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return {cart: updatedCart};
    })
  }
}));

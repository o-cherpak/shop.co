import {create} from "zustand";
import type {Product} from "../interfaces/Products.ts";

interface FilteredProductsState {
  filteredProducts: Product[];
  type: string;
  priceRange: number[];
  colors: string[];
  sizes: string[];
  style: string;

  setFilteredProducts: (products: Product[]) => void;
  setType: (type: string) => void;
  setPriceRange: (range: number[]) => void;
  addColor: (color: string) => void;
  removeColor: (color: string) => void;
  addSize: (size: string) => void;
  removeSize: (size: string) => void;
  setStyle: (style: string) => void;
  resetFilters: (product: Product[]) => void;
}


export const useFilteredProductsStore = create<FilteredProductsState>((set) => ({
  filteredProducts: [],
  type: "",
  priceRange: [],
  colors: [],
  sizes: [],
  style: "",

  setFilteredProducts: (products) => set({filteredProducts: products}),

  setType: (type) => set({type}),

  setPriceRange: (range) => set({priceRange: range}),

  addColor: (color) =>
    set((state) => ({colors: [...state.colors, color]})),

  removeColor: (color) =>
    set((state) => ({colors: state.colors.filter((c) => c !== color)})),

  addSize: (size) =>
    set((state) => ({sizes: [...state.sizes, size]})),

  removeSize: (size) =>
    set((state) => ({sizes: state.sizes.filter((s) => s !== size)})),

  setStyle: (style) => set({style}),

  resetFilters: (product: Product[]) => set(
    {
      filteredProducts: product,
      type: "",
      priceRange: [],
      colors: [],
      sizes: [],
      style: "",
    }
  ),
}));

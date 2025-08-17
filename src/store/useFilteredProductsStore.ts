import { create } from "zustand";
import type {Product} from "../interfaces/Products.ts";

interface FilteredProductsState {
  filteredProducts: Product[];
  type: string;
  priceRange: number[];
  colors: string[];
  size: string[];
  style: string[];

  setFilteredProducts: (products: Product[]) => void;
  setType: (type: string) => void;
  setPriceRange: (range: number[]) => void;
  addColor: (color: string) => void;
  removeColor: (color: string) => void;
  addSize: (size: string) => void;
  removeSize: (size: string) => void;
  addStyle: (style: string) => void;
  removeStyle: (style: string) => void;
}

export const useFilteredProductsStore = create<FilteredProductsState>((set) => ({
  filteredProducts: [],
  type: "",
  priceRange: [],
  colors: [],
  size: [],
  style: [],

  setFilteredProducts: (products) => set({ filteredProducts: products }),

  setType: (type) => set({ type }),

  setPriceRange: (range) => set({ priceRange: range }),

  addColor: (color) =>
    set((state) => ({ colors: [...state.colors, color] })),

  removeColor: (color) =>
    set((state) => ({ colors: state.colors.filter((c) => c !== color) })),

  addSize: (size) =>
    set((state) => ({ size: [...state.size, size] })),

  removeSize: (size) =>
    set((state) => ({ size: state.size.filter((s) => s !== size) })),

  addStyle: (style) =>
    set((state) => ({ style: [...state.style, style] })),

  removeStyle: (style) =>
    set((state) => ({ style: state.style.filter((st) => st !== style) })),
}));

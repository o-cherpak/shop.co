import {create} from 'zustand'
import {child, get, ref} from "firebase/database";
import {database} from "../../firebase-config.ts";
import type {Product} from "../interfaces/Products.ts";

interface ProductsState {
  products: Product[];
  isLoadingProducts: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  isLoadingProducts: false,
  error: null,

  fetchProducts: async () => {
    set({isLoadingProducts: true, error: null});

    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, "products"));

      if (snapshot.exists()) {
        const dataObj = snapshot.val();
        const productsArray = Object.values(dataObj);
        set({products: productsArray as Product[], isLoadingProducts: false});
      } else {
        set({products: [], isLoadingProducts: false});
      }
    } catch (err) {
      set({error: (err as Error).message, isLoadingProducts: false});
    }
  }
}))

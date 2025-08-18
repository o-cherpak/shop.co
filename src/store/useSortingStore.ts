import {create} from "zustand";

interface SortingState {
  sortingOption: string;
  setSortingOption: (option: string) => void;
}

export const useSortingStore = create<SortingState>((set) => ({
  sortingOption: "Default",

  setSortingOption: (option) =>
    set(() => ({
      sortingOption: option,
    })),
}));
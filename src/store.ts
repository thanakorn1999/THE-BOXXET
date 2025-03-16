import { create } from "zustand";

interface StoreState {
  withLanguage: boolean;
  setWithLanguage: (value: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  withLanguage: false, // Default value
  setWithLanguage: (value) => set({ withLanguage: value }),
}));

export default useStore;
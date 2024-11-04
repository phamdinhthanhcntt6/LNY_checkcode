import { create } from "zustand";

interface INumerologySelected {
  numerologySelected: string;
  updateNumerologySelected: (day: string) => void;
}

export const useNumerologyStore = create<INumerologySelected>((set) => ({
  numerologySelected: "afa9c7a8-f981-42e8-8b71-c0f86109b19f",
  updateNumerologySelected: (id: string) => set({ numerologySelected: id }),
}));

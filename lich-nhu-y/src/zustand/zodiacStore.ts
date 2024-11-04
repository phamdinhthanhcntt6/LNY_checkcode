import { create } from "zustand";

interface IZodiacSelected {
  zodiacSelected: string;
  updateZodiacSelected: (day: string) => void;
}

export const useZodiacStore = create<IZodiacSelected>((set) => ({
  zodiacSelected: "095a14ad-fda1-4503-98b3-6c2820cd5be9",
  updateZodiacSelected: (id: string) => set({ zodiacSelected: id }),
}));

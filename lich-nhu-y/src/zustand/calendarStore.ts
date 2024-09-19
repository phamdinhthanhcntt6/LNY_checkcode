import moment from "moment";
import { create } from "zustand";

interface ICalendarSelected {
  daySelected: string;
  updateDaySelected: (day: string) => void;
}

export const useCalendarStore = create<ICalendarSelected>((set) => ({
  daySelected: moment().format("YYYY-MM-DD"),
  updateDaySelected: (day: string) => set({ daySelected: day }),
}));

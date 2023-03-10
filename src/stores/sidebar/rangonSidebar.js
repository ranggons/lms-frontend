import { create } from "zustand";

export const useRangonSidebarStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}))
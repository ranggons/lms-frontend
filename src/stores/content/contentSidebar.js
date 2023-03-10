import { create } from "zustand";

export const useContentSidebarStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}))
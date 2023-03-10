import { create } from "zustand";

export const useAdminSidebarStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}))
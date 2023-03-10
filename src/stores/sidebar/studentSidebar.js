import { create } from "zustand";

export const useStudentSidebarStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}))
import { create } from "zustand";

export const useTeacherSidebarStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}))
import { create } from "zustand";

export const useAuthStore = create((set) => ({
	user: false,
	setUser: (payload) => set({ user: payload }),
}));

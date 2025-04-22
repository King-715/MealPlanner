import { create } from "zustand";

const useRecipeStore = create((set) => ({
	searchQuery: "",
	setSearchQuery: (query) => set({ searchQuery: query }),
	// Optional: Add reset function
	reset: () => set({ searchQuery: "" }),
}));

export default useRecipeStore;

import { create } from "zustand";

const useMealPlanStore = create((set) => ({
	// Initial state
	mealAmount: 3,
	planLength: 1,
	selectedDay: null,
	selectedMealType: null,
	mealPlan: {},
	totalMeals: 0,

	// Actions
	setMealAmount: (amount) => set({ mealAmount: amount }),
	setPlanLength: (length) => set({ planLength: length }),
	setSelectedDay: (day) => set({ selectedDay: day }),
	setSelectedMealType: (mealType) => set({ selectedMealType: mealType }),

	// Update meal plan
	updateMealPlan: (recipes, day, mealType) =>
		set((state) => {
			const newPlan = { ...state.mealPlan };
			const dayKey = `day${day}`;
			const mealKey = mealType.toLowerCase();

			if (!newPlan[dayKey]) {
				newPlan[dayKey] = {};
			}

			// Store the full recipe objects
			newPlan[dayKey][mealKey] = recipes;

			// Calculate total meals
			let total = 0;
			Object.values(newPlan).forEach((day) => {
				Object.values(day).forEach((meals) => {
					if (meals && Array.isArray(meals) && meals.length > 0) {
						total += 1;
					}
				});
			});

			return {
				mealPlan: newPlan,
				totalMeals: total,
			};
		}),

	// Clear meal plan
	clearMealPlan: () =>
		set({
			mealPlan: {},
			totalMeals: 0,
			selectedDay: null,
			selectedMealType: null,
		}),

	// Calculate max possible meals
	getMaxPossibleMeals: () => {
		const state = useMealPlanStore.getState();
		return state.mealAmount * state.planLength * 7; // 5 days per week
	},
}));

export default useMealPlanStore;

import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
} from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import useMealPlanStore from "../../store/mealPlanStore";

const SuggestedRecipesScreen = () => {
	const navigation = useNavigation();
	const { selectedDay, selectedMealType, mealPlan, updateMealPlan } =
		useMealPlanStore();
	const [selectedSuggestedRecipes, setSelectedSuggestedRecipes] = useState(
		[]
	);
	const [selectedAllRecipes, setSelectedAllRecipes] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	let [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	// Load previously selected recipes when component mounts
	useEffect(() => {
		if (selectedDay !== null && selectedMealType) {
			const dayKey = `day${selectedDay}`;
			const mealKey = selectedMealType.toLowerCase();
			const existingRecipes = mealPlan[dayKey]?.[mealKey] || [];

			if (Array.isArray(existingRecipes) && existingRecipes.length > 0) {
				setSelectedSuggestedRecipes(
					existingRecipes.filter((recipe) =>
						breakfastMeals.some((bm) => bm.id === recipe.id)
					)
				);
				setSelectedAllRecipes(
					existingRecipes.filter((recipe) =>
						AllRecipes.some((ar) => ar.id === recipe.id)
					)
				);
			}
		}
	}, [selectedDay, selectedMealType, mealPlan]);

	const breakfastMeals = [
		{
			id: 1,
			name: "Salmon with Salad",
			time: "30 min",
			calories: "450 kcal",
			image: require("../../../assets/images/recipes/salmon-salad.png"),
			description:
				"Perfectly grilled salmon served with fresh mixed greens and a light lemon vinaigrette. Protein-packed meal that's both nutritious and delicious.",
			ingredients: [
				"2 salmon fillets (6 oz each)",
				"4 cups mixed salad greens",
				"1/2 cucumber, sliced",
				"1/2 cup cherry tomatoes, halved",
				"1/4 red onion, thinly sliced",
				"2 tbsp olive oil",
				"1 lemon, juiced",
				"Salt and pepper to taste",
			],
			instructions: [
				"Preheat grill or grill pan to medium-high heat.",
				"Season salmon fillets with salt, pepper, and 1 tbsp olive oil.",
				"Grill salmon for 4-5 minutes per side until cooked through.",
				"In a large bowl, combine greens, cucumber, tomatoes, and red onion.",
				"Whisk together remaining olive oil, lemon juice, salt and pepper for dressing.",
				"Toss salad with dressing and serve alongside salmon.",
			],
			nutrition_info: {
				calories: 450,
				protein: "34g",
				carbs: "12g",
				fat: "30g",
				fiber: "4g",
			},
		},
		{
			id: 2,
			name: "Quinoa with Carrots",
			time: "30 min",
			calories: "507 kcal",
			image: require("../../../assets/images/recipes/quinoa-carrots.png"),
			description:
				"Fluffy quinoa with roasted carrots, toasted almonds, and a hint of cumin. A wholesome vegetarian dish packed with plant-based protein.",
			ingredients: [
				"1 cup quinoa, rinsed",
				"2 cups vegetable broth",
				"3 large carrots, diced",
				"2 tbsp olive oil",
				"1/4 cup sliced almonds",
				"1 tsp ground cumin",
				"1/4 cup chopped parsley",
				"Salt and pepper to taste",
			],
			instructions: [
				"Preheat oven to 400°F (200°C).",
				"Toss carrots with 1 tbsp olive oil, salt, and pepper. Roast for 20 minutes.",
				"Meanwhile, cook quinoa in vegetable broth according to package instructions.",
				"Toast almonds in a dry pan over medium heat until fragrant (2-3 minutes).",
				"Fluff quinoa and mix with roasted carrots, almonds, cumin, and parsley.",
				"Drizzle with remaining olive oil before serving.",
			],
			nutrition_info: {
				calories: 507,
				protein: "14g",
				carbs: "72g",
				fat: "18g",
				fiber: "10g",
			},
		},
		{
			id: 3,
			name: "Pasta and Vegetables",
			time: "25 min",
			calories: "640 kcal",
			image: require("../../../assets/images/recipes/pasta-veggies.png"),
			description:
				"Colorful vegetable medley tossed with whole wheat pasta in a light garlic and olive oil sauce. Quick, easy, and full of flavor.",
			ingredients: [
				"8 oz whole wheat pasta",
				"1 zucchini, diced",
				"1 red bell pepper, diced",
				"1 cup broccoli florets",
				"3 cloves garlic, minced",
				"3 tbsp olive oil",
				"1/4 tsp red pepper flakes",
				"1/4 cup grated Parmesan cheese",
				"Salt and pepper to taste",
			],
			instructions: [
				"Cook pasta according to package instructions, reserving 1/2 cup pasta water.",
				"Heat olive oil in a large pan over medium heat. Add garlic and sauté for 30 seconds.",
				"Add vegetables and cook for 5-7 minutes until tender-crisp.",
				"Drain pasta and add to vegetables along with red pepper flakes.",
				"Toss with Parmesan and enough pasta water to create a light sauce.",
				"Season with salt and pepper before serving.",
			],
			nutrition_info: {
				calories: 640,
				protein: "22g",
				carbs: "92g",
				fat: "22g",
				fiber: "12g",
			},
		},
	];
	const AllRecipes = [
		{
			id: 1,
			name: "Guacamole and Salad",
			time: "30 min",
			calories: "450 kcal",
			image: require("../../../assets/images/recipes/guacamole-salad.png"),
			description:
				"Creamy homemade guacamole served with a crisp vegetable salad and whole grain chips. A fresh and satisfying plant-based meal.",
			ingredients: [
				"2 ripe avocados",
				"1 lime, juiced",
				"1/4 cup diced red onion",
				"1 small tomato, diced",
				"1 jalapeño, seeded and minced",
				"2 tbsp cilantro, chopped",
				"4 cups mixed greens",
				"1 cup corn kernels",
				"1/2 cup black beans, rinsed",
				"Salt to taste",
			],
			instructions: [
				"Mash avocados in a bowl with lime juice and salt.",
				"Stir in onion, tomato, jalapeño, and cilantro.",
				"In a separate bowl, combine greens, corn, and black beans.",
				"Serve guacamole with salad and whole grain chips on the side.",
				"Optionally drizzle salad with lime vinaigrette.",
			],
			nutrition_info: {
				calories: 450,
				protein: "10g",
				carbs: "42g",
				fat: "30g",
				fiber: "18g",
			},
		},
		{
			id: 2,
			name: "Pesto Pasta with Vegetables",
			time: "30 min",
			calories: "507 kcal",
			image: require("../../../assets/images/recipes/pesto-pasta-vegetables.png"),
			description:
				"Vibrant green pesto coats al dente pasta with seasonal vegetables for a restaurant-quality meal at home.",
			ingredients: [
				"8 oz pasta (fusilli or penne)",
				"2 cups fresh basil leaves",
				"1/4 cup pine nuts",
				"2 cloves garlic",
				"1/2 cup grated Parmesan",
				"1/3 cup olive oil",
				"1 cup cherry tomatoes, halved",
				"1 cup green beans, trimmed",
				"Salt and pepper to taste",
			],
			instructions: [
				"Cook pasta according to package instructions, adding green beans during last 3 minutes.",
				"For pesto: Blend basil, pine nuts, garlic, and Parmesan in food processor.",
				"With motor running, slowly add olive oil until emulsified.",
				"Drain pasta and beans, reserving 1/4 cup pasta water.",
				"Toss pasta with pesto, adding pasta water as needed to loosen.",
				"Stir in cherry tomatoes and season with salt and pepper.",
			],
			nutrition_info: {
				calories: 507,
				protein: "16g",
				carbs: "58g",
				fat: "24g",
				fiber: "6g",
			},
		},
		{
			id: 3,
			name: "Roasted Chicken",
			time: "25 min",
			calories: "640 kcal",
			image: require("../../../assets/images/recipes/roasted-chicken.png"),
			description:
				"Juicy herb-roasted chicken with crispy skin, served with roasted potatoes and seasonal vegetables. A classic comfort dish.",
			ingredients: [
				"4 chicken thighs (bone-in, skin-on)",
				"1 lb baby potatoes, halved",
				"2 tbsp olive oil",
				"1 tbsp fresh rosemary, chopped",
				"1 tbsp fresh thyme leaves",
				"3 cloves garlic, minced",
				"1 lemon, sliced",
				"Salt and pepper to taste",
			],
			instructions: [
				"Preheat oven to 425°F (220°C).",
				"Toss potatoes with 1 tbsp olive oil, salt, and pepper. Spread on baking sheet.",
				"Rub chicken with remaining oil, herbs, garlic, salt and pepper.",
				"Place chicken skin-side up on top of potatoes.",
				"Roast for 25 minutes until chicken reaches 165°F (74°C) internally.",
				"Add lemon slices during last 5 minutes of cooking.",
			],
			nutrition_info: {
				calories: 640,
				protein: "42g",
				carbs: "35g",
				fat: "38g",
				fiber: "4g",
			},
		},
	];

	const handleSuggestedRecipeSelect = (recipe) => {
		setSelectedSuggestedRecipes((prev) => {
			const isSelected = prev.some((r) => r.id === recipe.id);
			if (isSelected) {
				return prev.filter((r) => r.id !== recipe.id);
			} else {
				return [...prev, recipe];
			}
		});
	};

	const handleAllRecipeSelect = (recipe) => {
		setSelectedAllRecipes((prev) => {
			const isSelected = prev.some((r) => r.id === recipe.id);
			if (isSelected) {
				return prev.filter((r) => r.id !== recipe.id);
			} else {
				return [...prev, recipe];
			}
		});
	};

	const handleAddRecipe = () => {
		const allSelectedRecipes = [
			...selectedSuggestedRecipes,
			...selectedAllRecipes,
		];
		if (
			allSelectedRecipes.length > 0 &&
			selectedDay !== null &&
			selectedMealType
		) {
			updateMealPlan(allSelectedRecipes, selectedDay, selectedMealType);
			navigation.goBack();
		}
	};

	// Filter recipes based on search query
	const filteredRecipes = AllRecipes.filter((recipe) =>
		recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<View className="flex-1 bg-white">
			{/* Background Image */}
			<Image
				source={require("../../../assets/images/plan/background-meal.png")}
				className="absolute top-0 w-full h-80 opacity-30"
				resizeMode="cover"
			/>

			{/* Header with Logo */}
			<View className="flex-row items-center justify-center mb-6 mt-10">
				<Image
					source={require("../../../assets/images/logo.png")}
					className="w-14 h-14 mr-4"
					resizeMode="contain"
				/>
				<Text
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 32,
						color: "#FF7A6C",
					}}
				>
					Meal Planner
				</Text>
			</View>

			<View className="mx-4 mt-10">
				<Text
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 26,
						color: "#FF7A6C",
					}}
				>
					Suggested Recipes
				</Text>
				{/* <Text
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 14,
						color: "#8C8CA1",
						marginTop: 4,
					}}
				>
					{selectedRecipes.length} recipes selected
				</Text> */}
			</View>

			{/* Main Content Container */}
			<View className="flex-1">
				{/* Recipe List */}
				<ScrollView
					className="flex-1 px-4 mt-4 mb-10"
					contentContainerStyle={{ paddingBottom: 100 }}
					keyboardShouldPersistTaps="always"
				>
					{/* Suggested Recipes Section */}
					<View className="mb-6">
						<Text
							style={{
								fontFamily: "WorkSansBold",
								fontSize: 20,
								color: "#3e3e3e",
								marginBottom: 8,
							}}
						>
							{selectedMealType}
						</Text>
						{breakfastMeals.map((recipe) => (
							<TouchableOpacity
								key={recipe.id}
								onPress={() =>
									handleSuggestedRecipeSelect(recipe)
								}
								className={`mb-4 p-4 rounded-xl ${
									selectedSuggestedRecipes.some(
										(r) => r.id === recipe.id
									)
										? "bg-[#F2FAF0] border-2 border-[#4CA034]"
										: "bg-white border-2 border-[#F2FAF0]"
								}`}
							>
								<View className="flex-row">
									<Image
										source={recipe.image}
										className="w-20 h-20 rounded-lg"
										resizeMode="cover"
									/>
									<View className="ml-4 flex-1">
										<Text
											style={{
												fontFamily: "WorkSansBold",
												fontSize: 18,
											}}
										>
											{recipe.name}
										</Text>
										<Text
											style={{
												fontFamily: "WorkSansRegular",
												fontSize: 14,
												color: "#8C8CA1",
											}}
										>
											{recipe.time} • {recipe.calories}
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						))}
					</View>

					{/* All Recipes Section */}
					<View className="mb-6">
						<Text
							style={{
								fontFamily: "WorkSansBold",
								fontSize: 20,
								color: "#3e3e3e",
								marginBottom: 8,
							}}
						>
							All Recipes
						</Text>

						{/* Search Bar */}
						<View className="mb-4 relative">
							<Ionicons
								name="search"
								size={20}
								color="#9CA3AF"
								style={{
									position: "absolute",
									left: 12,
									top: 12,
									zIndex: 1,
								}}
							/>
							<TextInput
								placeholder="Search recipes..."
								value={searchQuery}
								onChangeText={setSearchQuery}
								className="bg-green-100 rounded-lg px-10 py-3 pl-10"
								style={{
									fontFamily: "WorkSansRegular",
									fontSize: 16,
								}}
								placeholderTextColor="#9CA3AF"
							/>
						</View>

						{filteredRecipes.map((recipe) => (
							<TouchableOpacity
								key={recipe.id}
								onPress={() => handleAllRecipeSelect(recipe)}
								className={`mb-4 p-4 rounded-xl ${
									selectedAllRecipes.some(
										(r) => r.id === recipe.id
									)
										? "bg-[#F2FAF0] border-2 border-[#4CA034]"
										: "bg-white border-2 border-[#F2FAF0]"
								}`}
							>
								<View className="flex-row">
									<Image
										source={recipe.image}
										className="w-20 h-20 rounded-lg"
										resizeMode="cover"
									/>
									<View className="ml-4 flex-1">
										<Text
											style={{
												fontFamily: "WorkSansBold",
												fontSize: 18,
											}}
										>
											{recipe.name}
										</Text>
										<Text
											style={{
												fontFamily: "WorkSansRegular",
												fontSize: 14,
												color: "#8C8CA1",
											}}
										>
											{recipe.time} • {recipe.calories}
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>

				{/* Add Recipe Button - Fixed at bottom */}
				<View
					className="absolute bottom-20 left-0 right-0 p-4 mx-20"
					style={{ zIndex: 1 }}
				>
					<TouchableOpacity
						className={`bg-[#FF7A6C] py-4 rounded-full items-center justify-center ${
							selectedSuggestedRecipes.length +
								selectedAllRecipes.length ===
							0
								? "opacity-80"
								: ""
						}`}
						onPress={handleAddRecipe}
						disabled={
							selectedSuggestedRecipes.length +
								selectedAllRecipes.length ===
							0
						}
					>
						<Text
							style={{ fontFamily: "WorkSansBold", fontSize: 20 }}
							className="text-white"
						>
							Add{" "}
							{selectedSuggestedRecipes.length +
								selectedAllRecipes.length}{" "}
							Recipe
							{selectedSuggestedRecipes.length +
								selectedAllRecipes.length !==
							1
								? "s"
								: ""}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default SuggestedRecipesScreen;

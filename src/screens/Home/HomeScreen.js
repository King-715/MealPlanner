import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";
import useRecipeStore from "../../store/recipestore";

const HomeScreen = () => {
	const navigation = useNavigation();
	// const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
	// Load WorkSans font
	const { searchQuery, setSearchQuery } = useRecipeStore();
	let [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	// Sample meal data
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

	const progressPercentage = 70; // 7 out of 10 weeks

	return (
		<View className="flex-1 bg-white">
			<ScrollView className="flex-1 px-5 pb-20">
				{/* Header */}
				<View className="flex items-center mb-6 mt-12">
					<Image
						source={require("../../../assets/images/logo.png")}
						className="w-16 h-16 mr-4"
						resizeMode="contain"
					/>
				</View>
				<View className="flex items-center mb-6">
					<Text
						style={{
							fontFamily: "WorkSansBold",
							color: "#FF7A64",
							fontSize: 30,
						}}
					>
						Welcome Simone!
					</Text>
				</View>

				{/* Progress Indicator */}
				<View className="bg-white rounded-xl shadow-sm border-2 border-gray-100 p-4 mb-6 mx-5">
					<Text
						style={{
							fontFamily: "WorkSansBold",
							color: "#3e3e3e",
							fontSize: 20,
						}}
						className="text-base text-gray-600 mb-3"
					>
						Your meal plan progress
					</Text>
					<Text
						style={{
							fontFamily: "WorkSansBold",
							color: "#3e3e3e",
							fontSize: 16,
						}}
						className="mb-3 opacity-75"
					>
						{progressPercentage}% complete (7 days out of 10)
					</Text>
					<View className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-3">
						<LinearGradient
							colors={["#4CAF50", "#8BC34A"]}
							className="h-full rounded-full"
							style={{ width: `${progressPercentage}%` }}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
						/>
					</View>
				</View>

				{/* Today's Meal Plan */}
				<View className="flex items-center mb-4">
					<Text
						style={{
							fontFamily: "WorkSansSemiBold",
							color: "#FF7A64",
							fontSize: 28,
						}}
					>
						Today's Meal Plan
					</Text>
				</View>

				{/* Breakfast Section */}
				<Text
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 20,
						color: "#3e3e3e",
						opacity: 0.75,
					}}
					className="mb-3 mt-2"
				>
					Breakfast
				</Text>

				{breakfastMeals.map((meal) => (
					<TouchableOpacity
						key={meal.id}
						className="bg-white rounded-xl shadow-sm mb-4 border-2 border-gray-100 mx-3 flex-row overflow-hidden"
						onPress={() => {
							setSearchQuery(meal.name); // Store query
							navigation.navigate("MainApp", {
								screen: "Recipes",
							});
						}}
					>
						<Image
							source={meal.image}
							className="w-24 h-24"
							resizeMode="cover"
						/>
						<View className="flex-1 p-3 justify-between">
							<Text
								style={{ fontFamily: "WorkSansSemiBold" }}
								className="text-base text-gray-900"
							>
								{meal.name}
							</Text>
							<View className="flex-row justify-between mt-2">
								<Text
									style={{ fontFamily: "WorkSansRegular" }}
									className="text-sm text-gray-600"
								>
									⏱️ {meal.time}
								</Text>
								<Text
									style={{ fontFamily: "WorkSansRegular" }}
									className="text-sm text-gray-600"
								>
									🔥 {meal.calories}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}

				{/* Lunch Section */}
				<Text
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 20,
						color: "#3e3e3e",
						opacity: 0.75,
					}}
					className="mb-3 mt-2"
				>
					Lunch
				</Text>
				<Text
					style={{ fontFamily: "WorkSansRegular" }}
					className="text-center text-gray-500 italic my-5"
				>
					More options coming soon!
				</Text>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

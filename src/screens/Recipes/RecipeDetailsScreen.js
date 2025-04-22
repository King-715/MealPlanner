import React, { useState } from "react";
import {
	View,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// Mock pantry items (replace with actual backend data later)
const PANTRY_ITEMS = ["olive oil", "salt", "pepper", "lemon"];

const RecipeDetailsScreen = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const { meal } = route.params || { meal: null };
	const [activeTab, setActiveTab] = useState("ingredients");
	const [checkedItems, setCheckedItems] = useState([]);

	// Load WorkSans font
	let [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	// Check if ingredient is in pantry
	const isInPantry = (ingredient) => {
		return PANTRY_ITEMS.some((pantryItem) =>
			ingredient.toLowerCase().includes(pantryItem.toLowerCase())
		);
	};

	// Toggle ingredient check
	const toggleChecked = (ingredient) => {
		if (isInPantry(ingredient)) return; // Don't allow checking pantry items

		setCheckedItems((prev) =>
			prev.includes(ingredient)
				? prev.filter((item) => item !== ingredient)
				: [...prev, ingredient]
		);
	};

	if (!fontsLoaded || !meal) {
		return (
			<View className="flex-1 justify-center items-center">
				<Text>Loading...</Text>
			</View>
		);
	}

	// Render content based on active tab
	const renderTabContent = () => {
		switch (activeTab) {
			case "ingredients":
				return (
					<View className="mt-4 mx-2">
						{meal.ingredients.map((ingredient, index) => {
							const inPantry = isInPantry(ingredient);
							const isChecked =
								checkedItems.includes(ingredient) || inPantry;

							return (
								<TouchableOpacity
									key={index}
									className={`flex-row items-center py-3 ${
										index !== 0
											? "border-t border-gray-100"
											: ""
									}`}
									onPress={() => toggleChecked(ingredient)}
									disabled={inPantry}
								>
									<View
										className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center 
                    ${
						inPantry
							? "border-green-500 bg-green-100"
							: isChecked
							? "border-primary bg-primary"
							: "border-gray-300"
					}`}
									>
										{(inPantry || isChecked) && (
											<MaterialIcons
												name="check"
												size={16}
												color={
													inPantry
														? "#10B981"
														: "#FF7A6C"
												}
											/>
										)}
									</View>
									<Text
										className={`flex-1 ${
											isChecked
												? "line-through text-gray-400"
												: "text-gray-700"
										}`}
										style={{
											fontFamily: "WorkSansRegular",
											fontSize: 16,
										}}
									>
										{ingredient}
										{inPantry && (
											<Text className="text-green-500 text-xs ml-2">
												(In Pantry)
											</Text>
										)}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				);

			case "instructions":
				return (
					<View className="mt-4 mx-2">
						{meal.instructions.map((step, index) => (
							<View key={index} className="flex-row mb-4">
								<View className="w-6 h-6 rounded-full bg-primary mr-3 items-center justify-center">
									<Text
										className="text-white"
										style={{
											fontFamily: "WorkSansBold",
											fontSize: 12,
										}}
									>
										{index + 1}
									</Text>
								</View>
								<Text
									className="flex-1"
									style={{
										fontFamily: "WorkSansRegular",
										fontSize: 16,
										color: "#3e3e3e",
									}}
								>
									{step}
								</Text>
							</View>
						))}
					</View>
				);

			case "nutrition":
				return (
					<View className="mt-4 mx-2">
						<View className="flex-row justify-between py-3 border-b border-gray-100">
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									color: "#8C8CA1",
								}}
							>
								Calories
							</Text>
							<Text
								style={{
									fontFamily: "WorkSansBold",
									color: "#3e3e3e",
								}}
							>
								{meal.nutrition_info.calories}
							</Text>
						</View>
						<View className="flex-row justify-between py-3 border-b border-gray-100">
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									color: "#8C8CA1",
								}}
							>
								Protein
							</Text>
							<Text
								style={{
									fontFamily: "WorkSansBold",
									color: "#3e3e3e",
								}}
							>
								{meal.nutrition_info.protein}
							</Text>
						</View>
						<View className="flex-row justify-between py-3 border-b border-gray-100">
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									color: "#8C8CA1",
								}}
							>
								Carbs
							</Text>
							<Text
								style={{
									fontFamily: "WorkSansBold",
									color: "#3e3e3e",
								}}
							>
								{meal.nutrition_info.carbs}
							</Text>
						</View>
						<View className="flex-row justify-between py-3 border-b border-gray-100">
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									color: "#8C8CA1",
								}}
							>
								Fat
							</Text>
							<Text
								style={{
									fontFamily: "WorkSansBold",
									color: "#3e3e3e",
								}}
							>
								{meal.nutrition_info.fat}
							</Text>
						</View>
						<View className="flex-row justify-between py-3">
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									color: "#8C8CA1",
								}}
							>
								Fiber
							</Text>
							<Text
								style={{
									fontFamily: "WorkSansBold",
									color: "#3e3e3e",
								}}
							>
								{meal.nutrition_info.fiber}
							</Text>
						</View>
					</View>
				);

			default:
				return null;
		}
	};

	return (
		<View className="flex-1 bg-white">
			<ScrollView className="flex-1 px-5 pb-20">
				{/* Header */}
				<View className="flex-row items-center justify-center mb-10 mt-10">
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
						Recipes
					</Text>
				</View>

				{/* Recipe Image */}
				<View className="w-full h-64 rounded-xl overflow-hidden">
					<Image
						source={meal.image}
						className="w-full h-full"
						resizeMode="cover"
					/>
				</View>

				{/* Recipe Title and Time */}
				<View className="flex-row justify-between items-center mt-4">
					<Text
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 24,
							color: "#FF7A6C",
						}}
					>
						{meal.name}
					</Text>
					<View className="flex-row items-center">
						<MaterialIcons
							name="access-time"
							size={18}
							color="#8C8CA1"
						/>
						<Text
							className="ml-1"
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 14,
								color: "#8C8CA1",
							}}
						>
							{meal.time}
						</Text>
					</View>
				</View>

				{/* Description */}
				<Text
					className="mt-4"
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						color: "#3e3e3e",
					}}
				>
					{meal.description}
				</Text>

				{/* Tabs */}
				<View className="flex-row justify-between mt-6 border-b border-gray-100 mx-2">
					{["ingredients", "instructions", "nutrition"].map((tab) => (
						<TouchableOpacity
							key={tab}
							className={`pb-3 ${
								activeTab === tab
									? "border-b-2 border-primary"
									: ""
							}`}
							onPress={() => setActiveTab(tab)}
						>
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 16,
									color:
										activeTab === tab
											? "#FF7A6C"
											: "#8C8CA1",
								}}
							>
								{tab.charAt(0).toUpperCase() + tab.slice(1)}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Tab Content */}
				{renderTabContent()}
				<View className="px-6 mb-80 mt-20">
					<TouchableOpacity
						className="bg-[#FF7A6C] py-3"
						activeOpacity={0.8}
						style={{ borderRadius: 18 }}
						onPress={() => {
							navigation.navigate("MainApp", {
								screen: "Shopping",
							});
						}}
					>
						<Text
							style={{
								fontFamily: "WorkSansMedium",
								fontSize: 20,
								color: "white",
								textAlign: "center",
							}}
						>
							Buy Missing Ingredients
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default RecipeDetailsScreen;

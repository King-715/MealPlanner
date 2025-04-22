import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";
import useMealPlanStore from "../../store/mealPlanStore";

const MealPlanningScreen = () => {
	const navigation = useNavigation();
	const {
		mealAmount,
		planLength,
		selectedDay,
		selectedMealType,
		mealPlan,
		totalMeals,
		setSelectedDay,
		setSelectedMealType,
		updateMealPlan,
		getMaxPossibleMeals,
	} = useMealPlanStore();

	let [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	// Set default day when component mounts
	useEffect(() => {
		if (selectedDay === null) {
			setSelectedDay(0); // Set to first day (Monday)
		}
	}, []);

	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const allMealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
	const mealTypes = allMealTypes.slice(0, mealAmount);
	const maxPossibleMeals = getMaxPossibleMeals();

	const handleDaySelect = (dayId) => {
		setSelectedDay(dayId);
	};

	const handleMealSelect = (mealType) => {
		setSelectedMealType(mealType);
		navigation.navigate("SuggestedRecipes");
	};

	const handleSave = () => {
		navigation.navigate("FinalScreen", {
			mealAmount,
			planLength,
			mealPlan,
			totalMeals,
		});
	};

	const getSelectedMealText = (type) => {
		const dayKey = `day${selectedDay}`;
		const mealKey = type.toLowerCase();
		const selectedMeal = mealPlan[dayKey]?.[mealKey];

		if (Array.isArray(selectedMeal) && selectedMeal.length > 0) {
			return selectedMeal.map((recipe) => recipe.name).join(", ");
		}
		return `Add ${type}`;
	};

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
			<View className="bg-white rounded-xl shadow-sm p-4 mb-6 mx-16 rounded-xl">
				<Text
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 24,
						color: "#3e3e3e",
					}}
					className="mb-4 mx-2 mt-3"
				>
					My Mealplan
				</Text>

				<View>
					<View className="mx-2 mb-2">
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 16,
								color: "#8C8CA1",
							}}
						>
							Meals per day
						</Text>
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 17,
								color: "#3e3e3e",
								marginTop: 2,
							}}
						>
							{mealAmount} meals
						</Text>
					</View>
					<View className="mx-2 mb-2">
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 16,
								color: "#8C8CA1",
							}}
						>
							Plan length
						</Text>
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 17,
								color: "#3e3e3e",
								marginTop: 2,
							}}
						>
							{planLength} week{planLength > 1 ? "s" : ""}
						</Text>
					</View>
					<View className="mx-2 mb-2">
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 16,
								color: "#8C8CA1",
							}}
						>
							Total selected meals
						</Text>
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 17,
								color: "#3e3e3e",
								marginTop: 4,
							}}
						>
							{totalMeals} of {maxPossibleMeals} meals
						</Text>
					</View>
				</View>
			</View>
			{/* Main Content */}
			<View className=" mb-6 mx-4 rounded-xl">
				{/* Description */}

				<View className="mb-6">
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						className="px-4"
					>
						{days.map((_, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => handleDaySelect(index)}
								className={`w-16 h-16 rounded-full mx-2 justify-center items-center ${
									selectedDay === index
										? "bg-[#4CA034]"
										: "bg-[#F2FAF0]"
								}`}
							>
								<Text
									style={{
										fontFamily: "WorkSansSemiBold",
										fontSize: 16,
										color:
											selectedDay === index
												? "white"
												: "#8C8CA1",
									}}
								>
									{index + 1}
								</Text>
								<Text
									style={{
										fontFamily: "WorkSansSemiBold",
										fontSize: 16,
										color:
											selectedDay === index
												? "white"
												: "#8C8CA1",
									}}
								>
									{days[index]}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
				<View className="px-6 mb-6">
					{mealTypes.map((type, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => handleMealSelect(type)}
							className="bg-white shadow-sm border-2 border-[#F2FAF0] rounded-lg p-4 mb-3"
						>
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 16,
									color: "#3e3e3e",
								}}
							>
								{getSelectedMealText(type)}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>

			{/* Continue Button */}
			<TouchableOpacity
				className="bg-[#FF7A6C] py-4 rounded-xl items-center justify-center mt-10 mx-20"
				onPress={handleSave}
			>
				<Text
					style={{ fontFamily: "WorkSansBold", fontSize: 20 }}
					className="text-white"
				>
					Save and continue
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MealPlanningScreen;

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";
import useMealPlanStore from "../../store/mealPlanStore";

const FinalPlanningScreen = () => {
	const navigation = useNavigation();
	const { mealAmount, planLength, totalMeals, clearMealPlan } =
		useMealPlanStore();
	let [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	const handleSave = () => {
		clearMealPlan();
		navigation.navigate("MainApp", {
			screen: "Shopping",
		});
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
							Total meals
						</Text>
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 17,
								color: "#3e3e3e",
								marginTop: 4,
							}}
						>
							{totalMeals} meals
						</Text>
					</View>
				</View>
			</View>
			{/* Main Content */}
			<View className="items-center justify-center px-6 mb-6 mx-16">
				<Text
					style={{
						fontFamily: "WorkSansSemiBold",
						fontSize: 18,
						color: "#3e3e3e",
						marginTop: 10,
						marginBottom: 30,
					}}
				>
					Ingredients for {totalMeals} meals will be added to your
					Shopping list.
				</Text>
				<Image
					source={require("../../../assets/images/plan/shopping-basket.png")}
					className="w-30 h-30"
					resizeMode="contain"
				/>
			</View>

			{/* Continue Button */}
			<TouchableOpacity
				className="bg-[#FF7A6C] py-4 rounded-xl items-center justify-center mt-10 mx-40"
				onPress={handleSave}
			>
				<Text
					style={{ fontFamily: "WorkSansBold", fontSize: 20 }}
					className="text-white"
				>
					Confirm
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default FinalPlanningScreen;

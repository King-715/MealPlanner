import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";
import useMealPlanStore from "../../store/mealPlanStore";

const PlanScreen = () => {
	const navigation = useNavigation();
	const {
		mealAmount,
		planLength,
		setMealAmount,
		setPlanLength,
		clearMealPlan,
	} = useMealPlanStore();
	let [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	// Clear meal plan when entering this screen
	React.useEffect(() => {
		clearMealPlan();
	}, []);

	const handleMealAmountChange = (amount) => {
		setMealAmount(amount);
		clearMealPlan(); // Reset all state when meal amount changes
	};

	const handlePlanLengthChange = (length) => {
		setPlanLength(length);
		clearMealPlan(); // Reset all state when plan length changes
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
			<View className="flex-row items-center justify-center mb-20 mt-10">
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

			{/* Main Content */}
			<View className="bg-white rounded-xl shadow-sm p-4 mb-6 mt-10 mx-10 rounded-xl">
				<Text
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 24,
						color: "#3e3e3e",
					}}
					className="mx-2 mb-6 mt-3"
				>
					My Mealplan
				</Text>

				{/* Description */}
				<View>
					<Text
						className="mx-2 mb-3"
						style={{
							fontFamily: "WorkSansSemiBold",
							fontSize: 16,
							color: "#8C8CA1",
						}}
					>
						Description
					</Text>
					<Text
						className="mx-2 mb-3"
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 17,
							color: "#3e3e3e",
						}}
					>
						Thin and lean. Plan for a 'skinny guy' who has a hard
						time gaining weight.
					</Text>
				</View>

				{/* Meal Amount Picker */}
				<View className="mb-6 mx-2">
					<Text
						style={{
							fontFamily: "WorkSansSemiBold",
							fontSize: 17,
							color: "#3e3e3e",
						}}
						className="mb-2"
					>
						Amount of meals
					</Text>

					<View className="border-2 border-gray-300 rounded-lg bg-white overflow-show">
						<Picker
							selectedValue={mealAmount}
							onValueChange={handleMealAmountChange}
							dropdownIconColor="#FF7A6C"
							mode="dropdown"
							style={{ height: 50 }}
						>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="1 meal a day"
								value={1}
							/>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="2 meals a day"
								value={2}
							/>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="3 meals a day"
								value={3}
							/>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="4 meals a day"
								value={4}
							/>
						</Picker>
					</View>
				</View>

				{/* Plan Length Picker */}
				<View className="mb-8 mx-2">
					<Text
						style={{
							fontFamily: "WorkSansSemiBold",
							fontSize: 17,
							color: "#3e3e3e",
						}}
						className="mb-2"
					>
						Plan length
					</Text>
					<View className="border-2 border-gray-300 rounded-lg bg-white overflow-hidden">
						<Picker
							selectedValue={planLength}
							onValueChange={handlePlanLengthChange}
							dropdownIconColor="#FF7A6C"
							mode="dropdown"
							style={{ height: 50 }}
						>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="1 week"
								value={1}
							/>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="2 weeks"
								value={2}
							/>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="3 weeks"
								value={3}
							/>
							<Picker.Item
								style={{
									fontFamily: "WorkSansMedium",
									fontSize: 14,
								}}
								label="4 weeks"
								value={4}
							/>
						</Picker>
					</View>
				</View>
			</View>

			{/* Continue Button */}
			<TouchableOpacity
				className="bg-[#FF7A6C] py-4 rounded-xl items-center justify-center mt-10 mx-20"
				onPress={() => navigation.navigate("MealPlanning")}
			>
				<Text
					style={{ fontFamily: "WorkSansBold" }}
					className="text-white text-lg"
				>
					CONTINUE
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default PlanScreen;

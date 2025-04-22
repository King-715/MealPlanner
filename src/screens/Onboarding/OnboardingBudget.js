import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingBudget = () => {
	const navigation = useNavigation();
	const [selectedPlan, setSelectedPlan] = useState("week");
	const [weeklyBudget, setWeeklyBudget] = useState("200");
	const [monthlyBudget, setMonthlyBudget] = useState("800");

	const mealImages = [
		require("../../../assets/images/diet-type/image1.png"),
		require("../../../assets/images/diet-type/image2.png"),
		require("../../../assets/images/diet-type/image3.png"),
		require("../../../assets/images/diet-type/image4.png"),
	];

	return (
		<ScrollView className="flex-1 bg-white px-5">
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
					Cuokka
				</Text>
			</View>

			{/* Main Question */}
			<Text
				className="text-center  mb-4"
				style={{
					fontFamily: "WorkSansBold",
					fontSize: 28,
					color: "#FF7A6C",
				}}
			>
				Choose budget
			</Text>

			{/* Budget Description */}
			<Text className="text-base text-gray-600 text-center mb-6 px-5">
				Set your food budget to get personalized meal recommendations
			</Text>

			{/* Meal Images Grid */}
			<View className="flex-row flex-wrap justify-between mb-8">
				{mealImages.map((image, index) => (
					<View
						key={index}
						className="w-[48%] h-40 mb-4 rounded-xl overflow-hidden shadow-md"
					>
						<Image
							source={image}
							className="w-full h-full"
							resizeMode="cover"
						/>
					</View>
				))}
			</View>

			{/* Budget Options */}
			<View className="mb-6">
				{/* Weekly Plan */}
				<TouchableOpacity
					className={`flex-row items-center p-4 mb-4 rounded-xl bg-gray-50 border-2 ${
						selectedPlan === "week"
							? "border-green-500"
							: "border-gray-200"
					}`}
					onPress={() => setSelectedPlan("week")}
				>
					<View
						className={`w-5 h-5 rounded-full mr-3 border-2 ${
							selectedPlan === "week"
								? "border-green-500 justify-center items-center"
								: "border-gray-400"
						}`}
					>
						{selectedPlan === "week" && (
							<View className="w-3 h-3 rounded-full bg-green-500" />
						)}
					</View>
					<Text className="text-base text-gray-800 mr-2">
						Weekly Plan:
					</Text>
					
					<TextInput
						className="text-base font-bold text-[#FF746A] w-16 border-b-2 border-[#FF746A] text-center pb-1"
						value={weeklyBudget}
						onChangeText={setWeeklyBudget}
						keyboardType="numeric"
						placeholder="200"
					/>
					<Text className="text-base text-gray-800 ml-2">USD</Text>
				</TouchableOpacity>
				{/* Monthly Plan */}
				<TouchableOpacity
					className={`flex-row items-center p-4 rounded-xl bg-gray-50 border-2 ${
						selectedPlan === "month"
							? "border-green-500"
							: "border-gray-200"
					}`}
					onPress={() => setSelectedPlan("month")}
				>
					<View
						className={`w-5 h-5 rounded-full mr-3 border-2 ${
							selectedPlan === "month"
								? "border-green-500 justify-center items-center"
								: "border-gray-400"
						}`}
					>
						{selectedPlan === "month" && (
							<View className="w-3 h-3 rounded-full bg-green-500" />
						)}
					</View>
					<Text className="text-base text-gray-800 mr-2">
						Monthly Plan:
					</Text>
					<TextInput
						className="text-base font-bold text-[#FF746A] w-16 border-b-2 border-[#FF746A] text-center pb-1"
						value={monthlyBudget}
						onChangeText={setMonthlyBudget}
						keyboardType="numeric"
						placeholder="800"
					/>
					<Text className="text-base text-gray-800 ml-2">USD</Text>
				</TouchableOpacity>
			</View>

			{/* Budget Tips */}
			<View className="bg-blue-50 p-4 rounded-lg mb-8 border border-blue-100">
				<Text className="text-blue-800 font-medium mb-2">
					💡 Budget Tips
				</Text>
				<Text className="text-blue-700 text-sm mb-1">
					• Healthy eating can cost as little as $50-$75 per week
				</Text>
				<Text className="text-blue-700 text-sm">
					• Buying in bulk and meal planning saves money
				</Text>
			</View>

			{/* Continue Button */}
			<TouchableOpacity
				className="bg-[#FF7A6C] py-4 rounded-full items-center shadow-md mb-10"
				onPress={() => navigation.navigate("Home")}
			>
				<Text className="text-white text-lg font-bold">CONTINUE</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default OnboardingBudget;

import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";

const OnboardingDietGoal = () => {
	const navigation = useNavigation();
	const [selectedGoal, setSelectedGoal] = useState(null);
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

	const dietGoals = [
		{
			id: 1,
			title: "Get inspiration",
			description: "Challenge your taste buds",
		},
		{
			id: 2,
			title: "Eat healthy",
			description: "Have balanced diet and stay lean",
		},
		{
			id: 3,
			title: "Lose weight",
			description: "Burn fat and build muscle",
		},
		{
			id: 4,
			title: "Gain weight",
			description: "Build muscle and gain weight",
		},
	];

	const handleGoalSelect = (goalId) => {
		setSelectedGoal(goalId);
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
						Cuokka
					</Text>
				</View>

				<View className="flex-row items-center justify-center mb-10">
					<Text
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 28,
							color: "#FF7A6C",
						}}
					>
						Choose your diet goal.
					</Text>
				</View>

				{dietGoals.map((goal) => (
					<TouchableOpacity
						key={goal.id}
						className={`bg-white rounded-xl shadow-sm mb-4 mx-3 flex-row overflow-hidden border-2 ${
							selectedGoal === goal.id
								? "border-green-500"
								: "border-gray-100"
						}`}
						onPress={() => handleGoalSelect(goal.id)}
					>
						<View className="flex-1 p-3 justify-between">
							<View className="flex-row justify-between items-center">
								<Text
									style={{
										fontFamily: "WorkSansBold",
										fontSize: 20,
										opacity: 0.8,
									}}
								>
									{goal.title}
								</Text>
								{selectedGoal === goal.id && (
									<Text className="text-green-500 text-xl">
										✓
									</Text>
								)}
							</View>
							<View className="flex-row justify-between mt-2 mb-3">
								<Text
									style={{
										fontFamily: "WorkSansSemiBold",
										fontSize: 16,
										opacity: 0.8,
									}}
								>
									{goal.description}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}

				<TouchableOpacity
					className={`py-3 rounded-xl mx-40 mt-10 ${
						selectedGoal ? "bg-[#FF7A6C]" : "bg-gray-400"
					}`}
					onPress={() => {
						if (selectedGoal) {
							navigation.navigate("DietType");
						}
					}}
					disabled={!selectedGoal}
				>
					<Text className="text-white text-center font-bold text-lg">
						Next
					</Text>
				</TouchableOpacity>
			</ScrollView>

			<View className="absolute bottom-8 left-0 right-0 flex-row justify-center z-20">
				<View className="w-4 h-4 rounded-full bg-green-500 border border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
			</View>
		</View>
	);
};

export default OnboardingDietGoal;

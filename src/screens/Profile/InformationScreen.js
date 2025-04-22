import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";

const InformationScreen = () => {
	const [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	if (!fontsLoaded) {
		return (
			<View className="flex-1 justify-center items-center">
				<Text>Loading...</Text>
			</View>
		);
	}

	// Content data for reusable sections
	const sections = [
		{
			title: "About Cuokka",
			content:
				"Cuokka is your personalized meal planning assistant, designed to make healthy eating, budgeting, and grocery shopping easier than ever. Whether you're looking to maintain a balanced diet, save money on groceries, or simplify your cooking routine, Cuokka provides smart meal recommendations, pantry tracking, and grocery list automation—all in one place!",
		},
		{
			title: "Our Mission",
			content:
				"Our mission is to help you achieve your health goals through personalized meal planning and grocery list automation. We believe in the power of smart, nutritious eating to improve your overall well-being.",
		},
		{
			title: "Contact Information",
			content:
				"Have questions or feedback? Reach out to us at support@cuokka.com. We'd love to hear from you!",
		},
	];

	const stats = [
		{ label: "Version: 1.0.0" },
		{ label: "Developer: Simone" },
		{ label: "Contact: simone@cuokka.com" },
	];

	return (
		<View className="flex-1 bg-white p-4">
			{/* Header */}
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

			{/* Content Sections */}
			{sections.map((section, index) => (
				<View
					key={index}
					className="mb-4 p-4 border-2 border-black rounded-xl"
				>
					<Text
						style={{
							fontFamily: "WorkSansSemiBold",
							fontSize: 20,
							marginBottom: 8,
						}}
					>
						{section.title}
					</Text>
					<Text
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 16,
							color: "#4B5563",
							lineHeight: 22,
						}}
					>
						{section.content}
					</Text>
				</View>
			))}

			{/* Statistics Section */}
			<View className="mb-4 p-4 border-2 border-black rounded-xl">
				<Text
					style={{
						fontFamily: "WorkSansSemiBold",
						fontSize: 20,
						marginBottom: 12,
					}}
				>
					App Information
				</Text>
				{stats.map((stat, index) => (
					<View key={index} className="py-1">
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 16,
								color: "#4B5563",
							}}
						>
							{stat.label}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
};

export default InformationScreen;

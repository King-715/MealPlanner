import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";

const OnboardingGastronomy = () => {
	const navigation = useNavigation();
	const [selectedOptions, setSelectedOptions] = useState({
		cookingStyle: [],
		flavours: [],
		cuisines: [],
	});

	let [fontsLoaded] = useFonts({
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
		WorkSansBold: WorkSans_700Bold,
	});

	const preferences = {
		cookingStyle: [
			"Grilled",
			"Baked",
			"No-Cook",
			"Instant Pot",
			"Air Fryer",
			"Fry",
			"One-Pan",
			"Slow Cooker",
		],
		flavours: [
			"Sweet",
			"Spicy",
			"Savory",
			"Tangy",
			"Umami",
			"Herby",
			"Smoky",
			"Citrusy",
		],
		cuisines: [
			"Italian",
			"Mexican",
			"Japanese",
			"Indian",
			"Mediterranean",
			"Thai",
			"French",
			"Eastern",
		],
	};

	const toggleOption = (category, option) => {
		setSelectedOptions((prev) => {
			const currentOptions = [...prev[category]];
			const index = currentOptions.indexOf(option);

			if (index === -1) {
				currentOptions.push(option);
			} else {
				currentOptions.splice(index, 1);
			}

			return {
				...prev,
				[category]: currentOptions,
			};
		});
	};

	// Check if at least one option is selected in each category
	const isSelectionComplete = () => {
		return (
			selectedOptions.cookingStyle.length > 0 &&
			selectedOptions.flavours.length > 0 &&
			selectedOptions.cuisines.length > 0
		);
	};

	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<View className="flex-1 bg-white px-5">
			{/* Header with Logo */}
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

			{/* Main Question */}
			<Text
				style={{
					fontFamily: "WorkSansBold",
					fontSize: 28,
					color: "#FF7A6C",
				}}
				className="text-center mb-8"
			>
				What's your Gastronomy?
			</Text>

			<ScrollView
				className="flex-1"
				contentContainerStyle={{ paddingBottom: 80 }}
			>
				{/* Cooking Style */}
				<Text
					style={{ fontFamily: "WorkSansSemiBold", opacity: 0.7 }}
					className="text-xl mt-5 mb-3 ml-1"
				>
					Cooking style
				</Text>
				<View className="flex-row flex-wrap justify-between mb-4">
					{preferences.cookingStyle.map((item, index) => (
						<TouchableOpacity
							key={`cooking-${index}`}
							className={`py-2 px-4 m-1 rounded-full ${
								selectedOptions.cookingStyle.includes(item)
									? "bg-[#FF746A]"
									: "bg-gray-100"
							} shadow-sm`}
							onPress={() => toggleOption("cookingStyle", item)}
						>
							<Text
								className={`text-lg font-medium ${
									selectedOptions.cookingStyle.includes(item)
										? "text-white"
										: "text-[#FF746A]"
								}`}
							>
								{item}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Flavours */}
				<Text
					style={{ fontFamily: "WorkSansSemiBold", opacity: 0.7 }}
					className="text-xl mt-5 mb-3 ml-1"
				>
					Flavours
				</Text>
				<View className="flex-row flex-wrap justify-between mb-4">
					{preferences.flavours.map((item, index) => (
						<TouchableOpacity
							key={`flavour-${index}`}
							className={`py-2 px-4 m-1 rounded-full ${
								selectedOptions.flavours.includes(item)
									? "bg-[#FF746A]"
									: "bg-gray-100"
							} shadow-sm`}
							onPress={() => toggleOption("flavours", item)}
						>
							<Text
								className={`text-lg font-medium ${
									selectedOptions.flavours.includes(item)
										? "text-white"
										: "text-[#FF746A]"
								}`}
							>
								{item}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Cuisines */}
				<Text
					style={{ fontFamily: "WorkSansSemiBold", opacity: 0.7 }}
					className="text-xl mt-5 mb-3 ml-1"
				>
					Cuisines
				</Text>
				<View className="flex-row flex-wrap justify-between mb-4">
					{preferences.cuisines.map((item, index) => (
						<TouchableOpacity
							key={`cuisine-${index}`}
							className={`py-2 px-4 m-1 rounded-full ${
								selectedOptions.cuisines.includes(item)
									? "bg-[#FF746A]"
									: "bg-gray-100"
							} shadow-sm`}
							onPress={() => toggleOption("cuisines", item)}
						>
							<Text
								className={`text-lg font-medium ${
									selectedOptions.cuisines.includes(item)
										? "text-white"
										: "text-[#FF746A]"
								}`}
							>
								{item}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Next Button */}
				<TouchableOpacity
					className={`py-3 rounded-xl mx-40 mt-40 ${
						isSelectionComplete() ? "bg-[#FF7A6C]" : "bg-gray-400"
					}`}
					onPress={() => {
						if (isSelectionComplete()) {
							navigation.navigate("Allergies"); // Update with your next screen
						}
					}}
					disabled={!isSelectionComplete()}
				>
					<Text className="text-white text-center font-bold text-lg">
						Next
					</Text>
				</TouchableOpacity>
			</ScrollView>

			{/* Navigation Indicators */}
			<View className="absolute bottom-8 left-0 right-0 flex-row justify-center z-20">
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-green-500 border border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
			</View>
		</View>
	);
};

export default OnboardingGastronomy;

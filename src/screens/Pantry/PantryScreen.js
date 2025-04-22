import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";

const PantryScreen = () => {
	const navigation = useNavigation();
	// Load WorkSans font
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
	const suggestedItems = [
		{
			name: "Vegetables",
			image: require("../../../assets/images/pantry/vegetables.png"),
		},
		{
			name: "Meats",
			image: require("../../../assets/images/pantry/meats.png"),
		},
		{
			name: "Fish",
			image: require("../../../assets/images/pantry/fish.png"),
		},
		{
			name: "Fruits",
			image: require("../../../assets/images/pantry/fruits.png"),
		},
	];

	return (
		<View className="flex-1 bg-white p-6">
			<View className="flex-row items-center justify-center mt-8 mx-6">
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
					Pantry Manager
				</Text>
			</View>

			{/* Pantry Image */}
			<View className="flex items-center justify-center p-4 mb-6 mt-10">
				<Image
					source={require("../../../assets/images/pantry/pantry-visual.png")}
					className="w-48 h-48 rounded-lg"
					resizeMode="contain"
				/>
			</View>

			{/* Subtitle */}
			<Text
				className="text-lg text-center text-black mb-8 mx-10"
				style={{ fontFamily: "WorkSansMedium" }}
			>
				Get started by adding products to manage your pantry.
			</Text>

			{/* Action Buttons */}
			<View className="mb-10">
				<TouchableOpacity
					className="py-4 rounded-full mb-6 mx-20"
					style={{ backgroundColor: "#FF7A6C" }}
					onPress={() => navigation.navigate("AddProducts")}
				>
					<Text className="text-white text-center font-bold text-lg">
						Add Products
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className="py-4 rounded-full mb-6 mx-20"
					style={{ backgroundColor: "#FF7A6C" }}
					onPress={() => navigation.navigate("ScanProducts")}
				>
					<Text className="text-white text-center font-bold text-lg">
						Scan Products
					</Text>
				</TouchableOpacity>
			</View>

			{/* Suggested Items Section */}
			<View className="flex-row items-center justify-between">
				<Text className="text-xl font-bold mb-4 text-gray-800">
					Suggested Items
				</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("AllPantry")}
				>
					<Text className="text-xl font-bold mb-4 text-gray-800">
						View All
					</Text>
				</TouchableOpacity>
			</View>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className="mb-6"
			>
				{suggestedItems.map((item, index) => (
					<TouchableOpacity key={index} className="mr-4">
						<View className="border-2 border-gray-200 p-4 rounded-xl w-24 h-32 justify-center items-center">
							<Image
								source={item.image}
								className="w-20 h-20"
								resizeMode="contain"
							/>
						</View>
						<Text
							className="text-center mt-2"
							style={{
								fontFamily: "WorkSansBold",
								opacity: 0.75,
							}}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

export default PantryScreen;

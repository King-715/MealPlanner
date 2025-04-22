import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useRoute } from "@react-navigation/native";

const ShoppingListsScreen = () => {
	const route = useRoute();
	const { items } = route.params || { items: [] };
	console.log(items);

	// Load Woconst [items, setItems] = useState(initialItems);rkSans font

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

	// Function to update quantity

	return (
		<View className="flex-1 bg-white">
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
					Stores
				</Text>
			</View>

			<View>
				<Image
					source={require("../../../assets/images/shopping/ShoppingStore.png")}
					className="w-full h-100"
					resizeMode="contain"
				/>
				<View className="p-6 ">
					<Text
						className="mb-2"
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 24,
							color: "#FF7A6C",
						}}
					>
						Shopping List
					</Text>

					{items.map((item) => (
						<View key={item.id} className="ml-4">
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 16,
									color: "#3e3e3e",
								}}
							>
								{item.name} {item.weight}g
							</Text>
						</View>
					))}
					<Text
						className="mt-2"
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 24,
							color: "#FF7A6C",
						}}
					>
						Total: $500.00
					</Text>
				</View>
			</View>
			<View className="px-6 pb-8">
				<TouchableOpacity
					className="bg-[#FF7A6C] py-3 mx-20"
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
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
		</View>
	);
};

export default ShoppingListsScreen;

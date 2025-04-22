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
import { useNavigation } from "@react-navigation/native";

const ShoppingStore = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const { items } = route.params || { items: [] };

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
					Stores
				</Text>
			</View>

			{/* Shopping List Grid */}
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("ShoppingListsScreen", {
							items: items,
						})
					}
				>
					<View className="flex-row items-center justify-center">
						<Image
							source={require("../../../assets/images/shopping/map.png")}
							style={{ width: 600, height: 1000 }}
							resizeMode="contain"
						/>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default ShoppingStore;

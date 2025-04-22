import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";

const initialItems = [
	{
		id: 1,
    name: "Carrot",
    category: "Vegetables",
		image: require("../../../assets/images/shopping/carrot.png"),
		quantity: 1,
		weight: 130,
	},
	{
		id: 2,
		name: "Egg",
    category: "Meats",
		image: require("../../../assets/images/shopping/egg.png"),
		quantity: 6,
		weight: 300,
	},
	{
		id: 3,
		name: "Chicken Breast",
    category: "Meats",
		image: require("../../../assets/images/shopping/chicken.png"),
		quantity: 2,
		weight: 250,
	},
	{
		id: 4,
		name: "Tomato",
    category: "Vegetables",
		image: require("../../../assets/images/shopping/tomato.png"),
		quantity: 4,
		weight: 200,
	},
	{
		id: 5,
		name: "Cheese",
    category: "Vegetables",
		image: require("../../../assets/images/shopping/cheese.png"),
		quantity: 1,
		weight: 150,
	},
	{
		id: 6,
		name: "Ground Beef",
    category: "Meats",
		image: require("../../../assets/images/shopping/beef.png"),
		quantity: 1,
		weight: 400,
	},
	{
		id: 7,
		name: "Pork",
    category: "Meats",
		image: require("../../../assets/images/shopping/pork.png"),
		quantity: 1,
		weight: 350,
	},
	{
		id: 8,
		name: "Potato",
    category: "Vegetables",
		image: require("../../../assets/images/shopping/potato.png"),
		quantity: 5,
		weight: 600,
	},
	{
		id: 9,
		name: "Cheese",
    category: "Fish",
		image: require("../../../assets/images/shopping/cheese.png"),
		quantity: 1,
		weight: 150,
	},
	{
		id: 10,
    name: "Ground Beef",
    category: "Fish",
		image: require("../../../assets/images/shopping/beef.png"),
		quantity: 1,
		weight: 400,
	},
	{
		id: 11,
    name: "Pork",
    category: "Fish",
		image: require("../../../assets/images/shopping/pork.png"),
		quantity: 1,
		weight: 350,
	},
	{
		id: 12,
    name: "Potato",
    category: "Fish",
		image: require("../../../assets/images/shopping/potato.png"),
		quantity: 5,
		weight: 600,
	},
];
const AllPantryScreen = () => {
	const navigation = useNavigation();
	// Load Woconst [items, setItems] = useState(initialItems);rkSans font
	const [items, setItems] = useState(initialItems);
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
	const updateQuantity = (id, change) => {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					const newQuantity = Math.max(0, item.quantity + change);
					return { ...item, quantity: newQuantity };
				}
				return item;
			})
		);
	};

	return (
		<View className="flex-1 bg-white p-4">
			{/* Header */}
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
					Pantry Mananger
				</Text>
			</View>

			{/* Shopping List Grid */}

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className="mb-4">
					<Text
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 24,
							color: "#FF7A6C",
						}}
					>
						Vegetables
					</Text>
				</View>
				<View className="flex-row flex-wrap justify-between mx-2">
          {items.map((item) => (
            item.category === "Vegetables" && (
						<View
							key={item.id}
							className="w-[22%] bg-gray-50 rounded-xl p-2 mb-4 shadow-sm"
							accessibilityLabel={`${item.name} card`}
						>
							{/* Item Image */}
							<Image
								source={item.image}
								className="w-full h-20 rounded-lg"
								resizeMode="contain"
								accessibilityLabel={item.name}
							/>

							{/* Item Name */}
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 10,
									color: "#000000",
									opacity: 0.5,
								}}
							>
								{item.name}
							</Text>
							<View className="flex-row justify-center items-center">
								<TouchableOpacity
									onPress={() => updateQuantity(item.id, -1)}
									accessibilityLabel={`decrease ${item.name} quantity`}
								>
									<Image
										source={require("../../../assets/images/shopping/minus.png")}
										className="w-4 h-4"
										resizeMode="contain"
									/>
								</TouchableOpacity>

								<Text
									className="mx-4"
									style={{
										fontFamily: "WorkSansBold",
										fontSize: 15,
										color: "#000000",
									}}
								>
									{item.quantity}
								</Text>

								<TouchableOpacity
									onPress={() => updateQuantity(item.id, 1)}
									accessibilityLabel={`Increase ${item.name} quantity`}
								>
									<Image
										source={require("../../../assets/images/shopping/plus.png")}
										className="w-4 h-4"
										resizeMode="contain"
									/>
								</TouchableOpacity>
							</View>

							{/* Quantity and Weight */}
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 10,
									color: "#000000",
									opacity: 0.5,
								}}
							>
								{item.quantity * item.weight}g
							</Text>

							{/* Quantity Controls */}
						</View>
            )
          ))}
				</View>
				<View className="mb-4">
					<Text
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 24,
							color: "#FF7A6C",
						}}
					>
						Meats
					</Text>
				</View>
				<View className="flex-row flex-wrap justify-between mx-2">
          {items.map((item) => (
            item.category === "Meats" && (
						<View
							key={item.id}
							className="w-[22%] bg-gray-50 rounded-xl p-2 mb-4 shadow-sm"
							accessibilityLabel={`${item.name} card`}
						>
							{/* Item Image */}
							<Image
								source={item.image}
								className="w-full h-20 rounded-lg"
								resizeMode="contain"
								accessibilityLabel={item.name}
							/>

							{/* Item Name */}
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 10,
									color: "#000000",
									opacity: 0.5,
								}}
							>
								{item.name}
							</Text>
							<View className="flex-row justify-center items-center">
								<TouchableOpacity
									onPress={() => updateQuantity(item.id, -1)}
									accessibilityLabel={`decrease ${item.name} quantity`}
								>
									<Image
										source={require("../../../assets/images/shopping/minus.png")}
										className="w-4 h-4"
										resizeMode="contain"
									/>
								</TouchableOpacity>

								<Text
									className="mx-4"
									style={{
										fontFamily: "WorkSansBold",
										fontSize: 15,
										color: "#000000",
									}}
								>
									{item.quantity}
								</Text>

								<TouchableOpacity
									onPress={() => updateQuantity(item.id, 1)}
									accessibilityLabel={`Increase ${item.name} quantity`}
								>
									<Image
										source={require("../../../assets/images/shopping/plus.png")}
										className="w-4 h-4"
										resizeMode="contain"
									/>
								</TouchableOpacity>
							</View>

							{/* Quantity and Weight */}
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 10,
									color: "#000000",
									opacity: 0.5,
								}}
							>
								{item.quantity * item.weight}g
							</Text>

							{/* Quantity Controls */}
						</View>
            )
          ))}
				</View>
				<View className="mb-4">
					<Text
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 24,
							color: "#FF7A6C",
						}}
					>
						Fish
					</Text>
				</View>
				<View className="flex-row flex-wrap justify-between mx-2">
          {items.map((item) => (
            item.category === "Fish" && (
						<View
							key={item.id}
							className="w-[22%] bg-gray-50 rounded-xl p-2 mb-4 shadow-sm"
							accessibilityLabel={`${item.name} card`}
						>
							{/* Item Image */}
							<Image
								source={item.image}
								className="w-full h-20 rounded-lg"
								resizeMode="contain"
								accessibilityLabel={item.name}
							/>

							{/* Item Name */}
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 10,
									color: "#000000",
									opacity: 0.5,
								}}
							>
								{item.name}
							</Text>
							<View className="flex-row justify-center items-center">
								<TouchableOpacity
									onPress={() => updateQuantity(item.id, -1)}
									accessibilityLabel={`decrease ${item.name} quantity`}
								>
									<Image
										source={require("../../../assets/images/shopping/minus.png")}
										className="w-4 h-4"
										resizeMode="contain"
									/>
								</TouchableOpacity>

								<Text
									className="mx-4"
									style={{
										fontFamily: "WorkSansBold",
										fontSize: 15,
										color: "#000000",
									}}
								>
									{item.quantity}
								</Text>

								<TouchableOpacity
									onPress={() => updateQuantity(item.id, 1)}
									accessibilityLabel={`Increase ${item.name} quantity`}
								>
									<Image
										source={require("../../../assets/images/shopping/plus.png")}
										className="w-4 h-4"
										resizeMode="contain"
									/>
								</TouchableOpacity>
							</View>

							{/* Quantity and Weight */}
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 10,
									color: "#000000",
									opacity: 0.5,
								}}
							>
								{item.quantity * item.weight}g
							</Text>

							{/* Quantity Controls */}
						</View>
            )
          ))}
        </View>
        

				<View className="pb-8">
					<TouchableOpacity
						className="bg-[#FF7A6C] py-3"
						activeOpacity={0.8}
						style={{ borderRadius: 18 }}
						onPress={() => navigation.navigate("Home")}
					>
						<Text
							style={{
								fontFamily: "WorkSansMedium",
								fontSize: 24,
								color: "white",
								textAlign: "center",
							}}
						>
							Update
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default AllPantryScreen;

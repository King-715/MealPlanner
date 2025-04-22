import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingAllergies = () => {
	const navigation = useNavigation();
	const [selectedAllergies, setSelectedAllergies] = useState([]);

	const allergies = [
		{
			id: 1,
			name: "Egg",
			icon: require("../../../assets/images/diet-type/egg.png"),
		},
		{
			id: 2,
			name: "Milk",
			icon: require("../../../assets/images/diet-type/milk.png"),
		},
		{
			id: 3,
			name: "Nut",
			icon: require("../../../assets/images/diet-type/nut.png"),
		},
		{
			id: 4,
			name: "Soybean",
			icon: require("../../../assets/images/diet-type/soybean.png"),
		},
		{
			id: 5,
			name: "Fish",
			icon: require("../../../assets/images/diet-type/fish.png"),
		},
		{
			id: 6,
			name: "Wheat",
			icon: require("../../../assets/images/diet-type/wheat.png"),
		},
		{
			id: 7,
			name: "Celery",
			icon: require("../../../assets/images/diet-type/celery.png"),
		},
		{
			id: 8,
			name: "Crustacean",
			icon: require("../../../assets/images/diet-type/crustacean.png"),
		},
		{
			id: 9,
			name: "Mustard",
			icon: require("../../../assets/images/diet-type/mustard.png"),
		},
	];

	const toggleAllergy = (allergyId) => {
		setSelectedAllergies((prev) =>
			prev.includes(allergyId)
				? prev.filter((id) => id !== allergyId)
				: [...prev, allergyId]
		);
	};

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
				className="text-center mb-20"
				style={{
					fontFamily: "WorkSansBold",
					fontSize: 28,
					color: "#FF7A6C",
				}}
			>
				Any allergies?
			</Text>

			{/* Allergy Options Grid */}
			<ScrollView
				className="flex-1"
				contentContainerStyle={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-between",
					paddingBottom: 80,
				}}
			>
				{allergies.map((allergy) => (
					<TouchableOpacity
						key={allergy.id}
						className="w-1/3 items-center mb-5"
						onPress={() => toggleAllergy(allergy.id)}
					>
						<View
							className={`w-20 h-20 rounded-full justify-center items-center shadow-md ${
								selectedAllergies.includes(allergy.id)
									? "bg-green-500"
									: "bg-gray-100"
							}`}
						>
							<Image
								source={allergy.icon}
								className="w-12 h-12"
								resizeMode="contain"
							/>
						</View>
						<Text className="mt-2 text-[#000000] text-sm font-medium text-center">
							{allergy.name}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>

			{/* Next Button */}
			<TouchableOpacity
				className="py-3 rounded-xl mx-40 mb-60 bg-[#FF7A6C]"
				onPress={() => navigation.navigate("Budget")}
			>
				<Text className="text-white text-center font-bold text-lg">
					Next
				</Text>
			</TouchableOpacity>

			{/* Navigation Indicators */}
			<View className="absolute bottom-8 left-0 right-0 flex-row justify-center z-20">
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-green-500 border border-green-500 mx-3" />
				<View className="w-4 h-4 rounded-full bg-transparent border-2 border-green-500 mx-3" />
			</View>
		</View>
	);
};

export default OnboardingAllergies;

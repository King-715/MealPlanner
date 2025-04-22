import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PremiumScreen() {
	const [selectedPlan, setSelectedPlan] = useState("annual");
	const navigation = useNavigation();

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

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
				{/* Header */}
				<View className="py-8 mb-10">
					<Text
						className="text-center"
						style={{
							fontFamily: "WorkSansBold",
							fontSize: 32,
							color: "#FF7A6C",
						}}
					>
						Get Premium
					</Text>
				</View>

				{/* Subscription Plans - Now in a row */}
				<View className="flex-row justify-center mb-20 px-4">
					{/* Annual Plan */}
					<View className="mx-2">
						<TouchableOpacity
							activeOpacity={0.7}
							className={`bg-white border-2 rounded-lg p-6 w-40 shadow-sm ${
								selectedPlan === "annual"
									? "border-[#FF7A6C]"
									: "border-gray-200"
							}`}
							onPress={() => setSelectedPlan("annual")}
						>
							<Text
								className={` text-center ${
									selectedPlan === "annual"
										? "text-[#FF7A6C]"
										: "text-gray-800"
								}`}
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 24,
								}}
							>
								$1.06
							</Text>
							<Text
								className="text-base text-gray-600 text-center mt-2"
								style={{
									fontFamily: "WorkSansRegular",
									fontSize: 16,
								}}
							>
								weekly
							</Text>
							<Text
								className="text-sm text-gray-500 text-center mt-4"
								style={{
									fontFamily: "WorkSansRegular",
									fontSize: 16,
								}}
							>
								$54.99 /year
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.7}
							className={`py-2 rounded-lg mt-6 ${
								selectedPlan === "annual"
									? "bg-[#FF7A6C]"
									: "bg-gray-100"
							}`}
							onPress={() => setSelectedPlan("annual")}
						>
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 20,
									color:
										selectedPlan === "annual"
											? "white"
											: "gray",
								}}
							>
								Annual
							</Text>
						</TouchableOpacity>
					</View>

					{/* Monthly Plan */}
					<View className="mx-2">
						<TouchableOpacity
							activeOpacity={0.7}
							className={`bg-white border-2 rounded-lg p-6 w-40 shadow-sm ${
								selectedPlan === "monthly"
									? "border-[#FF7A6C]"
									: "border-gray-200"
							}`}
							onPress={() => setSelectedPlan("monthly")}
						>
							<Text
								className={` text-center ${
									selectedPlan === "monthly"
										? "text-[#FF7A6C]"
										: "text-gray-800"
								}`}
								style={{
									fontFamily: "WorkSansBold",
									fontSize: 24,
								}}
							>
								$1.62
							</Text>
							<Text
								className="text-base text-gray-600 text-center mt-2"
								style={{
									fontFamily: "WorkSansRegular",
									fontSize: 16,
								}}
							>
								weekly
							</Text>
							<Text
								className="text-sm text-gray-500 text-center mt-4"
								style={{
									fontFamily: "WorkSansRegular",
									fontSize: 16,
								}}
							>
								$6.49 /month
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.7}
							className={`py-2 rounded-lg mt-6 ${
								selectedPlan === "monthly"
									? "bg-[#FF7A6C]"
									: "bg-gray-100"
							}`}
							onPress={() => setSelectedPlan("monthly")}
						>
							<Text
								className="text-center"
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 20,
									color:
										selectedPlan === "monthly"
											? "white"
											: "gray",
								}}
							>
								Monthly
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Features Section */}
				<View className="px-8 mb-8">
					<View className="space-y-4">
						<View className="flex-row items-center mb-6">
							<Image
								source={require("../../../assets/images/profiles/recipe.png")}
								className="w-10 h-10"
								resizeMode="contain"
							/>
							<Text
								className="ml-3 text-gray-700"
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 20,
								}}
							>
								Premium Plans & Recipes
							</Text>
						</View>

						<View className="flex-row items-center mb-6">
							<Image
								source={require("../../../assets/images/profiles/nutrition.png")}
								className="w-10 h-10"
								resizeMode="contain"
							/>
							<Text
								className="ml-3 text-gray-700"
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 20,
								}}
							>
								Nutritional Consultation Booking
							</Text>
						</View>

						<View className="flex-row items-center mb-10">
							<Image
								source={require("../../../assets/images/profiles/cooking.png")}
								className="w-10 h-10"
								resizeMode="contain"
							/>
							<Text
								className="ml-3 text-gray-700"
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 20,
								}}
							>
								Virtual Cooking Classes
							</Text>
						</View>
					</View>
				</View>

				{/* Get Premium Button */}
				<View className="px-6 pb-8">
					<TouchableOpacity
						activeOpacity={0.7}
						className="bg-[#FF7A6C] py-3"
						style={{ borderRadius: 18 }}
						onPress={() => navigation.navigate("Payment")}
					>
						<Text
							style={{
								fontFamily: "WorkSansSemiBold",
								fontSize: 24,
								color: "white",
								textAlign: "center",
							}}
						>
							Get Premium -{" "}
							{selectedPlan === "annual"
								? "$54.99/year"
								: "$6.49/month"}
						</Text>
						
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

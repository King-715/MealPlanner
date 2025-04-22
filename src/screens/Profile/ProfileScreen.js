import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
	// Hooks must be called unconditionally at the top level
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

			{/* Free Plan Box */}
			<TouchableOpacity
				onPress={() => navigation.navigate("PremiumScreen")}
			>
				<View className="my-4 p-4 border-2 border-black rounded-xl items-center mt-20">
					<Text
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}
					>
						Free Plan
					</Text>
					<Text
						style={{ fontFamily: "WorkSansRegular" }}
						className="text-gray-600"
					>
						AI Recipe Suggestions
					</Text>
					<Text
						style={{ fontFamily: "WorkSansRegular" }}
						className="text-gray-600"
					>
						Pantry Management
					</Text>
					<Text
						style={{ fontFamily: "WorkSansRegular" }}
						className="text-gray-600"
					>
						Smart Grocery List
					</Text>
				</View>
			</TouchableOpacity>

			{/* Buttons Section */}
			<View className="my-4 mt-10">
				<TouchableOpacity
					className="flex-row items-center border-2 border-black p-3 my-1.5 rounded-full"
					onPress={() =>
						navigation.navigate("Onboarding", {
							screen: "DietGoal",
						})
					}
				>
					<Image
						source={require("../../../assets/images/profiles/dietary-preferences.png")}
						className="w-10 h-10 mr-4"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}
					>
						Dietary preferences
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className="flex-row items-center border-2 border-black p-3 my-1.5 rounded-full mt-6"
					onPress={() => navigation.navigate("Setting")}
				>
					<Image
						source={require("../../../assets/images/profiles/settings.png")}
						className="w-10 h-10 mr-4"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}
					>
						Settings
					</Text>
				</TouchableOpacity>

				<TouchableOpacity className="flex-row items-center border-2 border-black p-3 my-1.5 rounded-full mt-6" onPress={() => navigation.navigate("Account")}>
					<Image
						source={require("../../../assets/images/profiles/account.png")}
						className="w-10 h-10 mr-4"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}
					>
						Account
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className="flex-row items-center border-2 border-black p-3 my-1.5 rounded-full mt-6"
					onPress={() => navigation.navigate("Information")}
				>
					<Image
						source={require("../../../assets/images/profiles/about-us.png")}
						className="w-10 h-10 mr-4"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}
					>
						About Us
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileScreen;

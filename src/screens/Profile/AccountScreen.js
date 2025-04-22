import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
	const navigation = useNavigation();
	// Hooks must be called unconditionally at the top level
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
					Account
				</Text>
			</View>

			{/* Free Plan Box */}

			<View className="my-4 p-4 border-2 border-black rounded-xl items-center">
				<Text style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}>
					Free Plan
				</Text>
				<Text
					style={{ fontFamily: "WorkSansSemiBold" }}
					className="text-gray-600"
				>
					AI Recipe Suggestions
				</Text>
				<Text
					style={{ fontFamily: "WorkSansSemiBold" }}
					className="text-gray-600"
				>
					Pantry Management
				</Text>
				<Text
					style={{ fontFamily: "WorkSansSemiBold" }}
					className="text-gray-600"
				>
					Smart Grocery List
				</Text>
			</View>
			<View className="my-4 p-4 border-2 border-black rounded-xl">
				<Text style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}>
					Your Account
				</Text>
				<View className="flex-row items-center justify-between p-2">
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						Email:
					</Text>
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						simone@gmail.com
					</Text>
				</View>

				<View className="px-2 flex-row items-center justify-between">
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						Created:
					</Text>
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						2025-04-04
					</Text>
				</View>
			</View>
			<View className="my-4 p-4 border-2 border-black rounded-xl">
				<Text style={{ fontFamily: "WorkSansSemiBold", fontSize: 20 }}>
					Statistics
				</Text>
				<View className="flex-row items-center justify-between p-2">
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						Total Recipes:
					</Text>
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						10
					</Text>
				</View>

				<View className="px-2 flex-row items-center justify-between">
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						Total Pantry Items:
					</Text>
					<Text
						style={{ fontFamily: "WorkSansSemiBold" }}
						className="text-gray-600"
					>
						10
					</Text>
				</View>
			</View>
			<View className="absolute bottom-0 left-0 right-0 px-6 pb-20">
				<TouchableOpacity
					className="bg-[#FF7A6C] py-3 mb-6"
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
					onPress={() => navigation.navigate("Login")}
				>
					<Text
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "white",
							textAlign: "center",
						}}
					>
						Logout
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="bg-gray-200 py-3"
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
				>
					<Text
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "black",
							textAlign: "center",
						}}
					>
						Clear all data
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AccountScreen;

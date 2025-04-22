import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
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
			<View className="flex-row items-center justify-center mb-6 mt-10 mb-10">
				<Text
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 32,
						color: "#FF7A6C",
					}}
				>
					Payment Method
				</Text>
			</View>

			{/* Buttons Section */}
			<View className="my-4 mt-20">
				<TouchableOpacity className="flex-row items-center border-1 border-black p-3 my-1.5 rounded-2xl mb-5 bg-gray-100">
					<Image
						source={require("../../../assets/images/profiles/master.png")}
						className="w-10 h-10 mr-4"
						resizeMode="contain"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 24 }}
					>
						Mastercard
					</Text>
				</TouchableOpacity>

				<TouchableOpacity className="flex-row items-center border-1 border-black p-3 my-1.5 rounded-2xl mt-10 mb-5 bg-gray-100">
					<Image
						source={require("../../../assets/images/profiles/visa.png")}
						className="w-10 h-10 mr-4"
						resizeMode="contain"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 24 }}
					>
						Visa
					</Text>
				</TouchableOpacity>

				<TouchableOpacity className="flex-row items-center border-1 border-black p-3 my-1.5 rounded-2xl mt-10 bg-gray-100">
					<Image
						source={require("../../../assets/images/profiles/amex.png")}
						className="w-10 h-10 mr-4"
						resizeMode="contain"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 24 }}
					>
						American Express
					</Text>
				</TouchableOpacity>

				<TouchableOpacity className="flex-row items-center border-1 border-black p-3 my-1.5 rounded-2xl mt-10 mb-5 bg-gray-100">
					<Image
						source={require("../../../assets/images/profiles/paypal.png")}
						className="w-10 h-10 mr-4"
						resizeMode="contain"
					/>
					<Text
						className="flex-1 text-center"
						style={{ fontFamily: "WorkSansSemiBold", fontSize: 24 }}
					>
						Paypal
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PaymentScreen;

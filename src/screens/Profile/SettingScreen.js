import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
	useFonts,
	WorkSans_400Regular,
	WorkSans_600SemiBold,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { MaterialIcons } from "@expo/vector-icons";

const SettingScreen = () => {
	const [showMetricOptions, setShowMetricOptions] = useState(false);
	const [selectedMetric, setSelectedMetric] = useState("Metric");

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
					Settings
				</Text>
			</View>

			<View className="my-4 mt-10">
				{/* Measuring Unit Button */}
				<View className="relative">
					<TouchableOpacity
						className="flex-row items-center justify-between border-2 border-black p-3 my-1.5 rounded-full"
						onPress={() => setShowMetricOptions(!showMetricOptions)}
					>
						<View className="flex-row items-center">
							<Image
								source={require("../../../assets/images/profiles/metric.png")}
								className="w-10 h-10 mr-4"
							/>
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 20,
								}}
							>
								Measuring Unit
							</Text>
						</View>
						<View className="flex-row items-center">
							<Text
								style={{
									fontFamily: "WorkSansSemiBold",
									fontSize: 16,
									marginRight: 8,
								}}
							>
								{selectedMetric}
							</Text>
							<MaterialIcons
								name={
									showMetricOptions
										? "keyboard-arrow-up"
										: "keyboard-arrow-down"
								}
								size={24}
								color="black"
							/>
						</View>
					</TouchableOpacity>

					{/* Dropdown positioned directly below */}
					{showMetricOptions && (
						<View className="absolute top-full left-0 right-0 border border-gray-200 rounded-lg bg-white mt-1 z-10 shadow-md">
							<TouchableOpacity
								className="p-4 flex-row justify-between items-center"
								onPress={() => {
									setSelectedMetric("Metric");
									setShowMetricOptions(false);
								}}
							>
								<Text
									style={{
										fontFamily: "WorkSansRegular",
										fontSize: 16,
									}}
								>
									Metric (kg, cm)
								</Text>
								{selectedMetric === "Metric" && (
									<MaterialIcons
										name="check"
										size={20}
										color="#FF7A6C"
									/>
								)}
							</TouchableOpacity>
							<View className="h-px bg-gray-200 mx-2" />
							<TouchableOpacity
								className="p-4 flex-row justify-between items-center"
								onPress={() => {
									setSelectedMetric("Imperial");
									setShowMetricOptions(false);
								}}
							>
								<Text
									style={{
										fontFamily: "WorkSansRegular",
										fontSize: 16,
									}}
								>
									Imperial (lbs, in)
								</Text>
								{selectedMetric === "Imperial" && (
									<MaterialIcons
										name="check"
										size={20}
										color="#FF7A6C"
									/>
								)}
							</TouchableOpacity>
						</View>
					)}
				</View>

				<Text className="text-center text-gray-500 text-lg mt-4">
					More Features Coming Soon!
				</Text>
			</View>
		</View>
	);
};

export default SettingScreen;

import React, { useState } from "react";
import { View, TouchableOpacity, Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LeftIcon from "../../assets/icons/left.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Footer() {
	const navigation = useNavigation();
	const [isHovered, setIsHovered] = useState(false);

	// Logout handler
	const handleLogout = () => {
		Alert.alert(
			"Are you sure?",
			"Do you really want to exit the app?",
			[
				{ text: "Yes", onPress: () => BackHandler.exitApp() },
				{
					text: "No",
					onPress: () => console.log("Cancel Logout"),
					style: "cancel",
				},
			],
			{ cancelable: true }
		);
	};

	return (
		<SafeAreaView
			className="absolute bottom-0 w-full flex-row justify-between items-center px-3"
			style={{ backgroundColor: "#ffffff" }}
		>
			{/* Back Icon */}
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<LeftIcon width={60} height={60} />
			</TouchableOpacity>

			{/* Settings Icon */}
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<SettingIcon width={40} height={40} />
			</View>

			{/* Logout Icon */}
			<TouchableOpacity
				onPressIn={() => setIsHovered(true)} // When pressed, show popup
				onPressOut={() => setIsHovered(false)} // When released, hide popup
				onPress={handleLogout}
			>
				{!isHovered && <LogoutIcon width={40} height={40} />}
				{isHovered && <LogoutIcon width={45} height={45} />}
			</TouchableOpacity>
		</SafeAreaView>
	);
}

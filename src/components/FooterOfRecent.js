import React, { useState } from "react";
import { View, TouchableOpacity, Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LeftIcon from "../../assets/icons/left.svg";
import DollarIcon from "../../assets/icons/dollar.svg";
import ToolIcon from "../../assets/icons/toolIcon.svg";
import User1Icon from "../../assets/icons/user1Icon.svg";
import UserIcon from "../../assets/icons/userIcon.svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FooterOfRecent() {
	const navigation = useNavigation();
	// Logout handle

	return (
		<SafeAreaView
			className="absolute bottom-0 w-full flex-row justify-around items-center p-4"
			style={{ backgroundColor: "#ffffff" }}
		>
			{/* Back Icon */}
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<LeftIcon width={60} height={60} />
			</TouchableOpacity>
			<TouchableOpacity className="mx-2">
				<DollarIcon width={50} height={50} />
			</TouchableOpacity>
			<TouchableOpacity className="mx-2">
				<UserIcon width={50} height={50} />
			</TouchableOpacity>
			<TouchableOpacity className="mx-2">
				<ToolIcon width={50} height={50} />
			</TouchableOpacity>
			<TouchableOpacity className="mx-2">
				<User1Icon width={50} height={50} />
			</TouchableOpacity>
		</SafeAreaView>
	);
}

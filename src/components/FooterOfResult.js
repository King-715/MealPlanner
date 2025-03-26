import React, { useState } from "react";
import { View, TouchableOpacity, Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LeftIcon from "../../assets/icons/left.svg";
import NetworkIcon from "../../assets/icons/network.svg";
import BellIcon from "../../assets/icons/bell.svg";
import LinkIcon from "../../assets/icons/link.svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FooterOfResult() {
	const navigation = useNavigation();
	// Logout handle

	return (
		<SafeAreaView className="absolute bottom-0 w-full flex-row justify-between items-center px-4">
			{/* Back Icon */}
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<LeftIcon width={60} height={60} />
			</TouchableOpacity>
			<TouchableOpacity>
				<NetworkIcon width={40} height={40} />
			</TouchableOpacity>
			<TouchableOpacity>
				<BellIcon width={55} height={55} />
			</TouchableOpacity>
			<TouchableOpacity>
				<LinkIcon width={40} height={40} />
			</TouchableOpacity>
		</SafeAreaView>
	);
}

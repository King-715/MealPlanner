import {
	Button,
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../../assets/icons/search.svg";
import FooterOfRecent from "../components/FooterOfRecent";
import RoundedTabs from "../components/RoundedTabs";
import MenuIcon from "../../assets/icons/menu.svg";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RecentScreen() {
	const navigation = useNavigation(); // Declare navigation correctly
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchText, setSearchText] = useState(""); // Corrected variable name
	const [history, setHistory] = useState([""]);

	// Fetch chat history from the backend
	const getHistory = async () => {
		try {
			const response = await axios.get(
				"https://mazxirates.com/api_praxia_test/api/chat/",
				{ params: { userId: 1 } }
			);
			if (response.data) {
				setHistory(response.data);
			} else {
				console.warn("No response data from the server.");
			}
		} catch (error) {
			console.error("Error fetching AI response:", error.message);
			alert("An error occurred while communicating with the server.");
		}
	};

	// Fetch chat history when the component mounts
	useEffect(() => {
		getHistory();
	}, []);

	// Handle sending a message to the backend
	const getData = async () => {
		// Capture the current value of searchText directly
		const currentSearchText = searchText.trim();
		if (!currentSearchText) {
			alert("Please enter a message.");
			return;
		}

		// Add user message to the messages state
		setMessages((prevMessages) => [
			...prevMessages,
			{ text: currentSearchText, sender: "user" },
		]);

		// Clear input box
		setSearchText("");

		// Start loading spinner
		setIsLoading(true);

		try {
			// Make POST request to the backend
			const response = await axios.post(
				"https://mazxirates.com/api_praxia_test/api/chat/",
				{
					messageContent: currentSearchText,
					userId: 1,
				}
			);

			// Check if response data is valid
			if (response.data) {
				setMessages((prevMessages) => [
					...prevMessages,
					{ text: response.data, sender: "ai" },
				]);
				getHistory(); // Refresh history after successful response

				// Navigate to Result screen with updated data
				navigation.navigate("Result", {
					searchText: currentSearchText,
					messages: response.data,
				});
			} else {
				console.warn("No response data from the server.");
			}
		} catch (error) {
			console.error("Error fetching AI response:", error.message);
			alert("An error occurred while communicating with the server.");
		} finally {
			setIsLoading(false); // Stop loading spinner
		}
	};

	return (
		<SafeAreaView className="flex-1" style={{ backgroundColor: "#ffffff" }}>
			<ScrollView
				showsVerticalScrollIndicator={true}
				className={"space-y-5 mt-3"}
				contentContainerStyle={{ paddingBottom: 100 }}
				keyboardShouldPersistTaps="always"
			>
				{/* Header Menu */}
				<View className="mx-5 flex-row justify-end items-center">
					<TouchableOpacity>
						<MenuIcon />
					</TouchableOpacity>
				</View>

				{/* Search Box */}
				<View className="mx-4">
					<View
						className="flex-row items-center pl-3 py-4"
						style={{
							borderRadius: 40,
							borderColor: "#f26218",
							borderWidth: 5,
						}}
					>
						<TextInput
							value={searchText}
							multiline={true}
							numberOfLines={5}
							placeholder="Hi Kate, how can I help you?"
							placeholderTextColor="#aaaaaa"
							className="flex-1 text-base pl-1 tracking-wider text-black"
							style={{
								textAlignVertical: "top",
								minHeight: 150,
								maxHeight: 150,
								color: "#1a1a1a",
								fontSize: 16,
							}}
							onChangeText={(text) => setSearchText(text)} // Update state as the user types
						/>
					</View>

					{/* Search Button */}
					<TouchableOpacity onPress={getData} disabled={isLoading}>
						<View className="items-center mt-1">
							<SearchIcon width={50} height={50} />
						</View>
					</TouchableOpacity>
				</View>

				{/* Rounded Tabs */}
				<View className="mx-3">
					<RoundedTabs history={history} />
				</View>
			</ScrollView>

			{/* Footer */}
			<View>
				<FooterOfRecent />
			</View>
		</SafeAreaView>
	);
}

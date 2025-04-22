// components/CustomTabBar.js
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const tabs = [
	{
		name: "Home",
		screen: "Home",
		icon: require("../../assets/tabs/home.png"),
		activeIcon: require("../../assets/tabs/home-active.png"),
	},
	{
		name: "Pantry",
		screen: "Pantry",
		icon: require("../../assets/tabs/pantry.png"),
		activeIcon: require("../../assets/tabs/pantry-active.png"),
	},
	{
		name: "Shopping",
		screen: "Shopping",
		icon: require("../../assets/tabs/shopping.png"),
		activeIcon: require("../../assets/tabs/shopping-active.png"),
	},
	{
		name: "Plan",
		screen: "Plan",
		icon: require("../../assets/tabs/planner.png"),
		activeIcon: require("../../assets/tabs/planner-active.png"),
	},
	{
		name: "Recipes",
		screen: "Recipes",
		icon: require("../../assets/tabs/recipes.png"),
		activeIcon: require("../../assets/tabs/recipes-active.png"),
	},
	{
		name: "Profile",
		screen: "Profile",
		icon: require("../../assets/tabs/profile.png"),
		activeIcon: require("../../assets/tabs/profile-active.png"),
	},
];

export default function CustomTabBar({ state, navigation }) {
	// Add this safety check
	if (!state) {
		return null; // or render a fallback UI
	}

	return (
		<View className="absolute bottom-1 left-2 right-2 bg-white border-t-2 border-gray-200 flex-row justify-around items-center h-20">
			{tabs.map((tab, index) => {
				const isActive = state.index === index;
				const route = state.routes.find(
					(route) => route.name === tab.screen
				);

				return (
					<TouchableOpacity
						key={tab.screen}
						className="items-center justify-center"
						onPress={() => navigation.navigate(tab.screen)}
					>
						<Image
							source={isActive ? tab.activeIcon : tab.icon}
							resizeMode="contain"
						/>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

// navigation/MainTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import PantryNavigator from "./PantryNavigator";
import ShoppingNavigator from "./ShoppingNavigator";
import PlanNavigator from "./PlanNavigator";
import RecipesNavigator from "./RecipesNavigator";
import ProfileNavigator from "./ProfileNavigator";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
	return (
		<Tab.Navigator
			tabBar={(props) => <CustomTabBar {...props} />}
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{ unmountOnBlur: true }}
			/>
			<Tab.Screen
				name="Pantry"
				component={PantryNavigator}
				options={{ unmountOnBlur: true }}
			/>
			<Tab.Screen
				name="Shopping"
				component={ShoppingNavigator}
				options={{ unmountOnBlur: true }}
			/>
			<Tab.Screen
				name="Plan"
				component={PlanNavigator}
				options={{ unmountOnBlur: true }}
			/>
			<Tab.Screen
				name="Recipes"
				component={RecipesNavigator}
				options={{ unmountOnBlur: true }}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileNavigator}
				options={{ unmountOnBlur: true }}
			/>
		</Tab.Navigator>
	);
}

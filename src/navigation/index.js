import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import AuthNavigator from "./AuthNavigator";
import MainTabNavigator from "./MainTabNavigator";
import OnboardingNavigator from "./OnboardingNavigator";
import PaymentScreen from "../screens/Profile/PaymentScreen";
import SettingScreen from "../screens/Profile/SettingScreen";
import AccountScreen from "../screens/Profile/AccountScreen";
import InformationScreen from "../screens/Profile/InformationScreen";
import ScanProductsScreen from "../screens/Pantry/ScanProductsScreen";
const RootStack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName="Welcome"
				screenOptions={{ headerShown: false }}
			>
				{/* Welcome Screen (First Screen) */}
				<RootStack.Screen name="Welcome" component={WelcomeScreen} />

				{/* Auth Flow (after Welcome) */}
				<RootStack.Screen name="Auth" component={AuthNavigator} />
				<RootStack.Screen name="MainApp" component={MainTabNavigator} />
				<RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
				<RootStack.Screen name="Payment" component={PaymentScreen} />
				<RootStack.Screen name="Setting" component={SettingScreen} />
				<RootStack.Screen name="Account" component={AccountScreen} />
				<RootStack.Screen name="Information" component={InformationScreen} />
				<RootStack.Screen name="ScanProducts" component={ScanProductsScreen} />

				{/* If you have MainApp navigation, add it here later */}
				{/* <RootStack.Screen name="MainApp" component={MainTabNavigator} /> */}
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../screens/HomeScreen";
// import LoginScreen from "../screens/LoginScreen";
// import RecentScreen from "../screens/RecentScreen";
// import ResultScreen from "../screens/ResultScreen";
// import WelcomeScreen from "../screens/WelcomeScreen";
// import SignUpScreen from "../screens/SignUpScreen";
// import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
// import EmailScreen from "../screens/EmailScreen";
// import EmailSendScreen from "../screens/EmailSendScreen";
// import PasswordResetScreen from "../screens/PasswordResetScreen";
// import OnboardingDietGoal from "../screens/OnboardingDietGoal";
// import OnboardingDietType from "../screens/OnboardingDietType";
// import OnboardingGastronomy from "../screens/OnboardingGastronomy";
// import OnboardingAllergies from "../screens/OnboardingAllergies";
// import OnboardingBudget from "../screens/OnboardingBudget";
// const Stack = createNativeStackNavigator();

// function AppNavigation() {
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator
// 				initialRouteName="Welcome"
// 				screenOptions={{ headerShown: false }}
// 			>
// 				<Stack.Screen name="Home" component={HomeScreen} />
// 				<Stack.Screen name="Login" component={LoginScreen} />
// 				<Stack.Screen name="SignUp" component={SignUpScreen} />
// 				<Stack.Screen name="Result" component={ResultScreen} />
// 				<Stack.Screen name="Welcome" component={WelcomeScreen} />
// 				<Stack.Screen name="Recent" component={RecentScreen} />
// 				<Stack.Screen
// 					name="ForgetPassword"
// 					component={ForgetPasswordScreen}
// 				/>
// 				<Stack.Screen name="Email" component={EmailScreen} />
// 				<Stack.Screen name="EmailSend" component={EmailSendScreen} />
// 				<Stack.Screen
// 					name="PasswordReset"
// 					component={PasswordResetScreen}
// 				/>
// 				<Stack.Screen
// 					name="OnboardingDietGoal"
// 					component={OnboardingDietGoal}
// 				/>
// 				<Stack.Screen
// 					name="OnboardingDietType"
// 					component={OnboardingDietType}
// 				/>
// 				<Stack.Screen
// 					name="OnboardingGastronomy"
// 					component={OnboardingGastronomy}
// 				/>
// 				<Stack.Screen
// 					name="OnboardingAllergies"
// 					component={OnboardingAllergies}
// 				/>
// 				<Stack.Screen
// 					name="OnboardingBudget"
// 					component={OnboardingBudget}
// 				/>
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// }

// export default AppNavigation;

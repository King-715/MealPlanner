import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RecentScreen from "../screens/RecentScreen";
import ResultScreen from "../screens/ResultScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import EmailScreen from "../screens/EmailScreen";
import EmailSendScreen from "../screens/EmailSendScreen";
import PasswordResetScreen from "../screens/PasswordResetScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="Result" component={ResultScreen} />
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Recent" component={RecentScreen} />
				<Stack.Screen
					name="ForgetPassword"
					component={ForgetPasswordScreen}
				/>
				<Stack.Screen name="Email" component={EmailScreen} />
				<Stack.Screen name="EmailSend" component={EmailSendScreen} />
				<Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;

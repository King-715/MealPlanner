import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import EmailScreen from "../screens/Auth/EmailScreen";
import EmailSendScreen from "../screens/Auth/EmailSendScreen";
import ForgetPasswordScreen from "../screens/Auth/ForgetPasswordScreen";
import PasswordResetScreen from "../screens/Auth/PasswordResetScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Email" component={EmailScreen} />
			<Stack.Screen name="EmailSend" component={EmailSendScreen} />
			<Stack.Screen
				name="ForgetPassword"
				component={ForgetPasswordScreen}
			/>
			<Stack.Screen
				name="PasswordReset"
				component={PasswordResetScreen}
			/>
			<Stack.Screen name="SignUp" component={SignUpScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;

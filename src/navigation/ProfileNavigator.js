import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import PremiumScreen from "../screens/Profile/PremiumScreen";
const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="ProfileMain"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="ProfileMain" component={ProfileScreen} />
			<Stack.Screen
				name="PremiumScreen"
				component={PremiumScreen}
			/>
		</Stack.Navigator>
	);
};

export default ProfileNavigator;

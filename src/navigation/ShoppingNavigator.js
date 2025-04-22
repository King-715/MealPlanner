import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingScreen from "../screens/Shopping/ShoppingScreen";
import ShoppingStore from "../screens/Shopping/ShoppingStore";
import ShoppingListsScreen from "../screens/Shopping/ShoppingListsScreen";
const Stack = createNativeStackNavigator();

const ShoppingNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="ShoppingMain"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="ShoppingMain" component={ShoppingScreen} />
			<Stack.Screen name="ShoppingStore" component={ShoppingStore} />
			<Stack.Screen
				name="ShoppingListsScreen"
				component={ShoppingListsScreen}
			/>
		</Stack.Navigator>
	);
};

export default ShoppingNavigator;

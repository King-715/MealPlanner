import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantryScreen from "../screens/Pantry/PantryScreen";
import AllPantryScreen from "../screens/Pantry/AllPantryScreen";
import AddProductsScreen from "../screens/Pantry/AddProductsScreen";
import ScanProductsScreen from "../screens/Pantry/ScanProductsScreen";
const Stack = createNativeStackNavigator();

const PantryNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="PantryMain"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="PantryMain" component={PantryScreen} />
			<Stack.Screen name="AllPantry" component={AllPantryScreen} />
			<Stack.Screen name="AddProducts" component={AddProductsScreen} />
			<Stack.Screen name="ScanProducts" component={ScanProductsScreen}/>
		</Stack.Navigator>
	);
};

export default PantryNavigator;

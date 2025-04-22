import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlanScreen from "../screens/Plan/PlanScreen";
import MealPlanningScreen from "../screens/Plan/MealPlanningScreen";
import FinalPlanningScreen from "../screens/Plan/FinalPlanningScreen";
import SuggestedRecipesScreen from "../screens/Plan/SuggestedRecipesScreen";
const Stack = createNativeStackNavigator();

const PlanNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="PlanMain"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="PlanMain" component={PlanScreen} />
			<Stack.Screen name="MealPlanning" component={MealPlanningScreen} />
			<Stack.Screen name="FinalScreen" component={FinalPlanningScreen} />
			<Stack.Screen name="SuggestedRecipes" component={SuggestedRecipesScreen} />
		</Stack.Navigator>
	);
};

export default PlanNavigator;

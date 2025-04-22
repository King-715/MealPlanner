import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipesScreen from "../screens/Recipes/RecipesScreen";
import RecipeDetailsScreen from "../screens/Recipes/RecipeDetailsScreen";
const Stack = createNativeStackNavigator();

const RecipesNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="RecipesMain"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="RecipesMain" component={RecipesScreen} />
			<Stack.Screen
				name="RecipeDetails"
				component={RecipeDetailsScreen}
			/>
		</Stack.Navigator>
	);
};

export default RecipesNavigator;

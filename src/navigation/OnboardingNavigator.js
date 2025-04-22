import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingAllergies from "../screens/Onboarding/OnboardingAllergies";
import OnboardingBudget from "../screens/Onboarding/OnboardingBudget";
import OnboardingDietGoal from "../screens/Onboarding/OnboardingDietGoal";
import OnboardingDietType from "../screens/Onboarding/OnboardingDietType";
import OnboardingGastronomy from "../screens/Onboarding/OnboardingGastronomy";


const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="DietGoal"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="DietGoal" component={OnboardingDietGoal} />
			<Stack.Screen name="DietType" component={OnboardingDietType} />
			<Stack.Screen name="Gastronomy" component={OnboardingGastronomy} />
			<Stack.Screen name="Allergies" component={OnboardingAllergies} />
			<Stack.Screen name="Budget" component={OnboardingBudget} />
		</Stack.Navigator>
	);
};

export default OnboardingNavigator;

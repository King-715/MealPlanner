import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import {
	useFonts,
	WorkSans_500Medium,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledImage = styled(Image);

export default function WelcomeScreen() {
	const navigation = useNavigation();

	const [fontsLoaded] = useFonts({
		WorkSansMedium: WorkSans_500Medium,
		WorkSansBold: WorkSans_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView className="flex-1 bg-white">
			{/* Header with Logo and Text in one line */}
			<StyledView className="flex-row items-center justify-center mt-8 mx-6">
				<StyledImage
					source={require("../../assets/logo.png")}
					className="w-16 h-16 mr-4"
				/>
				<StyledText
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 40,
						color: "#FF7A6C",
					}}
				>
					Cuokka
				</StyledText>
			</StyledView>

			{/* Title */}
			<StyledText
				style={{
					fontFamily: "WorkSansBold",
					fontSize: 30,
					color: "#FF7A6C",
					textAlign: "center",
					marginTop: 40,
					marginHorizontal: 24,
				}}
			>
				Start Planning with Cuokka!
			</StyledText>

			{/* Dish Image - Centered and filling available space */}
			<StyledView className="flex-1 justify-center">
				<StyledImage
					source={require("../../assets/dishes.png")}
					className="w-full h-full"
					resizeMode="contain"
				/>
			</StyledView>

			{/* Get Started Button - Fixed at bottom */}
			<StyledView className="px-6 pb-8">
				<StyledTouchable
					className="bg-[#FF7A6C] py-3"
					onPress={() => navigation.navigate("Login")}
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
				>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "white",
							textAlign: "center",
						}}
					>
						Get started
					</StyledText>
				</StyledTouchable>
			</StyledView>
		</SafeAreaView>
	);
}

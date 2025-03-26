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

export default function ForgetPasswordScreen() {
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
				<StyledText
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 36,
						color: "#FF7A6C",
					}}
				>
					Forgot Password
				</StyledText>
			</StyledView>

			{/* Dish Image - Centered and filling available space */}
			<StyledView className="flex-1 justify-center items-center">
				{/* Image */}
				<StyledImage
					source={require("../../assets/forget-password.png")}
					style={{ resizeMode: "contain" }}
				></StyledImage>
				{/* Title */}
				<StyledText
					style={{
						fontFamily: "WorkSansMedium",
						fontSize: 24,
						color: "#FF7A6C",
						textAlign: "center",
						marginTop: 40,
						marginHorizontal: 24,
					}}
				>
					How should we reset your password?
				</StyledText>
			</StyledView>

			{/* Get Started Button - Fixed at bottom */}
			<StyledView className="px-6 pb-8">
				<StyledTouchable
					className="bg-[#ff746a] py-3 flex-row items-center justify-center mb-4"
					onPress={() => navigation.navigate("Email")}
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
				>
					<Image
						source={require("../../assets/email.png")}
						className="w-6 h-6"
						resizeMode="contain"
					/>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "white",
							marginLeft: 12,
						}}
					>
						Send an Email
					</StyledText>
				</StyledTouchable>
				{/* <StyledTouchable
					className="py-3 flex-row items-center justify-center"
					onPress={() => navigation.navigate("Home")}
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
				>
					<Image
						source={require("../../assets/phone.png")}
						className="w-6 h-6"
						resizeMode="contain"
					/>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 18,
							color: "#ff746a",
							marginLeft: 12,
						}}
					>
						Call customer service.
					</StyledText>
				</StyledTouchable> */}
			</StyledView>
		</SafeAreaView>
	);
}

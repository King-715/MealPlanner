import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
} from "react-native";
import {
	useFonts,
	WorkSans_500Medium,
	WorkSans_400Regular,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);

export default function LoginScreen() {
	const navigation = useNavigation();

	const [fontsLoaded] = useFonts({
		WorkSansMedium: WorkSans_500Medium,
		WorkSansBold: WorkSans_700Bold,
		WorkSansRegular: WorkSans_400Regular,
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
					marginTop: 100,
					marginHorizontal: 24,
				}}
			>
				Welcome Cuokka!
			</StyledText>
			<StyledText
				style={{
					fontFamily: "WorkSansRegular",
					fontSize: 24,
					color: "#000000",
					textAlign: "center",
					marginHorizontal: 24,
				}}
			>
				Say Goodbye to Meal Stress!
			</StyledText>

			{/* Email and Password Inputs */}
			<StyledView className="mt-12 mx-6">
				{/* Email Input */}
				<StyledText
					style={{
						fontFamily: "WorkSansMedium",
						fontSize: 18,
						color: "#FF7A6C",
						marginBottom: 8,
					}}
				>
					Email:
				</StyledText>
				<StyledTextInput
					className="border border-2 border-gray-500 p-3 mb-6"
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						borderRadius: 18,
					}}
					placeholder="Enter your email"
					keyboardType="email-address"
					autoCapitalize="none"
				/>

				{/* Password Input */}
				<StyledText
					style={{
						fontFamily: "WorkSansMedium",
						fontSize: 18,
						color: "#FF7A6C",
						marginBottom: 8,
					}}
				>
					Password:
				</StyledText>
				<StyledTextInput
					className="border border-2 border-gray-500 p-3"
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						borderRadius: 18,
					}}
					placeholder="Enter your password"
					secureTextEntry={true}
				/>

				{/* Forgot Password Link */}
				<StyledTouchable
					onPress={() => navigation.navigate("ForgetPassword")}
					className="self-end mt-2 mb-6"
				>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 16,
							color: "#FF7A6C",
						}}
					>
						Forgot Password?
					</StyledText>
				</StyledTouchable>
			</StyledView>

			{/* Login Button */}
			<StyledView className="px-6 pb-4">
				<StyledTouchable
					className="bg-[#FF7A6C] py-3"
					onPress={() => navigation.navigate("Home")}
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
						Login
					</StyledText>
				</StyledTouchable>
			</StyledView>

			{/* Google Login Button */}
			<StyledView className="px-6 pb-4">
				<StyledTouchable
					className="bg-[#D4D4D4] py-3 flex-row items-center justify-center"
					onPress={() => navigation.navigate("Home")}
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
				>
					<Image
						source={require("../../assets/google-logo.png")}
						className="w-6 h-6"
						resizeMode="contain"
					/>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "black",
							marginLeft: 12,
						}}
					>
						Google
					</StyledText>
				</StyledTouchable>
			</StyledView>

			{/* Sign Up Link */}
			<StyledView className="flex-row justify-center items-center pb-8">
				<StyledText
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						color: "#000000",
						marginRight: 4,
					}}
				>
					Don't have an account?
				</StyledText>
				<StyledTouchable onPress={() => navigation.navigate("SignUp")}>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 16,
							color: "#FF7A6C",
						}}
					>
						Sign Up
					</StyledText>
				</StyledTouchable>
			</StyledView>
		</SafeAreaView>
	);
}

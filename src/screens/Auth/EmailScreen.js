import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Alert,
} from "react-native";
import {
	useFonts,
	WorkSans_500Medium,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);

export default function EmailScreen() {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [isValid, setIsValid] = useState(false);

	const [fontsLoaded] = useFonts({
		WorkSansMedium: WorkSans_500Medium,
		WorkSansBold: WorkSans_700Bold,
	});

	const validateEmail = (input) => {
		setEmail(input);

		// Basic email validation regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (input === "") {
			setEmailError("");
			setIsValid(false);
		} else if (!emailRegex.test(input)) {
			setEmailError("Please enter a valid email address");
			setIsValid(false);
		} else {
			setEmailError("");
			setIsValid(true);
		}
	};

	const handleNext = () => {
		if (!isValid) {
			Alert.alert(
				"Validation Error",
				"Please enter a valid email address"
			);
			return;
		}
		navigation.navigate("EmailSend", { email });
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView className="flex-1 bg-white">
			{/* Header */}
			<StyledView className="items-center mt-8 mx-6 mb-6">
				<StyledText
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 36,
						color: "#FF7A6C",
					}}
				>
					Email
				</StyledText>
			</StyledView>

			{/* Email Image with Input directly below */}
			<StyledView className="flex-1 px-6">
				{/* Email Image */}
				<StyledView className="items-center mb-8">
					<StyledImage
						source={require("../../../assets/images/EmailSend.png")}
						resizeMode="contain"
					/>
				</StyledView>

				{/* Email Input */}
				<StyledView>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 18,
							color: "#FF7A6C",
							marginBottom: 8,
						}}
					>
						Enter your Email:
					</StyledText>
					<StyledTextInput
						className="border border-2 border-gray-500 p-3"
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 16,
							borderRadius: 18,
							borderColor: emailError ? "red" : "#6B7280", // Change border color if error
						}}
						placeholder="Enter your email"
						placeholderTextColor="#9CA3AF"
						keyboardType="email-address"
						autoCapitalize="none"
						value={email}
						onChangeText={validateEmail}
					/>
					{emailError ? (
						<StyledText
							style={{
								fontFamily: "WorkSansMedium",
								color: "red",
								fontSize: 14,
								marginTop: 4,
							}}
						>
							{emailError}
						</StyledText>
					) : null}
				</StyledView>
			</StyledView>

			{/* Send Button at bottom */}
			<StyledView className="px-6 pb-8">
				<StyledTouchable
					className={`py-3 flex-row items-center justify-center ${
						isValid ? "bg-[#ff746a]" : "bg-gray-400"
					}`}
					onPress={handleNext}
					style={{ borderRadius: 18 }}
					activeOpacity={0.8}
					disabled={!isValid}
				>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "white",
							marginLeft: 12,
						}}
					>
						Next
					</StyledText>
				</StyledTouchable>
			</StyledView>
		</SafeAreaView>
	);
}

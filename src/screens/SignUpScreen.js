import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Alert,
	ActivityIndicator,
} from "react-native";
import {
	useFonts,
	WorkSans_500Medium,
	WorkSans_400Regular,
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

export default function SignUpScreen() {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const [fontsLoaded] = useFonts({
		WorkSansMedium: WorkSans_500Medium,
		WorkSansBold: WorkSans_700Bold,
		WorkSansRegular: WorkSans_400Regular,
	});

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const validateForm = () => {
		let isValid = true;

		if (!validateEmail(email)) {
			setEmailError("Please enter a valid email address");
			isValid = false;
		} else {
			setEmailError("");
		}

		if (password !== confirmPassword) {
			setPasswordError("Passwords do not match");
			isValid = false;
		} else if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters");
			isValid = false;
		} else {
			setPasswordError("");
		}

		return isValid;
	};

	const handleSignUp = () => {
		if (!validateForm()) return;

		setIsLoading(true);
		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			Alert.alert("Success", "Account created successfully!");
			navigation.navigate("Home");
		}, 1500);
	};

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
					marginTop: 60,
					marginHorizontal: 24,
				}}
			>
				Create Account!
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
			<StyledView className="mt-8 mx-6">
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
					className={`border border-2 ${
						emailError ? "border-red-500" : "border-gray-500"
					} p-3 mb-1`}
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						borderRadius: 18,
					}}
					placeholder="Enter your email"
					keyboardType="email-address"
					autoCapitalize="none"
					value={email}
					onChangeText={(text) => {
						setEmail(text);
						if (emailError) setEmailError("");
					}}
					onBlur={() => {
						if (email && !validateEmail(email)) {
							setEmailError("Please enter a valid email address");
						}
					}}
				/>
				{emailError ? (
					<StyledText
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 14,
							color: "red",
							marginTop: 4,
							marginLeft: 4,
						}}
					>
						{emailError}
					</StyledText>
				) : null}

				{/* Password Input */}
				<StyledText
					style={{
						fontFamily: "WorkSansMedium",
						fontSize: 18,
						color: "#FF7A6C",
						marginBottom: 8,
						marginTop: 12,
					}}
				>
					Password:
				</StyledText>
				<StyledTextInput
					className={`border border-2 ${
						passwordError ? "border-red-500" : "border-gray-500"
					}  p-3 mb-1`}
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						borderRadius: 18,
					}}
					placeholder="Enter your password (min 8 characters)"
					secureTextEntry={true}
					value={password}
					onChangeText={setPassword}
				/>

				{/* Confirm Password Input */}
				<StyledText
					style={{
						fontFamily: "WorkSansMedium",
						fontSize: 18,
						color: "#FF7A6C",
						marginBottom: 8,
						marginTop: 12,
					}}
				>
					Confirm Password:
				</StyledText>
				<StyledTextInput
					className={`border border-2 ${
						passwordError ? "border-red-500" : "border-gray-500"
					} p-3`}
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						borderRadius: 18,
					}}
					placeholder="Confirm your password"
					secureTextEntry={true}
					value={confirmPassword}
					onChangeText={setConfirmPassword}
					onBlur={() => {
						if (
							password &&
							confirmPassword &&
							password !== confirmPassword
						) {
							setPasswordError("Passwords do not match");
						}
					}}
				/>

				{/* Password Error Message */}
				{passwordError ? (
					<StyledText
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 14,
							color: "red",
							marginTop: 4,
							marginLeft: 4,
						}}
					>
						{passwordError}
					</StyledText>
				) : null}
			</StyledView>

			{/* Sign Up Button */}
			<StyledView className="px-6 pb-4 mt-4">
				<StyledTouchable
					className="bg-[#FF7A6C] py-3 items-center justify-center"
					onPress={handleSignUp}
					style={{ borderRadius: 18 }}
					activeOpacity={0.8}
					disabled={isLoading}
				>
					{isLoading ? (
						<ActivityIndicator color="white" />
					) : (
						<StyledText
							style={{
								fontFamily: "WorkSansMedium",
								fontSize: 24,
								color: "white",
								textAlign: "center",
							}}
						>
							Sign Up
						</StyledText>
					)}
				</StyledTouchable>
			</StyledView>

			{/* Google Sign Up Button */}
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

			{/* Already have an account link */}
			<StyledView className="flex-row justify-center items-center pb-8">
				<StyledText
					style={{
						fontFamily: "WorkSansRegular",
						fontSize: 16,
						color: "#000000",
						marginRight: 4,
					}}
				>
					Already have an account?
				</StyledText>
				<StyledTouchable onPress={() => navigation.navigate("Login")}>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 16,
							color: "#FF7A6C",
						}}
					>
						Login
					</StyledText>
				</StyledTouchable>
			</StyledView>
		</SafeAreaView>
	);
}

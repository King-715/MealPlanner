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

export default function PasswordResetScreen() {
	const navigation = useNavigation();
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmError, setConfirmError] = useState("");
	const [isValid, setIsValid] = useState(false);

	const [fontsLoaded] = useFonts({
		WorkSansMedium: WorkSans_500Medium,
		WorkSansBold: WorkSans_700Bold,
	});

	const validatePassword = () => {
		let isValid = true;

		// Validate new password length
		if (newPassword.length < 8 && newPassword.length > 0) {
			setPasswordError("Password must be at least 8 characters");
			isValid = false;
		} else {
			setPasswordError("");
		}

		// Validate password match
		if (newPassword !== confirmPassword && confirmPassword.length > 0) {
			setConfirmError("Passwords do not match");
			isValid = false;
		} else {
			setConfirmError("");
		}

		setIsValid(
			newPassword.length >= 8 &&
				confirmPassword.length >= 8 &&
				newPassword === confirmPassword
		);
	};

	const handlePasswordChange = (text) => {
		setNewPassword(text);
		validatePassword();
	};

	const handleConfirmChange = (text) => {
		setConfirmPassword(text);
		validatePassword();
	};

	const handleReset = () => {
		if (!isValid) {
			Alert.alert(
				"Validation Error",
				"Please make sure passwords match and are at least 8 characters"
			);
			return;
		}
		// Here you would typically call your API to reset the password
		Alert.alert("Success", "Password has been reset successfully", [
			{ text: "OK", onPress: () => navigation.navigate("Login") },
		]);
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
					Password
				</StyledText>
			</StyledView>

			{/* Password Reset Image */}
			<StyledView className="flex-1 px-6">
				<StyledView className="items-center mb-8">
					<StyledImage
						source={require("../../../assets/images/reset-password.png")}
						resizeMode="contain"
					/>
				</StyledView>

				{/* New Password Input */}
				<StyledView>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 18,
							color: "#FF7A6C",
							marginBottom: 8,
						}}
					>
						Enter your new password:
					</StyledText>
					<StyledTextInput
						className="border border-2 p-3"
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 16,
							borderRadius: 18,
							borderColor: passwordError ? "red" : "#6B7280",
						}}
						placeholder="Enter your new password (min 8 chars)"
						placeholderTextColor="#9CA3AF"
						secureTextEntry
						value={newPassword}
						onChangeText={handlePasswordChange}
					/>
					{passwordError && (
						<StyledText
							style={{
								fontFamily: "WorkSansMedium",
								color: "red",
								fontSize: 14,
								marginTop: 4,
							}}
						>
							{passwordError}
						</StyledText>
					)}
				</StyledView>

				{/* Confirm Password Input */}
				<StyledView className="mt-6 mb-3">
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 18,
							color: "#FF7A6C",
							marginBottom: 8,
						}}
					>
						Confirm your password:
					</StyledText>
					<StyledTextInput
						className="border border-2 p-3"
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 16,
							borderRadius: 18,
							borderColor: confirmError ? "red" : "#6B7280",
						}}
						placeholder="Confirm your password"
						placeholderTextColor="#9CA3AF"
						secureTextEntry
						value={confirmPassword}
						onChangeText={handleConfirmChange}
					/>
					{confirmError && (
						<StyledText
							style={{
								fontFamily: "WorkSansMedium",
								color: "red",
								fontSize: 14,
								marginTop: 4,
							}}
						>
							{confirmError}
						</StyledText>
					)}
				</StyledView>

				<StyledText
					style={{
						fontFamily: "WorkSansMedium",
						fontSize: 16,
						color: "#FF7A6C",
					}}
				>
					Please remember to save your password in a safe place.
				</StyledText>
			</StyledView>

			{/* Reset Button */}
			<StyledView className="px-6 pb-8">
				<StyledTouchable
					className={`py-3 flex-row items-center justify-center ${
						isValid ? "bg-[#ff746a]" : "bg-gray-400"
					}`}
					onPress={handleReset}
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
						Reset Password
					</StyledText>
				</StyledTouchable>
			</StyledView>
		</SafeAreaView>
	);
}

import { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	ActivityIndicator,
} from "react-native";
import {
	useFonts,
	WorkSans_500Medium,
	WorkSans_400Regular,
	WorkSans_700Bold,
	WorkSans_600SemiBold,
} from "@expo-google-fonts/work-sans";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { auth, db } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);

export default function LoginScreen() {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authError, setAuthError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [googleLoading, setGoogleLoading] = useState(false);

	const [fontsLoaded] = useFonts({
		WorkSansMedium: WorkSans_500Medium,
		WorkSansBold: WorkSans_700Bold,
		WorkSansRegular: WorkSans_400Regular,
		WorkSansSemiBold: WorkSans_600SemiBold,
	});

	// useEffect(() => {
	// 	GoogleSignin.configure({
	// 		webClientId:
	// 			"483652957383-rbtv8qkrd20u380srae82eek8on8rq4t.apps.googleusercontent.com",
	// 	});
	// }, []);

	const signInWithGoogle = async () => {
		// try {
		// 	setGoogleLoading(true);
		// 	// Get the users ID token
		// 	const { idToken } = await GoogleSignin.signIn();
		// 	// Create a Google credential with the token
		// 	const googleCredential =
		// 		auth.GoogleAuthProvider.credential(idToken);
		// 	// Sign-in the user with the credential
		// 	const userCredential = await auth().signInWithCredential(
		// 		googleCredential
		// 	);
		// 	// Check if user exists in Firestore
		// 	const userDoc = await db()
		// 		.collection("users")
		// 		.doc(userCredential.user.uid)
		// 		.get();
		// 	if (!userDoc.exists) {
		// 		// Create new user document if it doesn't exist
		// 		await db()
		// 			.collection("users")
		// 			.doc(userCredential.user.uid)
		// 			.set({
		// 				email: userCredential.user.email,
		// 				name: userCredential.user.displayName,
		// 				createdAt: new Date().toISOString(),
		// 			});
		// 	}
		// 	navigation.navigate("MainApp");
		// } catch (error) {
		// 	console.error("Google Sign In Error:", error);
		// 	setAuthError(error.message);
		// } finally {
		// 	setGoogleLoading(false);
		// }
	};

	const handleLogin = async () => {
		if (!validateForm()) return;

		try {
			setLoading(true);
			setAuthError(null);
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			navigation.navigate("MainApp");
		} catch (error) {
			console.error("Login Error:", error);
			setAuthError(error.message);
		} finally {
			setLoading(false);
		}
	};

	const validateForm = () => {
		if (!email.includes("@")) {
			setAuthError("Please enter a valid email address");
			return false;
		}
		if (password.length < 8) {
			setAuthError("Password must be at least 8 characters");
			return false;
		}
		return true;
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView className="flex-1 bg-white">
			{/* Header with Logo and Text */}
			<StyledView className="flex-row items-center justify-center mt-8 mx-6">
				<StyledImage
					source={require("../../../assets/images/logo.png")}
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

			{/* Title Section */}
			<StyledView className="mt-20 mx-6">
				<StyledText
					style={{
						fontFamily: "WorkSansBold",
						fontSize: 30,
						color: "#FF7A6C",
						textAlign: "center",
					}}
				>
					Welcome Cuokka!
				</StyledText>
				<StyledText
					style={{
						fontFamily: "WorkSansSemiBold",
						fontSize: 24,
						color: "#000000",
						textAlign: "center",
						marginTop: 8,
					}}
				>
					Say Goodbye to Meal Stress!
				</StyledText>
			</StyledView>

			{/* Error Message */}
			{authError && (
				<StyledView className="mx-6 mt-4">
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							color: "red",
							textAlign: "center",
						}}
					>
						{authError}
					</StyledText>
				</StyledView>
			)}

			{/* Login Form */}
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
					className="border-2 border-gray-500 p-3 mb-6 rounded-xl"
					style={{ fontFamily: "WorkSansRegular", fontSize: 16 }}
					placeholder="Enter your email"
					placeholderTextColor="#9CA3AF"
					keyboardType="email-address"
					autoCapitalize="none"
					value={email}
					onChangeText={setEmail}
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
					className="border-2 border-gray-500 p-3 rounded-xl"
					style={{ fontFamily: "WorkSansRegular", fontSize: 16 }}
					placeholder="Enter your password"
					placeholderTextColor="#9CA3AF"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
					onSubmitEditing={handleLogin}
				/>

				{/* Forgot Password */}
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
					className="bg-[#FF7A6C] py-3 rounded-xl justify-center items-center"
					onPress={handleLogin}
					disabled={loading}
				>
					{loading ? (
						<ActivityIndicator color="white" size="small" />
					) : (
						<StyledText
							style={{
								fontFamily: "WorkSansMedium",
								fontSize: 24,
								color: "white",
							}}
						>
							Login
						</StyledText>
					)}
				</StyledTouchable>
			</StyledView>

			{/* Google Login Button */}
			<StyledView className="px-6 pb-4">
				<StyledTouchable
					className="bg-[#D4D4D4] py-3 rounded-xl flex-row justify-center items-center"
					onPress={() => {
						console.log("Google response pressed:");
						signInWithGoogle();
					}}
					disabled={googleLoading}
				>
					{googleLoading ? (
						<ActivityIndicator color="black" size="small" />
					) : (
						<>
							<Image
								source={require("../../../assets/images/google-logo.png")}
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
						</>
					)}
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

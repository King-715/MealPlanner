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
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);

export default function PasswordResetScreen() {
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

			{/* Email Image with Input directly below */}
			<StyledView className="flex-1 px-6">
				{/* Email Image */}
				<StyledView className="items-center mb-8">
					<StyledImage
						source={require("../../assets/reset-password.png")}
						resizeMode="contain"
					/>
				</StyledView>

				{/* Email Input - Now placed right below the image */}
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
						className="border border-2 border-gray-500 p-3"
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 16,
							borderRadius: 18,
						}}
						placeholder="Enter your new password"
						keyboardType="email-address"
						autoCapitalize="none"
					/>
				</StyledView>
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
						className="border border-2 border-gray-500 p-3"
						style={{
							fontFamily: "WorkSansRegular",
							fontSize: 16,
							borderRadius: 18,
						}}
						placeholder="Confirm your password"
						keyboardType="email-address"
						autoCapitalize="none"
					/>
				</StyledView>
				<StyledText
					style={{
						fontFamily: "WorkSansMedium",
						fontSize: 16,
						color: "#FF7A6C",
					}}
				>
					Please remember to save your password in a safe place and do
					not share it with anyone.
				</StyledText>
			</StyledView>

			{/* Send Button at bottom */}
			<StyledView className="px-6 pb-8">
				<StyledTouchable
					className="bg-[#ff746a] py-3 flex-row items-center justify-center"
					onPress={() => navigation.navigate("Login")}
					style={{ borderRadius: 18 }}
					activeOpacity={0.8}
				>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "white",
							marginLeft: 12,
						}}
					>
						Login
					</StyledText>
				</StyledTouchable>
			</StyledView>
		</SafeAreaView>
	);
}

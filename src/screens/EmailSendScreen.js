import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	StyleSheet,
} from "react-native";
import {
	useFonts,
	WorkSans_500Medium,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef } from "react";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledImage = styled(Image);

export default function EmailSendScreen() {
	const navigation = useNavigation();
	const [digits, setDigits] = useState(["", "", "", "", "", ""]);
	const inputRefs = useRef([]);

	const [fontsLoaded] = useFonts({
		WorkSansMedium: WorkSans_500Medium,
		WorkSansBold: WorkSans_700Bold,
	});

	const handleChangeText = (text, index) => {
		const newDigits = [...digits];
		newDigits[index] = text;
		setDigits(newDigits);

		// Auto-focus next input
		if (text && index < 5) {
			inputRefs.current[index + 1].focus();
		}
	};

	const handleKeyPress = (e, index) => {
		if (e.nativeEvent.key === "Backspace" && !digits[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView className="flex-1 bg-white">
			{/* Image and Title */}
			<StyledView className="flex-1 mt-5 items-center">
				<StyledImage
					source={require("../../assets/forget-password.png")}
					style={{ resizeMode: "contain" }}
				/>
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
					We have sent you a recovery code. Enter it below.
				</StyledText>
				{/* 6-Digit Code Input Boxes */}
				<StyledView className="mt-8 flex-row justify-center">
					{digits.map((digit, index) => (
						<TextInput
							key={index}
							ref={(ref) => (inputRefs.current[index] = ref)}
							style={styles.codeInput}
							keyboardType="number-pad"
							maxLength={1}
							value={digit}
							onChangeText={(text) =>
								handleChangeText(text, index)
							}
							onKeyPress={(e) => handleKeyPress(e, index)}
							textAlign="center"
						/>
					))}
				</StyledView>
			</StyledView>

			{/* Bottom Buttons */}
			<StyledView className="px-6 pb-8">
				{/* Next Button */}
				<StyledTouchable
					className="bg-[#ff746a] py-3 flex-row items-center justify-center mb-4"
					onPress={() => navigation.navigate("PasswordReset")}
					activeOpacity={0.8}
					style={{ borderRadius: 18 }}
				>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 24,
							color: "white",
						}}
					>
						Next
					</StyledText>
				</StyledTouchable>

				{/* Resend Code Link */}
				<StyledTouchable
					className="items-center"
					onPress={() => console.log("Resend code")}
				>
					<StyledText
						style={{
							fontFamily: "WorkSansMedium",
							fontSize: 16,
							color: "#FF7A6C",
							textAlign: "center",
						}}
					>
						Didn't receive a code? Click here to resend
					</StyledText>
				</StyledTouchable>
			</StyledView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	codeInput: {
		width: 50,
		height: 50,
		borderWidth: 2,
		borderColor: "#D1D5DB",
		borderRadius: 8,
		marginHorizontal: 5,
		fontSize: 24,
		fontFamily: "WorkSansMedium",
		color: "#000000",
	},
});

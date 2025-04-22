import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { styled } from "nativewind";

// Create styled components with NativeWind
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledCamera = styled(Camera);

export default function ScanProductsScreen() {
	const [facing, setFacing] = useState(Camera.Constants.Type.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		if (permission && !permission.granted) {
			requestPermission();
		}
	}, []);

	if (!permission) {
		return <StyledView className="flex-1 justify-center" />;
	}

	if (!permission.granted) {
		return (
			<StyledView className="flex-1 justify-center items-center">
				<StyledText className="text-lg mb-4">
					We need camera access
				</StyledText>
				<StyledButton
					title="Grant Permission"
					onPress={requestPermission}
				/>
			</StyledView>
		);
	}

	const toggleCameraFacing = () => {
		setFacing((current) =>
			current === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		);
	};

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		alert(`Scanned: ${data}`);
		setTimeout(() => setScanned(false), 2000);
	};

	return (
		<StyledView className="flex-1 justify-center">
			<StyledCamera
				className="flex-1"
				type={facing}
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				barCodeScannerSettings={{
					barCodeTypes: ["qr", "pdf417", "ean13"],
				}}
			>
				<StyledView className="flex-1 flex-row bg-transparent m-5">
					<StyledTouchableOpacity
						className="self-end items-center bg-black/50 p-2.5 rounded"
						onPress={toggleCameraFacing}
					>
						<StyledText className="text-base font-bold text-white mb-2">
							Flip
						</StyledText>
					</StyledTouchableOpacity>
				</StyledView>
			</StyledCamera>
		</StyledView>
	);
}

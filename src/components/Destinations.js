import { Image, Text, TouchableOpacity, View } from "react-native";
import { destinationData } from "../constants";
import {
	heightPercentageToDP,
	widthPercentageToDP,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Destinations() {
	const navigation = useNavigation();
	return (
		<View className="mx-4 flex-row justify-between flex-wrap items-center">
			{destinationData.map((item, index) => {
				return (
					<DestinationCard
						navigation={navigation}
						item={item}
						key={index}
					/>
				);
			})}
		</View>
	);
}

const DestinationCard = ({ item, navigation }) => {
	const SvgIcon = item.image; // Assign the SVG component dynamically

	return (
		<TouchableOpacity
			onPress={() => {
				if (item.title === "Insights") {
					navigation.navigate("Recent");
				}
			}}
			style={{
				width: widthPercentageToDP(42),
				height: widthPercentageToDP(42),
			}}
			className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
		>
			<View
				style={{
					width: widthPercentageToDP(42),
					height: widthPercentageToDP(42),
					borderRadius: 20,
					overflow: "hidden",
					justifyContent: "center",
					alignItems: "center",
				}}
				className="absolute"
			>
				<SvgIcon width="100%" height="100%" />
			</View>
			<LinearGradient
				colors={["transparent", "#0000001A"]}
				style={{
					width: widthPercentageToDP(42),
					height: heightPercentageToDP(15),
					borderRadius: 20,
				}}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				className="absolute bottom-0"
			/>
			<Text
				style={{ fontSize: widthPercentageToDP(5), color: "#1a1a1a" }}
				className="font-semibold text-center mb-4"
			>
				{item.title}
			</Text>
		</TouchableOpacity>
	);
};

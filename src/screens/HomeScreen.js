import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Destinations from "../components/Destinations";
import FooterOfInsight from "../components/FooterOfInsight";

export default function HomeScreen() {
	return (
		<SafeAreaView className="flex-1" style={{ backgroundColor: "#ffffff" }}>
			<ScrollView
				showsVerticalScrollIndicator={true}
				className={"space-y-5"}
				contentContainerStyle={{ paddingBottom: 80 }}
			>
				<View
					className="flex-1 justify-center"
					style={{ marginTop: "20%" }}
				>
					<Destinations />
				</View>
			</ScrollView>
			<View>
				<FooterOfInsight />
			</View>
		</SafeAreaView>
	);
}

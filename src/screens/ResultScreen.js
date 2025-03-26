import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuIcon from "../../assets/icons/menu.svg";
import FooterOfResult from "../components/FooterOfResult";

export default function ResultScreen(props) {
	const item = props.route.params;
	const sentences = item.messages || "";

	const getFirstSentence = (text) => {
		const match = text.match(/[^:.!?]*[:.!?]/);
		return match ? match[0].trim() : "";
	};

	const getOtherSentences = (text) => {
		const matches = text.match(/[^:.!?]*[:.!?]/g) || [];
		return matches.slice(1).map((s) => s.trim());
	};

	const otherSentences = getOtherSentences(sentences);

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView
				showsVerticalScrollIndicator={true}
				className="space-y-5 mt-3"
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				<View className="mx-5 flex-row justify-end items-center">
					<TouchableOpacity>
						<MenuIcon />
					</TouchableOpacity>
				</View>

				<View className="mx-4">
					<View
						className="flex-row items-center pl-3 py-4"
						style={{
							borderRadius: 20,
							borderColor: "#f26218",
							borderWidth: 5,
						}}
					>
						<TextInput
							multiline
							numberOfLines={5}
							placeholder="Any complaints today?"
							placeholderTextColor="#aaaaaa"
							className="flex-1 text-base pl-1 tracking-wider"
							style={{
								textAlignVertical: "top",
								minHeight: 50,
								maxHeight: 50,
								color: "#1A1A1A",
								fontSize: 16,
							}}
							value={item.searchText}
						/>
					</View>

					<View className="mx-3 mt-10">
						<Text style={{ fontSize: 18, color: "#1A1A1A" }}>
							{getFirstSentence(sentences)}
						</Text>
					</View>

					{otherSentences.length > 0 && (
						<>
							<View className="mx-3 mt-10">
								<TouchableOpacity>
									<View className="flex-row">
										<View
											className="w-5 h-5 rounded-full mt-2 mr-2"
											style={{
												backgroundColor: "#FF0000",
											}}
										/>
										<View>
											<Text
												style={{
													fontSize: 18,
													color: "#FF0000",
												}}
											>
												Insight
											</Text>
											<View
												style={{
													height: 1,
													backgroundColor: "#FF0000",
													width: "100%",
												}}
											/>
										</View>
									</View>
								</TouchableOpacity>
							</View>

							<View className="mt-10">
								<Text
									style={{ fontSize: 16, color: "#1A1A1A" }}
								>
									{otherSentences.join(" ")}
								</Text>
							</View>
						</>
					)}
				</View>
			</ScrollView>
			<View style={{ backgroundColor: "#ffffff" }}>
				<FooterOfResult />
			</View>
		</SafeAreaView>
	);
}

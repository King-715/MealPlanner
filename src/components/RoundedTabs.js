import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RoundedCornerTabs(props) {
	const [activeTab, setActiveTab] = useState("Tab1"); // Track the active tab
	const data = props.history;
	return (
		<View style={styles.container}>
			<View style={styles.tabContainer}>
				{/* Tab 1 */}
				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "Tab1"
							? styles.activeTab
							: styles.inactiveTab,
						{
							borderTopLeftRadius: 10, // Rounded corners for the first tab
						},
					]}
					onPress={() => setActiveTab("Tab1")}
				>
					<Text
						style={[
							styles.tabText,
							activeTab === "Tab1"
								? styles.activeTabText
								: styles.inactiveTabText,
						]}
					>
						Recent
					</Text>
				</TouchableOpacity>

				{/* Middle Divider */}
				<View style={styles.middleLine} />

				{/* Tab 2 */}
				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "Tab2"
							? styles.activeTab
							: styles.inactiveTab,
						{
							borderTopRightRadius: 10, // Rounded corners for the second tab
						},
					]}
					onPress={() => setActiveTab("Tab1")} // You can use for Recommended text.
				>
					<Text
						style={[
							styles.tabText,
							activeTab === "Tab2"
								? styles.activeTabText
								: styles.inactiveTabText,
						]}
					>
						Recommended
					</Text>
				</TouchableOpacity>
			</View>
			{/* Tab Content */}
			<View style={styles.content}>
				{activeTab === "Tab1" &&
					data.map((item, index) => {
						return (
							<View
								key={index}
								className="mb-2"
								style={{
									borderBottomWidth: 3,
									borderBottomColor: "#aaa",
								}}
							>
								<Text
									className="ml-2"
									style={{
										color: "#1a1a1a",
										fontSize: 16,
										paddingBottom: 10,
									}}
								>
									{item.message_content}
								</Text>
							</View>
						);
					})}
				{activeTab === "Tab2" && (
					<Text style={styles.contentText}>Tab 2 Content</Text>
				)}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: "#ffffff",
	},
	tabContainer: {
		flexDirection: "row",
		// borderWidth: 4,
		// borderColor: "#0176D3", // Initial border color
		// borderTopLeftRadius: 10,
		// borderTopRightRadius: 10,
		// borderBottomWidth: 0,
	},
	tab: {
		flex: 1,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	// middleLine: {
	// 	width: 4, // Thickness of the middle line
	// 	backgroundColor: "#0176D3", // Same color as the container border
	// },
	searchLine: {
		width: 2, // Thickness of the middle line
		backgroundColor: "#0176D3", // Same color as the container border
	},
	activeTab: {
		backgroundColor: "ffffff",
		borderTopLeftRadius: 10,

		borderWidth: 4,
		borderColor: "#0176D3",
		borderBottomWidth: 0, // Remove bottom border for active tab
	},
	inactiveTab: {
		backgroundColor: "#ffffff",
		borderTopRightRadius: 10,
		borderTopWidth: 4,
		borderRightWidth: 4,
		borderTopColor: "#c7dce0",
		borderRightColor: "#c7dce0",
		borderBottomWidth: 4, // Keep bottom border for inactive tab
		borderBottomColor: "#0176D3",
	},
	tabText: {
		fontSize: 16,
	},
	activeTabText: {
		color: "#1a1a1a", // Active tab text color
		fontWeight: "bold",
	},
	inactiveTabText: {
		color: "#aaa", // Inactive tab text color
	},
	content: {
		marginTop: 10,
	},
	contentText: {
		fontSize: 16,
		fontWeight: "bold",
	},
});

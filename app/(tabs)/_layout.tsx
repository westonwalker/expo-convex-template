import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../theme";
import { Image, View, Text } from "react-native";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.dark.background,
				},
				headerTintColor: theme.dark.text,
				headerTitleStyle: {
					fontWeight: "bold",
				},
				animation: "fade",
			}}
		>
			<Tabs.Screen
				name="(home)/index"
				options={{
					headerTitle: () => (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 14,
							}}
						>
							<Image
								source={require("../../assets/images/logo.png")}
								style={{
									width: 36,
									height: 36,
									borderRadius: 18,
									marginLeft: -10,
								}}
							/>
							<Text style={{ color: theme.dark.text }}>
								<Text
									style={{
										fontSize: 25,
										fontWeight: "bold",
									}}
								>
									Tab1
								</Text>
							</Text>
						</View>
					),
					title: "Leaders",
					headerTitleAlign: "left",
					headerTitleStyle: {
						marginLeft: -10,
						marginRight: 0,
					},
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							size={22}
							name="list-ol"
							color={focused ? "#fff" : "#888"}
						/>
					),
					tabBarStyle: {
						backgroundColor: theme.dark.background,
					},
					tabBarActiveTintColor: "#fff",
					tabBarInactiveTintColor: "#888",
				}}
			/>
		</Tabs>
	);
}

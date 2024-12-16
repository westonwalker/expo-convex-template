import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { theme } from "./theme";
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
	unsavedChangesWarning: false,
});

export default function RootLayout() {
	const colorScheme = useColorScheme();

	return (
		<ConvexProvider client={convex}>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.dark.header,
					},
					headerTintColor: theme.dark.text,
					contentStyle: {
						backgroundColor: theme.dark.background,
					},
					animation: "fade",
				}}
			>
				<Stack.Screen
					name="(tabs)"
					options={{
						title: "FF Scoreboard",
						headerShadowVisible: false,
						headerShown: false,
					}}
				/>
			</Stack>
		</ConvexProvider>
	);
}

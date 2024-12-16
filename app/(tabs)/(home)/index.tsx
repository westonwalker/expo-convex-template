import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { theme } from "@/app/theme";
import { ScrollView } from "react-native";
import { useState, useLayoutEffect } from "react";
import { useNavigation } from "expo-router";

export default function Index() {
	const blogPosts = useQuery(api.features.blogPosts.getAllBlogPosts);

	return (
		<ScrollView style={{ flex: 1, backgroundColor: theme.dark.background }}>
			<View
				style={{
					padding: 16,
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 16,
				}}
			>
				{blogPosts?.map((post: any) => (
					<Pressable
						key={post._id}
						style={{
							width: "47%",
							backgroundColor: theme.dark.background,
							borderRadius: 8,
							padding: 16,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.1,
							shadowRadius: 4,
							elevation: 3,
						}}
						onPress={() => {
							// Handle post selection
						}}
					>
						<Text
							style={{
								fontSize: 18,
								fontWeight: "600",
								color: theme.dark.text,
								marginBottom: 8,
							}}
							numberOfLines={2}
						>
							{post.title}
						</Text>
						<Text
							style={{
								fontSize: 14,
								color: theme.dark.text,
								marginBottom: 8,
							}}
							numberOfLines={3}
						>
							{post.body}
						</Text>
						<Text
							style={{
								fontSize: 12,
								color: theme.dark.text,
							}}
						>
							{new Date(post.createdAt).toLocaleDateString()}
						</Text>
						<Text
							style={{
								fontSize: 12,
								color: theme.dark.text,
								marginTop: 4,
							}}
						>
							{post.author}
						</Text>
					</Pressable>
				))}
			</View>
		</ScrollView>
	);
}

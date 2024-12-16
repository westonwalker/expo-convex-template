import React from "react";
import {
	Modal,
	View,
	StyleSheet,
	TouchableOpacity,
	Pressable,
	useWindowDimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";

interface CustomModalProps {
	isVisible: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export function CustomModal({
	isVisible,
	onClose,
	children,
}: CustomModalProps) {
	const { height } = useWindowDimensions();

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={isVisible}
			onRequestClose={onClose}
		>
			<BlurView intensity={30} style={StyleSheet.absoluteFill} />
			<SafeAreaView style={styles.container}>
				<Pressable style={styles.backdrop} onPress={onClose} />
				<View
					style={[styles.modalContent, { maxHeight: height * 0.8 }]}
				>
					{children}
					<TouchableOpacity
						style={styles.closeButton}
						onPress={onClose}
						hitSlop={10}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	backdrop: {
		...StyleSheet.absoluteFillObject,
	},
	modalContent: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		width: "90%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	closeButton: {
		position: "absolute",
		top: 10,
		right: 10,
		padding: 10,
	},
});

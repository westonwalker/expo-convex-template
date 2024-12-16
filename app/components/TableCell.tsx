import { Text } from "react-native";
import { theme } from "@/app/theme";

interface TableCellProps {
	value: any;
	width?: number;
}

export function TableCell({ value, width = 65 }: TableCellProps) {
	return (
		<Text
			style={{
				color: theme.dark.text,
				fontWeight: "bold",
				width,
			}}
		>
			{value}
		</Text>
	);
}

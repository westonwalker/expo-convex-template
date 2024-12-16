import { Text } from "react-native";
import { theme } from "@/app/theme";

interface TableHeaderCellProps {
	label: string;
	width?: number;
}

export function TableHeaderCell({ label, width = 65 }: TableHeaderCellProps) {
	return (
		<Text
			style={{
				color: theme.dark.text,
				width,
			}}
		>
			{label}
		</Text>
	);
}

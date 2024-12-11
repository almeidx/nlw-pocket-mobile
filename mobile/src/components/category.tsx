import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { categoriesIcons } from "@/utils/categories-icons";
import { StyleSheet } from "react-native";
import { Pressable, type PressableProps, Text } from "react-native";

export function Category({
	name,
	iconId,
	isSelected = false,
	...props
}: CategoryProps) {
	const Icon = categoriesIcons[iconId];

	return (
		<Pressable
			style={[styles.container, isSelected && styles.containerSelected]}
			{...props}
		>
			<Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
			<Text style={[styles.name, isSelected && styles.nameSelected]}>
				{name}
			</Text>
		</Pressable>
	);
}

interface CategoryProps extends PressableProps {
	name: string;
	iconId: string;
	isSelected?: boolean;
}

const styles = StyleSheet.create({
	container: {
		height: 36,
		backgroundColor: colors.gray[100],
		borderWidth: 1,
		borderColor: colors.gray[300],
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 12,
		gap: 10,
	},
	name: {
		fontSize: 14,
		color: colors.gray[500],
		fontFamily: fontFamily.regular,
	},
	containerSelected: {
		backgroundColor: colors.green.base,
		borderColor: colors.green.base,
	},
	nameSelected: {
		color: colors.gray[100],
	},
});

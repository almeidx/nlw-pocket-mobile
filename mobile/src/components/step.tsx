import { colors, fontFamily } from "@/styles/theme";
import type { IconProps } from "@tabler/icons-react-native";
import type { ComponentType } from "react";
import { StyleSheet, Text, View } from "react-native";

export function Step({ title, description, icon: Icon }: StepProps) {
	return (
		<View style={styles.container}>
			<Icon size={32} color={colors.red.base} />

			<View style={styles.details}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		gap: 16,
	},
	details: {
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontFamily: fontFamily.semiBold,
		color: colors.gray[600],
	},
	description: {
		fontSize: 14,
		fontFamily: fontFamily.regular,
		color: colors.gray[500],
		marginTop: 4,
	},
});

interface StepProps {
	title: string;
	description: string;
	icon: ComponentType<IconProps>;
}

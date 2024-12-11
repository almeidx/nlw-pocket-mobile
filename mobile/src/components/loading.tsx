import { colors } from "@/styles/colors";
import { ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
	return (
		<ActivityIndicator color={colors.green.base} style={styles.container} />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.gray[100],
	},
});

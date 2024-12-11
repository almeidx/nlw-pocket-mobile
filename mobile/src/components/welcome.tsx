import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { Image, StyleSheet, Text, View } from "react-native";

export function Welcome() {
	return (
		<View>
			<Image source={require("@/assets/logo.png")} style={styles.logo} />

			<Text style={styles.title}>Boas vindas ao Nearby!</Text>

			<Text style={styles.subtitle}>
				Recebe regalias para usar nos teus estabelecimentos favoritos.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {
		width: 48,
		height: 48,
		marginTop: 24,
		marginBottom: 28,
	},
	title: {
		fontSize: 24,
		fontFamily: fontFamily.bold,
		color: colors.gray[600],
	},
	subtitle: {
		fontSize: 16,
		fontFamily: fontFamily.regular,
		color: colors.gray[500],
		marginTop: 12,
	},
});

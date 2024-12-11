import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { StyleSheet, Text, View } from "react-native";
import { Step } from "./step";

export function Steps() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Como funciona?</Text>

			<Step
				title="Encontre estabelecimentos"
				description="Veja locais perto de você que são parceiros Nearby"
				icon={IconMapPin}
			/>

			<Step
				title="Ative o cupom com QR Code"
				description="Escaneie o código no estabelecimento para usar o benefício"
				icon={IconQrcode}
			/>

			<Step
				title="Garanta vantagens perto de você"
				description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
				icon={IconTicket}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 24,
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontFamily: fontFamily.regular,
		color: colors.gray[500],
	},
});

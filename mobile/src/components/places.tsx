import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Place, type PlaceData } from "./place";

export function Places({ data }: PlacesProps) {
	const dimensions = useWindowDimensions();
	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = {
		min: 278,
		max: dimensions.height - 128,
	};

	useEffect(() => {
		bottomSheetRef.current?.expand();
	}, []);

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={[snapPoints.min, snapPoints.max]}
			handleIndicatorStyle={styles.indicator}
			backgroundStyle={styles.container}
			enableOverDrag={false}
		>
			<BottomSheetFlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Place
						data={item}
						// biome-ignore lint/suspicious/noExplicitAny:
						onPress={() => router.navigate(`/market/${item.id}` as any)}
					/>
				)}
				contentContainerStyle={styles.content}
				ListHeaderComponent={() => (
					<Text style={styles.title}>Explora locais perto de ti</Text>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</BottomSheet>
	);
}

interface PlacesProps {
	data: PlaceData[];
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.gray[100],
	},
	content: {
		gap: 12,
		padding: 24,
		paddingBottom: 100,
	},
	indicator: {
		width: 80,
		height: 4,
		backgroundColor: colors.gray[300],
	},
	title: {
		color: colors.gray[400],
		fontSize: 16,
		fontFamily: fontFamily.regular,
		marginBottom: 16,
	},
});

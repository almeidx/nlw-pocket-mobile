import { Categories, type CategoryData } from "@/components/categories";
import type { PlaceData } from "@/components/place";
import { Places } from "@/components/places";
import { api } from "@/lib/api";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

interface MarketData extends PlaceData {
	latitude: number;
	longitude: number;
}

const currentLocation = {
	latitude: -23.561187293883442,
	longitude: -46.656451388116494,
};

export default function Home() {
	const [categories, setCategories] = useState<CategoryData>([]);
	const [category, setCategory] = useState("");

	const [markets, setMarkets] = useState<MarketData[]>([]);

	useEffect(() => {
		async function fetchCategories() {
			try {
				const { data } = await api.get("/categories");
				setCategories(data);
				setCategory(data[0].id);
			} catch (error) {
				console.error(error);
				Alert.alert("Categorias", "Não foi possível carregar as categorias");
			}
		}

		fetchCategories();
	}, []);

	useEffect(() => {
		async function fetchMarkets() {
			try {
				if (!category) {
					return;
				}

				const { data } = await api.get(`/markets/category/${category}`);
				setMarkets(data);
			} catch (error) {
				console.error(error);
				Alert.alert("Locais", "Não foi possível carregar os locais");
			}
		}

		fetchMarkets();
	}, [category]);

	function handleCategorySelect(id: string) {
		setCategory(id);
	}

	return (
		<View style={{ flex: 1, backgroundColor: "#CECECE" }}>
			<Categories
				data={categories}
				selected={category}
				onSelect={handleCategorySelect}
			/>

			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: currentLocation.latitude,
					longitude: currentLocation.longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
				<Marker
					identifier="current"
					coordinate={currentLocation}
					image={require("@/assets/location.png")}
				/>

				{markets.map((market) => (
					<Marker
						key={market.id}
						coordinate={{
							latitude: market.latitude,
							longitude: market.longitude,
						}}
						title={market.name}
						description={market.description}
					>
						<Callout>
							<View>
								<Text
									style={{
										fontSize: 14,
										color: colors.gray[600],
										fontFamily: fontFamily.medium,
									}}
								>
									{market.name}
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: colors.gray[600],
										fontFamily: fontFamily.regular,
									}}
								>
									{market.address}
								</Text>
							</View>
						</Callout>
					</Marker>
				))}
			</MapView>

			<Places data={markets} />
		</View>
	);
}

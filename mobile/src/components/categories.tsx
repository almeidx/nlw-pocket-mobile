import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Category } from "./category";

export function Categories({ data, selected, onSelect }: CategoriesProps) {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Category
					name={item.name}
					iconId={item.id}
					onPress={() => onSelect(item.id)}
					isSelected={item.id === selected}
				/>
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.content}
			style={styles.container}
		/>
	);
}

interface CategoriesProps {
	data: CategoryData;
	selected: string;
	onSelect: (id: string) => void;
}

export type CategoryData = {
	id: string;
	name: string;
}[];

const styles = StyleSheet.create({
	container: {
		maxHeight: 36,
		position: "absolute",
		zIndex: 1,
		// top: 64,
		top: 32,
	},
	content: {
		gap: 8,
		paddingHorizontal: 24,
	},
});

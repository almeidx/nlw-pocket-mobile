import { colors, fontFamily } from "@/styles/theme";
import type { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import type { ComponentType } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	type TextProps,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

export function Button({
	children,
	style,
	isLoading = false,
	...props
}: ButtonProps) {
	return (
		<TouchableOpacity
			style={[styles.container, style]}
			activeOpacity={0.8}
			disabled={isLoading}
			{...props}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={colors.gray[100]} />
			) : (
				children
			)}
		</TouchableOpacity>
	);
}

function Title({ children }: TextProps) {
	return <Text style={styles.title}>{children}</Text>;
}

function Icon({ icon: Icon }: IconProps) {
	return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

interface ButtonProps extends TouchableOpacityProps {
	isLoading?: boolean;
}

interface IconProps {
	icon: ComponentType<TablerIconProps>;
}

const styles = StyleSheet.create({
	container: {
		height: 56,
		maxHeight: 56,
		backgroundColor: colors.green.base,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 14,
	},
	title: {
		color: colors.gray[100],
		fontFamily: fontFamily.semiBold,
		fontSize: 16,
	},
});

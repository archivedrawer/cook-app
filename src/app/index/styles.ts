import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: theme.fonts.size.heading.xl,
        fontFamily: theme.fonts.family.bold,
        marginTop: 42,
        lineHeight: 36,
    },
    subtitle: {
        fontSize: theme.fonts.size.heading.xl,
        fontFamily: theme.fonts.family.regular,
        lineHeight: 36,
    },
    message: {
        fontSize: theme.fonts.size.body.md,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.gray_400,
        marginTop: 12,
        marginBottom: 38,
    },
});

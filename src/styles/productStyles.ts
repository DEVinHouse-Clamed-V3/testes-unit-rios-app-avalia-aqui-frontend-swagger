import { StyleSheet } from "react-native";

export const productStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: "blue",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textLoading: {
        fontSize: 18,
        color: "#333",
        marginTop: 10,
    },
});
import { StyleSheet } from "react-native";

export const productsListStyles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 16,
        flexDirection: "row",
        overflow: "hidden",
        elevation: 5,
        marginBottom: 14,
    },
    image: {
        width: 100,
        height: "100%",
    },
    detailsArea: {
        flex: 1,
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    brand: {
        fontSize: 14,
        color: "#666",
    },
    description: {
        fontSize: 14,
        color: "#999",
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        textAlign: "left",
        marginTop: 10,
    },
    button: {
        fontSize: 14,
        color: "#333",
        backgroundColor: "#E59500",
        padding: 10,
        borderRadius: 8,
        textAlign: "center",
        marginTop: 10,
        textTransform: "uppercase",
    },

});
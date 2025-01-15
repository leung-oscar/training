import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const OrderListItem = ({ order }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: order.Restaurant.image }}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
                <Text style={styles.orderDetails}>3 items for $999.99</Text>
                <Text style={styles.orderStatus}>5 days ago · {order.status}</Text>
            </View>
        </View>
    );
};

export default OrderListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // For Android shadow
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center",
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    orderDetails: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    orderStatus: {
        fontSize: 12,
        color: "green",
    },
});

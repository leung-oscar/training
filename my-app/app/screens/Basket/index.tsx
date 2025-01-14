import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'
import { FlatList } from 'react-native-gesture-handler';
// const dish = restaurants[0].dish[0];
const restaurant = restaurants[0];

const BasketDishItem = ({basketDish}) => {
    return (
        <View>
            <Text> {basketDish.name} </Text>
            <Text> {basketDish.price} </Text>
        </View>
    )
}

const Basket = () => {
    return (
        <View style={styles.page}>
            <Text>{restaurant.name}</Text>
            <Text>Your Items</Text>
            <FlatList
                data={restaurant.dishes}
                renderItem={({item}) => <BasketDishItem basketDish={item} />}
            />
            <View style={styles.separator}></View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Create order</Text>
            </View>
            
        </View>
    )
}

export default Basket

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    description: {
        color: "black",
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: "black",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Space out items evenly
    },
    quantityText: {
        fontSize: 24,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: "#f08a5d", // Example background color
        padding: 15, // Padding inside the button
        borderRadius: 10, // Rounded corners
        alignItems: "center", // Center text horizontally
        marginTop: 20, // Margin to create space above the button
    },
    buttonText: {
        fontSize: 18, // Font size for the button text
        fontWeight: "bold", // Bold text
        color: "#ffffff", // Text color (white)
    }
});

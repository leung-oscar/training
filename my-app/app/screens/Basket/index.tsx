import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Imported but not used
import { useState } from 'react'; // Imported but not used

import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json';
// const dish = restaurants[0].dish[0];
const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
    return (
        <View style={styles.dishItem}>
            <Text style={styles.dishName}>{basketDish.name}</Text>
            <Text style={styles.dishPrice}>${basketDish.price}</Text>
        </View>
    );
};

const Basket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.description}>Your Items</Text>
            <FlatList
                data={restaurant.dishes}
                renderItem={({ item }) => <BasketDishItem basketDish={item} />}
                keyExtractor={(item) => item.name} // Ensure each item has a unique key
            />
            <View style={styles.separator}></View>
            <View>Subtotal</View>
            <View>Total</View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Create order</Text>
            </View>
        </View>
    );
};

export default Basket;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    description: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#f08a5d',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    dishItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f4f4f4',
        borderRadius: 8,
    },
    dishName: {
        fontSize: 16,
        fontWeight: '500',
    },
    dishPrice: {
        fontSize: 16,
        color: 'green',
    },
});

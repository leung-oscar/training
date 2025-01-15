import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the type for a single dish
interface BasketDish {
    name: string;
    price: number;
}

// Define the type for the props of BasketDishItem
interface BasketDishItemProps {
    basketDish: BasketDish;
}

const BasketDishItem = ({ basketDish }: BasketDishItemProps) => {
    return (
        <View style={styles.dishItem}>
            <Text style={styles.dishName}>{basketDish.name}</Text>
            <Text style={styles.dishPrice}>${basketDish.price.toFixed(2)}</Text>
        </View>
    );
};

export default BasketDishItem;

const styles = StyleSheet.create({
    dishItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    dishName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    dishPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#28a745', // Bright green color
    },
});

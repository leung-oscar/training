import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'
const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {

    // const [value,setter] = useState();
    const [quantity,setQuantity] = useState(1);

    const onMinus = () => {
        if(quantity > 1)
            setQuantity(quantity - 1)
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    
    return (
        <View style={styles.page}>


            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.separator}/>


            <View style={styles.row}>
                <AntDesign name="minuscircle" size={60} color={"black"} onPress={onMinus} />
                <Text style={styles.quantityText}>{quantity}</Text>
                <AntDesign name="pluscircle" size={60} color={"black"} onPress={onPlus} />
            </View>


            <View style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} items to basket</Text>
            </View>

        </View>


    )
}

export default DishDetailsScreen

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

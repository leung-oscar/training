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


        </View>


    )
}

export default DishDetailsScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        paddingHorizontal: 20, // Add padding for horizontal spacing
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    description: {
        color: "black",
        marginBottom: 20, // Add margin to separate description from the row
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
        paddingHorizontal: 20, // Add horizontal padding within the row
    },
    quantityText: {
        fontSize: 24, // Increase font size for better visibility
        marginHorizontal: 5, // Smaller margin between the text and icons
    }
});

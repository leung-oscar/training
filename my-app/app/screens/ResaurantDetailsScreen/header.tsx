import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
    return (
        <View style={styles.page}>

            <Image source={{uri:restaurant.image}} style={styles.image}/>

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>Delivery Fee {restaurant.deliveryFee}</Text>
                <Text style={styles.subtitle}>Delivery Time ~{restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}</Text>
            </View>
    
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    container:{
        margin:10,
    },
    iconContainer:{
        position:"absolute",
        top:20,
        left:10,
        zIndex: 1,
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',  
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        
    },
});


export default RestaurantDetailsPage;
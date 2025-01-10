import React from 'react';
import {View, Text, Image} from 'react-native';
import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'
import styles from '/workspaces/training/my-app/app/screens/ResaurantDetailsScreen/styles.tsx';

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



export default RestaurantDetailsPage;
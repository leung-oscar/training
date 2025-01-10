import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '/workspaces/training/my-app/assets/components/dishListItem.jsx';
import header from '/workspaces/training/my-app/app/screens/ResaurantDetailsScreen/header.tsx'


const restaurant = restaurants[0];


const RestaurantDetailsPage = () => {
    return (
        <View style={styles.page}>
            <Ionicons
                name='arrow-back-circle'
                size={45}
                color="white"
                style={styles.iconContainer}
            />
            <FlatList
                ListHeaderComponent={header}
                data={restaurant.dishes}
                renderItem={({item})=> <DishListItem dish={item}/> }
            />
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
import React from 'react';
import {View, FlatList} from 'react-native';
import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '/workspaces/training/my-app/assets/components/dishListItem.jsx';
import Header from '/workspaces/training/my-app/app/screens/ResaurantDetailsScreen/header.tsx'
import styles from '/workspaces/training/my-app/app/screens/ResaurantDetailsScreen/styles.tsx';

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
                ListHeaderComponent={() => <Header restaurant={restaurant}/>}
                data={restaurant.dishes}
                renderItem={({item})=> <DishListItem dish={item}/> }
            />
        </View>
    )
}




export default RestaurantDetailsPage;
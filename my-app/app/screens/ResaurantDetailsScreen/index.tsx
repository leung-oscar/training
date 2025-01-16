import React from 'react';
import {View, FlatList} from 'react-native';
import restaurants from '/workspaces/training/my-app/assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '/workspaces/training/my-app/assets/components/dishListItem.jsx';
import Header from '/workspaces/training/my-app/app/screens/ResaurantDetailsScreen/header.tsx'
import styles from '/workspaces/training/my-app/app/screens/ResaurantDetailsScreen/styles.tsx';

import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0];


const RestaurantDetailsPage = () => {
    
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    console.warn(id);



    return (
        <View style={styles.page}>
            <Ionicons
                onPress={navigation.goBack}
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
import React from "react";
import {FlatList, StyleSheet} from "react-native";
import RestaurantItem from "/workspaces/training/my-app/assets/components/restaurantItem.jsx"
import restaurant from "/workspaces/training/my-app/assets/data/restaurants.json"

export default function HomeScreen() {
  return (
    // Restaurant Items
    <FlatList
    data={restaurant}
    renderItem={({item}) => <RestaurantItem restaurant={item}/>}
    showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({})
import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import RestaurantItem from "/workspaces/training/my-app/assets/components/restaurantItem.jsx"
import restaurant from "/workspaces/training/my-app/assets/data/restaurants.json"

export default function HomeScreen() {
  return (
    // Restaurant Items
    <View style={styles.page}>
      <FlatList
      data={restaurant}
      renderItem={({item}) => <RestaurantItem restaurant={item}/>}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    padding:10,
  }
})
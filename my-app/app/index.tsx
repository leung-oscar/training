import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import RestaurantItem from "/workspaces/training/my-app/assets/components/restaurantItem.jsx"
import restaurant from "/workspaces/training/my-app/assets/data/restaurants.json"
export default function Index() {
  return (
    <View style={styles.container}>
      {/* Restaurant Item */}
        <RestaurantItem restaurant = {restaurant[0]}/>
        <RestaurantItem restaurant = {restaurant[1]}/>
        <RestaurantItem restaurant = {restaurant[2]}/>
        <RestaurantItem restaurant = {restaurant[3]}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "lightblue",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
  }
})
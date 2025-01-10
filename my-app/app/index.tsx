import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import RestaurantItem from "/workspaces/training/my-app/assets/components/restaurantItem.jsx"

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Restaurant Item */}
        <RestaurantItem joop = "joop joop1"/>
        <RestaurantItem joop = "joop joop2"/>
        <RestaurantItem joop = "joop joop3"/>
        <RestaurantItem joop = "joop joop4"/>

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
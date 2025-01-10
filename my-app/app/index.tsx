import React from "react";
import {FlatList, View, StyleSheet} from "react-native";
import RestaurantItem from "/workspaces/training/my-app/assets/components/restaurantItem.jsx"
import restaurant from "/workspaces/training/my-app/assets/data/restaurants.json"
export default function Index() {
  return (
    <View style={styles.container}>
      {/* Restaurant Items */}
      <FlatList
        data={restaurant}
        renderItem={({item}) => <RestaurantItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
      />
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
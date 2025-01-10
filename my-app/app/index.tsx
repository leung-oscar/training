import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import RestaurantItem from "/workspaces/training/my-app/assets/components/restaurantItem.jsx"

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Restaurant Item */}
        <RestaurantItem/>
        <RestaurantItem/>
        <RestaurantItem/>
        <RestaurantItem/>
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
  },
  restaurantContainer:{
    width: "100%",
    marginVertical:5,
  },
  image:{
    width: "100%",
    aspectRatio: 5/3,
    marginBottom:5,
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    marginVertical:5
  },
  subtitle:{
    color:"gray"
  }
})
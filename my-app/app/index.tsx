import React from "react";
import {View, StyleSheet} from "react-native";
import HomeScreen from "./screens/home";
import RestaurantDetailsPage from "./screens/ResaurantDetailsScreen";
import DishDetailsScreen from "./screens/DishDetailsScreen";
export default function Index() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <RestaurantDetailsPage/> */}
      <DishDetailsScreen/>
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
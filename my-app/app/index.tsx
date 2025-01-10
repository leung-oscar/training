import React from "react";
import {View, StyleSheet} from "react-native";
import HomeScreen from "./screens/home";
import RestaurantDetailsPage from "./screens/restaurantdetails";
export default function Index() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <RestaurantDetailsPage/>
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
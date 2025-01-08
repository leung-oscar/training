import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import RestaurantItem from "./components/RestaurantItem";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Text */}
      <Text style={styles.header}>Welcome to our menu!</Text> 
      {/* Restaurant Item */}
      <RestaurantItem/>
      <RestaurantItem/>
      <RestaurantItem/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  header: {
    fontSize: 42,
    fontWeight: "bold", 
  },
});

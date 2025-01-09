import { Text, View, StyleSheet, ScrollView } from "react-native";
import RestaurantItem from "./components/RestaurantItem";
import restaurants from "./restaurants.json";
import React from "react";

export default function Index() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Text */}
      <Text style={styles.header}>Welcome to our menu!</Text>
      {/* Restaurant Items */}
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  contentContainer: {
    alignItems: "center",
    padding: 10,
  },
  header: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});

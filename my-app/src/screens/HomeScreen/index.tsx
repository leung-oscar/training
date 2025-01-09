
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import RestaurantItem from "@/src/components/RestaurantItem";
import restaurants from "@/src/restaurants.json"


export default function App() {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({

});

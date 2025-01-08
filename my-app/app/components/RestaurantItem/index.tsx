import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        style={styles.image}
        source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg" }}
      />
      <Text style={styles.title}>The Bomb</Text>
      <Text style={styles.subtitles}>$14.99 ~10-15 minutes</Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {  
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: 300,
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitles: {
    color: "gray",
  },
});

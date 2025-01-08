import React from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        style={styles.image}
        source={{ uri: restaurant.image }}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitles}>
        ${restaurant.deliveryFee.toFixed(2)} ~{restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes | Rating: {restaurant.rating}
      </Text>
      <Text style={styles.dishesHeader}>Dishes:</Text>
      <FlatList
        data={restaurant.dishes}
        // keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.dishContainer}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishDescription}>{item.description}</Text>
            <Text style={styles.dishPrice}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {  
    width: 1040,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 300,
    aspectRatio: 16 / 9,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitles: {
    color: "gray",
    marginBottom: 10,
  },
  dishesHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  dishContainer: {
    marginBottom: 10,
  },
  dishName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dishDescription: {
    color: "gray",
    marginBottom: 5,
  },
  dishPrice: {
    fontSize: 14,
    color: "darkgreen",
  },
});

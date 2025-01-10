import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";

const RestaurantItem = ({restaurant}) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        source={{uri: restaurant.image}}
        style={styles.image}
      />

      <View style={styles.row}>
        {/* Row 1 */}
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>Delivery Fee {restaurant.deliveryFee}</Text>
          <Text style={styles.subtitle}>Delivery Time ~{restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}</Text>
        </View>

        {/* Row 2 */}
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>


      </View>
    </View>
  );
}

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    backgroundColor: "#ddd",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

  
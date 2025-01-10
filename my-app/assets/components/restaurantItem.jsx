import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";

const RestaurantItem = ({restaurant}) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        source={{uri: restaurant.image}}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Delivery Fee {restaurant.deliveryFee}</Text>
      <Text style={styles.subtitle}>Delivery Time ~{restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}</Text>
      
    </View>
  );
}

export default RestaurantItem;

const styles = StyleSheet.create({
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
import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";

const RestaurantItem = ({joop}) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image 
        source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"}}
        style={styles.image}
      />
      <Text style={styles.title}>{joop}</Text>
      <Text style={styles.subtitle}>$5.99</Text>
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
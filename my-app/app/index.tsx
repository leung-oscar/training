import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const RestaurantItem = () => {
  return (
    <View>
        <Image 
          style={styles.image}
          source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"}}
          />
          <Text style={styles.title}>The Bomb</Text>
          <Text style={styles.subtitles}>$14.99 ~10-15 minutes</Text>
    </View>
  );
};
    
export default function Index() {
      return (
        <View style={styles.container}>
        {/* Text */}
        <Text style={styles.header}>Welcome to our menu!</Text> 
        {/* Restaurant Item */}
        <RestaurantItem/>
        <RestaurantItem/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  restraurantContainer:{
    height: "100%",
    width: 300,
  },
  image:{
    height: 300,
    aspectRatio: 5/3,
    marginBottom: 5
  },
  header:{
    fontSize:42,
    fontWeight:"condensedBold"
  },
  title:{
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitles: {
    color:"gray"
  }
})
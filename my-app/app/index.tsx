import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Text */}
      <Text>Hello World!</Text> 
      {/* Restaurant Item */}
      
        <Image style={styles.image}
          source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg" }}
        />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  restraurantContainer:{
    height: "100%",
    width: 300,
  },
  image:{
    height: "100%",
    aspectRatio: 5/3,
  }
})
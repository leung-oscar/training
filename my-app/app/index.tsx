import React from "react";
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

    <Text>Hello World!</Text> 
    
    <Image 
      source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg" }}
      style={{ width: 200, height: 200 }} // You might want to specify width and height
    />

    </View>
  );
}

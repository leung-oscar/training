import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello Oscar!</Text>
      {/* Restaurant Item */}
      <View>
        <Image 
          source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"}}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "lightblue",
    alignItems:"center",
    justifyContent:"center"
  },
  image:{
    width: 300,
    height: 300
  }
})
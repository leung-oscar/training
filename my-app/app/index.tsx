import React from "react";
import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello Oscar Worlds!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "lightblue",
    alignItems:"center",
    justifyContent:"center"
  }
})
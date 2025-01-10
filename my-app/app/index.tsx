import React from "react";
import {View, StyleSheet} from "react-native";
import HomeScreen from "/workspaces/training/my-app/app/screens/homescreen.tsx";
export default function Index() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "lightblue",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
  }
})
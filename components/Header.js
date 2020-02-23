import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

import Color from "../constants/Color";

const Header = props => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="blue" />
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontFamily: "open-sans-bold"
  }
});

export default Header;

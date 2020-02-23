import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Color";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    fontSize: 22,
    color: "green"
  }
});

export default NumberContainer;

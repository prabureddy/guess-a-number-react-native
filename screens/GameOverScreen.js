import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../constants/Color";

import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 30,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 20
  },
  resultText: {
    fontSize: 20,
    textAlign: "center"
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary
  }
});

export default GameOverScreen;

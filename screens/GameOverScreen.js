import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOverCard}>
        <Text style={styles.gameOverText}>The Game is Over! :)</Text>
        <Text style={styles.summaryText}>
          Number of Rounds : {props.roundsNumber}
        </Text>
        <Text style={styles.summaryText}>Number was : {props.userNumber}</Text>
        <Button title="Restart" onPress={props.onRestart} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverCard: {
    width: 400,
    height: 300,
    maxWidth: "80%",
    justifyContent: "center",
    shadowColor: "blue",
  },
  gameOverText: {
    paddingBottom: 10,
    fontSize: 30,
  },
  summaryText: {
    fontSize: 22,
  },
});

export default GameOverScreen;

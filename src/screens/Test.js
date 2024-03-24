import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  pepeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
  },
  pepeDance: {
    flex: 1,
    resizeMode: 'cover',
  }
});

export const TestScreen = () => {
  return (
    <View style={styles.pepeContainer}>
      <Image
        style={styles.pepeDance}
        source={require('../../assets/pepe.gif')}
      />
    </View>
  )
}

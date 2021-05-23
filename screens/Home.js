import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import Background from "../assets/background.jsx";
import Logo from "../assets/logo.png";

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    button: {
      width: 250,
      height: 48,
      backgroundColor: "#FF5656",
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: 'bold'
    },
    logo: {
      width: 290,
      height: 175,
      marginTop: 185,
    },
  });

  const startButton = (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("Pressed")}
    >
      <Text style={styles.text}>Start</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Background />
      <View>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View>{startButton}</View>
    </View>
  );
}

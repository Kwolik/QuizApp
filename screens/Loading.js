import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

import bg from "../assets/bg.png";
import Logo from "../assets/logo.png";
import BottomMenu from "../components/BottomMenu";

export default function Loading({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    back: {
      flex: 1,
    },
    button: {
      width: 250,
      height: 48,
      backgroundColor: "#FF5656",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
    logo: {
      width: 290,
      height: 175,
      marginTop: 185,
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <View>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.horizontal}>
          <ActivityIndicator size={100} color="#999999"/>
        </View>
      </View>
    </ImageBackground>
  );
}

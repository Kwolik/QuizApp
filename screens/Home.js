import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import bg from "../assets/bg.png";
import Logo from "../assets/logo.png";
import BottomMenu from "../components/BottomMenu";

export default function Home({ navigation }) {
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
  });

  const startButton = (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Category")}
    >
      <Text style={styles.text}>Start</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <View>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View>{startButton}</View>
        <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

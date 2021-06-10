import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import bg from "../assets/bg.png";

export default function Difficulty({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    back: {
      flex: 1,
    },
    arrow: {
      position: "absolute",
      left: 20,
      top: 40,
    },
    title: {
      fontSize: 42,
      color: "#2D2D2D",
      marginTop: 22,
    },
    button: {
      width: 320,
      height: 50,
      backgroundColor: "#FAFAFA",
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      borderWidth: 1,
      borderColor: "#DBDBDB",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    list: {
      flex: 1,
      margin: 10,
      marginBottom: "40%",
      justifyContent: "center",
    },
    name: {
      color: "#2D2D2D",
      fontSize: 18,
    },
  });

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={28} color={"#2D2D2D"} />
        </TouchableOpacity>
        <Text style={styles.title}>Difficulty</Text>

        <View style={styles.list}>

          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Type", { difficulty: "easy" })}>
            <Text style={styles.name}>
              Easy
                </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Type", { difficulty: "medium" })}>
            <Text style={styles.name}>
              Medium
                </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Type", { difficulty: "hard" })}>
            <Text style={styles.name}>
              Hard
                </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Type", { difficulty: "" })}>
            <Text style={styles.name}>
              Any
                </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
}
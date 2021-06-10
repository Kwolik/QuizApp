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

export default function Type({ navigation }) {
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
      margin: 10,
      marginTop: "50%",
      height: "52%",
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
        <Text style={styles.title}>Type</Text>

        <View style={styles.list}>

        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("QuestionNumber", {type:"boolean"})}> 
            <Text style={styles.name}>
                True/False
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate("QuestionNumber", {type:"multiple"})}>
            <Text style={styles.name}>
                A/B/C/D
            </Text>
        </TouchableOpacity> 

        </View>
      </View>
    </ImageBackground>
  );
}
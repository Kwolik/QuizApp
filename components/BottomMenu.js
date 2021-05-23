import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function BottomMenu( props ) {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 10,
      justifyContent: "space-between",
      flexDirection: "row",
      width: "75%",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 20,
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
    {/* History */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("History")}
      >
        <FontAwesome name="history" size={64} color={"white"} />
        <Text style={styles.text}>History</Text>
      </TouchableOpacity>

    {/* Home */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={64} color={"white"} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

    {/* About */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("About")}
      >
        <MaterialIcons name="group-work" size={64} color={"white"} />
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Background from "../assets/background.jsx";
import BottomMenu from "../components/BottomMenu";

export default function History({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
        <Background />
        <Text>History</Text>
        <BottomMenu navigation={navigation}/>
    </View>
  );
}

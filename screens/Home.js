import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

import Background from '../assets/background.jsx';

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonLabelStyle: {
      color: "white",
      fontSize: 24,
      textTransform: 'none',
    },
    buttonContentStyle: {
      width: 250,
      height: 48,
    }
  });

  const startButton = (
    <Button
      mode="contained"
      color="#FF5656"
      children='Start'
      contentStyle={styles.buttonContentStyle}
      labelStyle={styles.buttonLabelStyle}
      onPress={() => console.log("Pressed")}
    >
    </Button>
  );

  return (
    <View style={styles.container}>
      <Background />
      {startButton}
    </View>
  );
}
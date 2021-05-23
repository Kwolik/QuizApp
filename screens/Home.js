import React from 'react';
import { StyleSheet, View } from 'react-native';

import Background from '../assets/background.jsx';

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Background/>
    </View>
  );
}
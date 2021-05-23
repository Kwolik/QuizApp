import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <Text> Home</Text>
      <Button
      title="Click Here"
      />
    </View>
  );
}
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import bg from '../assets/bg.png';
import BottomMenu from '../components/BottomMenu';

export default function History({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    back: {
      flex: 1,
    },
  });

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

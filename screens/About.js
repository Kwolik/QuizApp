import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import bg from '../assets/bg.png';
import BottomMenu from '../components/BottomMenu';

export default function About({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      //justifyContent: "center",
    },
    back: {
      flex: 1,
    },
    authorsStyle: {
      //textAlign: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 24,
      marginHorizontal: '5%',
      marginTop: -80,
      marginBottom: 110,
      justifyContent: "center",
    },
    names: {
      //textAlign: 'center',
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      marginHorizontal: '5%',
      marginTop: -110,
      marginBottom: 110,
      justifyContent: "center",
    },
    imageStyle: {
      flex: 1,
      width: '100%', 
      height: '100%',
      resizeMode: 'contain',
    },
  });

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
      <Image style={styles.imageStyle} source={require('../assets/authorsAsset.png')}/>
      <Text style={styles.authorsStyle}> Authors: </Text>
      <Text style={styles.names}> • Remigiusz Drobiński • Kamil Donda • Daniel Piątek • Robert Kwoll • Robert Olej • Michał Łepik </Text>
      <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

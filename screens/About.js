import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import bg from '../assets/bg.png';
import BottomMenu from '../components/BottomMenu';

export default function About({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    back: {
      flex: 1,
    },
    authorsStyle: {
      alignSelf: 'stretch',
      marginLeft: '10%',
      textAlign: 'left',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 16,
      marginTop: -30,
      marginBottom: 140,
    },
    names: {
      color: 'black',
      textAlign: 'left',
      fontSize: 15,
      marginTop: -130,
      marginBottom: 190,
    },
    imageStyle: {
      flex: 1,
      width: '90%', 
      height: '90%',
      resizeMode: 'contain',
      marginTop: 50,
    },
  });

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
      <Image style={styles.imageStyle} source={require('../assets/authorsAsset.png')}/>
      <Text style={styles.authorsStyle}> Authors: </Text>
      <Text style={styles.names}> Kamil Donda   Daniel Piątek {"\n"} Robert Kwoll   Robert Olej </Text>
      <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

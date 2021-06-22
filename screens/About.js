import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity, useColorScheme } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import bg from '../assets/bg.png';
import darkbg from '../assets/darkBackground.png';
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
    arrow: {
      position: 'absolute',
      left: 20,
      top: 40,
    },
    title: {
      fontSize: 42,
      marginTop: 22,
    },
    authorsStyle: {
      alignSelf: 'stretch',
      marginLeft: '10%',
      textAlign: 'left',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20,
    },
    authors: {
      marginTop: 10,
    },
    names: {
      color: 'black',
      textAlign: 'left',
      fontSize: 20,
    },
    imageStyle: {
      width: '95%',
      height: '40%', 
      resizeMode: 'contain',
      marginTop: 45,
      // borderWidth: 2,
      // borderColor: 'red',
    },
    lightThemeBackground: {
      backgroundColor: '#FAFAFA'
    },
    darkThemeBackround: 
    {
      backgroundColor: '#2D2D2D'
    },
    lightThemeTitle: {
      color: '#2D2D2D',
    },
    darkThemeTitle: {
      color: '#FAFAFA',
    },
  });

  const colorScheme = useColorScheme();
  const themeBackgroundStyle = colorScheme === 'light' ? styles.lightThemeBackground : styles.darkThemeBackround
  const themeTitleStyle = colorScheme === 'light' ? styles.lightThemeTitle : styles.darkThemeTitle

  return (
    <ImageBackground source={colorScheme === 'light' ? bg : darkbg} style={[styles.back, themeBackgroundStyle]} resizeMode="stretch">
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={28} color={colorScheme === 'light' ? '#2D2D2D' : '#FAFAFA'} />
        </TouchableOpacity>
        <Text style={[styles.title, themeTitleStyle]}>About</Text>
        <Image style={styles.imageStyle} source={colorScheme === 'light' ? require('../assets/authorsAsset.png') : require('../assets/DarkmodeAuthorsAsset.png')}/>
        <View style={styles.authors}>
          <Text style={[styles.authorsStyle, themeTitleStyle]}> Authors: </Text>
          <Text style={[styles.names, themeTitleStyle]}> Kamil Donda   Daniel Piątek {"\n"} Robert Kwoll   Robert Olej </Text>
        </View>
        <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

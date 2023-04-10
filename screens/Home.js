import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import bg from '../assets/bg.png';
import darkbg from '../assets/darkBackground.png';
import logo from '../assets/logo.png';
import whiteLogo from '../assets/whiteLogo.png';
import BottomMenu from '../components/BottomMenu';

export default function Home({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    back: {
      flex: 1,
    },
    button: {
      width: 250,
      height: 48,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    logo: {
      width: 290,
      height: 175,
      marginTop: 185,
    },
    lightThemeBackground: {
      backgroundColor: '#FAFAFA',
    },
    darkThemeBackround: {
      backgroundColor: '#2D2D2D',
    },
    lightThemeButton: {
      backgroundColor: '#FF5656',
    },
    darkThemeButton: {
      backgroundColor: '#CC8406',
    },
  });

  const colorScheme = useColorScheme();
  const themeBackgroundStyle =
    colorScheme === 'light' ? styles.lightThemeBackground : styles.darkThemeBackround;
  const themeButtonStyle = colorScheme === 'light' ? styles.lightThemeButton : styles.darkThemeButton;

  loadHistory = async () => {
    try {
      if (history.historyArray.length == 0) {
        if (JSON.parse(await AsyncStorage.getItem('history')) != 0) {
          history.historyArray = JSON.parse(await AsyncStorage.getItem('history'));
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  React.useEffect(() => {
    loadHistory();
  });

  console.log(history.historyArray);

  const startButton = (
    <TouchableOpacity
      style={[styles.button, themeButtonStyle]}
      onPress={() => navigation.navigate('Category')}
    >
      <Text style={styles.text}>Start</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={colorScheme === 'light' ? bg : darkbg}
      style={[styles.back, themeBackgroundStyle]}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View>
          <Image source={colorScheme === 'light' ? logo : whiteLogo} style={styles.logo} />
        </View>
        <View>{startButton}</View>
        <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

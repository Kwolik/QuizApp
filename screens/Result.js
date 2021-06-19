import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, useColorScheme } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import bg from '../assets/bg.png';

const getResultText = (correctRate) => {
  if (correctRate > 0.8) {
    return 'Well done!';
  }

  if (correctRate > 0.5) {
    return 'Not bad';
  }

  return 'Maybe next time...';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  back: {
    flex: 1,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 72,
  },
  title: {
    fontSize: 42,
    marginTop: 22,
  },
  result: {
    margin: 0,
    fontSize: 42,
    fontWeight: '500',
  },
  again: {
    fontSize: 22,
    marginTop: 22,
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

const Result = ({ navigation, route }) => {
  const { result, questionsNumber } = route.params;

  const colorScheme = useColorScheme();
  const themeBackgroundStyle = colorScheme === 'light' ? styles.lightThemeBackground : styles.darkThemeBackround
  const themeTitleStyle = colorScheme === 'light' ? styles.lightThemeTitle : styles.darkThemeTitle

  return (
    <ImageBackground source={bg} style={[styles.back, themeBackgroundStyle]} resizeMode="stretch">
      <View style={styles.container}>
        <Text style={[styles.title, themeTitleStyle]}>{getResultText(result / questionsNumber)}</Text>

        <View style={styles.section}>
          <Text style={[styles.title, themeTitleStyle]}>Your result:</Text>
          <Text style={[styles.result, themeTitleStyle]}>
            {result}/{questionsNumber}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.again, themeTitleStyle]}>Try again!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <EvilIcons name="redo" size={84} color={colorScheme === 'light' ? '#2D2D2D' : '#FAFAFA'} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Result;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, BackHandler } from 'react-native';
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
    color: '#2D2D2D',
    marginTop: 22,
  },
  result: {
    margin: 0,
    fontSize: 42,
    fontWeight: '500',
  },
});

const Result = ({ navigation, route }) => {
  const { result, questionsNumber } = route.params;

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <Text style={styles.title}>{getResultText(result / questionsNumber)}</Text>

        <View style={styles.section}>
          <Text style={styles.title}>Your result:</Text>
          <Text style={styles.result}>
            {result}/{questionsNumber}
          </Text>
        </View>

        <View style={styles.section}>
          <Text>Try again!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <EvilIcons name="redo" size={64} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Result;

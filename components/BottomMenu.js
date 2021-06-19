import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function BottomMenu(props) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 10,
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '75%',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 21,
    },
    lightThemeText: {
      color: '#FAFAFA'
    },
    darkThemeText: {
      color: '#2D2D2D'
    }
  });

  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
  const themeIconStyle = colorScheme === 'light' ? '#FAFAFA' : '#2D2D2D'

  return (
    <View style={styles.container}>
      {/* History */}
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('History')}>
        <FontAwesome name="history" size={48} color={themeIconStyle} />
        <Text style={[styles.text, themeTextStyle]}>History</Text>
      </TouchableOpacity>

      {/* Home */}
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
        <FontAwesome name="home" size={48} color={themeIconStyle} />
        <Text style={[styles.text, themeTextStyle]}>Home</Text>
      </TouchableOpacity>

      {/* About */}
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('About')}>
        <MaterialIcons name="group-work" size={48} color={themeIconStyle} />
        <Text style={[styles.text, themeTextStyle]}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

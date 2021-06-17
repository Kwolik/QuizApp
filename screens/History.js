import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';

import bg from '../assets/bg.png';
import BottomMenu from '../components/BottomMenu';


history = {
  index: 0,
  historyArray: [      
]
}


export default function History({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    back: {
      flex: 1,
    },
    button: {
      width: 320,
      height: 70,
      backgroundColor: '#FAFAFA',
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderWidth: 1,
      borderColor: '#DBDBDB',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    name: {
      color: '#2D2D2D',
      fontSize: 18,
    },
    list: {
      margin: 10,
      marginTop: '18%',
      height: '52%',
    },
    title: {
      fontSize: 42,
      color: '#2D2D2D',
      marginTop: 22,
    },
    row1: {
      marginRight: '3%',
      marginBottom: '2%',
    },
    row2: {
      marginLeft: '2%',

    },
    text1: {
      color: '#2D2D2D',
      fontSize: 17,
    },
    text2: {
      color: '#2D2D2D',
      fontSize: 17,
    },
    text3: {
      color: '#2D2D2D',
      fontSize: 20,
      fontWeight: "bold",
    },
    text4: {
      color: '#2D2D2D',
      fontSize: 20,
      fontWeight: "bold",
      textTransform: 'capitalize',
    },
    text5: {
      color: '#2D2D2D',
      fontSize: 17,
      marginRight: '3%',
      textTransform: 'capitalize',
    },
  });



  const historyList = history.historyArray.map((item, index) => (
    <TouchableOpacity
      key = {item.id}
      style = {styles.button}>
      <Text style = {styles.row1}>
        <Text style = {styles.text1}>{item.date}</Text><Text>{"           "}</Text>
        <Text style = {styles.text2}>{item.time}</Text><Text>{"             "}</Text>
        <Text style = {styles.text3}>{item.answers}</Text>
      </Text>
      <Text style = {styles.row2}>
        <Text style = {styles.text4}>{item.category}</Text><Text>{"             "}</Text>
        <Text style = {styles.text5}>{item.difficulty}</Text>

      </Text>
    </TouchableOpacity>
  ));

  return (
    
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <Text style={styles.title}>History</Text>
        <View style={styles.list}>
          <ScrollView showsVerticalScrollIndicator={false}>{historyList}</ScrollView>
        </View>
        <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}


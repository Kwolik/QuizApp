import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, ScrollView, AsyncStorage } from 'react-native';

import bg from '../assets/bg.png';
import BottomMenu from '../components/BottomMenu';


history = {
  historyArray: [
  // przykładowy rekord dla testów
  // {
  //   id: 0,
  //   date: "12/12/2021",
  //   time: "15:00",
  //   answers: "10/10",
  //   category: "Film",
  //   difficulty: "Medium",
  // }
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
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderColor: '#DBDBDB',
      borderWidth: 1,
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
      width: 300,
      alignItems: 'center',
      flexDirection: 'row',
    },
    row2: {
      width: 300,
      alignItems: 'center',
      flexDirection: 'row',
    },
    date: {
      width: 100,
      color: '#2D2D2D',
      fontSize: 17,
      marginRight: 30,
      marginLeft: 5,
    },
    time: {
      color: '#2D2D2D',
      fontSize: 17,
      marginRight: 50,
    },
    result: {
      width: 60,
      color: '#2D2D2D',
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'right',
    },
    category: {
      width: 210,
      color: '#2D2D2D',
      fontSize: 20,
      marginLeft: 5,
      fontWeight: "bold",
    },
    difficulty: {
      width: 70,
      marginLeft: 3,
      textAlign: 'right',
      color: '#2D2D2D',
      fontSize: 17,
    },
  });

  loadHistory = async () => {
    try{
      if(history.historyArray.length == 0){
        if(JSON.parse(await AsyncStorage.getItem('history')) != 0){
          history.historyArray = JSON.parse(await AsyncStorage.getItem('history'));
          setHistory(history.historyArray);
        }
      }
    }catch(error){
      alert(error);
    }
  }

  const [hist, setHistory] = React.useState([]);

  React.useEffect(() => {
    loadHistory();
  }, []);

  // clearAsync = ()=> {
  //   history.historyArray = 0;
  //   AsyncStorage.setItem('history',JSON.stringify(history.historyArray));
  // }



  const historyList = history.historyArray.map((item) => (
    <TouchableOpacity
      key = {item.id}
      style = {styles.button}>
      <View style = {styles.row1}>
        <Text style = {styles.date}>{item.date}</Text>
        <Text style = {styles.time}>{item.time}</Text>
        <Text style = {styles.result}>{item.answers}</Text>
      </View>
      <View style = {styles.row2}>
        <Text style = {styles.category}>{item.category}</Text>
        <Text style = {styles.difficulty}>{item.difficulty}</Text>
      </View>
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

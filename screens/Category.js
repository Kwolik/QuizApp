import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import bg from '../assets/bg.png';

export default function Category({ navigation }) {
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
      color: '#2D2D2D',
      marginTop: 22,
    },
    button: {
      width: 320,
      height: 50,
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
    list: {
      margin: 10,
      marginTop: '18%',
      height: '52%',
    },
    name: {
      color: '#2D2D2D',
      fontSize: 18,
    },
  });

  const [category, setCategory] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://opentdb.com/api_category.php`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.trivia_categories) {
      setCategory(responseJson.trivia_categories);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const categoryList = category.map((categories) => (
    <TouchableOpacity
      key={categories.id}
      style={styles.button}
      onPress={() => {
        global.CATEGORY = categories.id;
        navigation.navigate('Difficulty');
      }}
    >
      <Text style={styles.name}>
        {categories.name.search('Entertainment') === 0
          ? categories.name.replace('Entertainment: ', '')
          : categories.name.replace('Science: ', '')}
      </Text>
    </TouchableOpacity>
  ));

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={28} color={'#2D2D2D'} />
        </TouchableOpacity>
        <Text style={styles.title}>Category</Text>
        <View style={styles.list}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                global.CATEGORY = "";
                navigation.navigate('Difficulty');
              }}
            >
              <Text style={styles.name}>Any</Text>
            </TouchableOpacity>
          {categoryList}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

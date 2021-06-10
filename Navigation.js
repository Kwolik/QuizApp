import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import HistoryScreen from './screens/History';
import CategoryScreen from './screens/Category';
import QuestionScreen from './screens/Question/Question';
import QuestionNumber from './screens/QuestionNumber';
import TypeScreen from './screens/Type';
import DifficultyScreen from './screens/Difficulty';

export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="QuestionNumber" component={QuestionNumber} />
        <Stack.Screen name="Type" component={TypeScreen} />
        <Stack.Screen name="Difficulty" component={DifficultyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

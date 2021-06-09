import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

import { getQuestions } from '../../services';
import bg from '../../assets/bg.png';
import QuestionDetails from './QuestionDetails';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  back: {
    flex: 1,
  },
  title: {
    fontSize: 42,
    color: '#2D2D2D',
    marginTop: 22,
  },
  question: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 120,
    width: '100%',
    padding: 16,
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
    height: '52%',
  },
  name: {
    color: '#2D2D2D',
    fontSize: 18,
  },
});

const Question = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const [questions, setQuestions] = React.useState([]);
  const [currentQuestionId, setCurrentQuestionId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getQuestions(categoryId)
      .then((res) => setQuestions(res.map((question, index) => ({ ...question, id: index }))))
      .then(() => setCurrentQuestionId(0))
      .then(() => setIsLoading(false));
  }, []);

  const answerQuestion = () => {
    if (questions.length - 1 <= currentQuestionId) {
      return;
    }

    setCurrentQuestionId((prevState) => prevState + 1);
  };

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        {isLoading ? (
          <Text style={styles.title}>loading</Text>
        ) : (
          <QuestionDetails question={questions[currentQuestionId]} answerQuestion={answerQuestion} />
        )}
      </View>
    </ImageBackground>
  );
};

export default Question;

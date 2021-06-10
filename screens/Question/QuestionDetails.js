import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import he from 'he';

const styles = StyleSheet.create({
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
    paddingTop: 56, // to be removed when timer added
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
    textAlign: 'center',
  },
});

const QuestionDetails = ({ question, answerQuestion }) => {
  const answers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5,
  );

  return (
    <>
      <Text style={styles.title}>{`Question ${question.id + 1}`}</Text>

      <View style={styles.question}>
        <Text style={styles.name}>{he.decode(question.question)}</Text>
      </View>

      <View style={styles.list}>
        {answers.map((answer) => (
          <TouchableOpacity key={answer} style={styles.button} onPress={answerQuestion}>
            <Text style={styles.name}>{he.decode(answer)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default QuestionDetails;

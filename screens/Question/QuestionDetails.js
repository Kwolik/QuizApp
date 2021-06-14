import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import he from 'he';

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    color: '#2D2D2D',
    marginTop: 22,
  },
  question: {
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  timer: {
    marginTop: 20,
  }
});

const QuestionDetails = ({ question, answerQuestion }) => {
  const answers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5,
  );

  const Timer = () => {
    return(
      <View style={styles.timer}>
    <CountdownCircleTimer
      isPlaying //true or false
      duration={20}
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2],
      ]}
      size={120}
    >
      {({ remainingTime, animatedColor }) => (
      <Animated.Text style={{ color: animatedColor, fontSize: 28}}>
        {remainingTime}
      </Animated.Text>
      )}
    </CountdownCircleTimer>
    </View>)
  }

  return (
    <>
      <Text style={styles.title}>{`Question ${question.id + 1}`}</Text>

      <Timer />

      <View style={styles.question}>
        <Text style={styles.name}>{he.decode(question.question)}</Text>
      </View>

      <View style={styles.list}>
        {answers.map((answer) => (
          <TouchableOpacity
            key={answer}
            style={styles.button}
            onPress={() => answerQuestion(answer === question.correct_answer)}
          >
            <Text style={styles.name}>{he.decode(answer)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default QuestionDetails;

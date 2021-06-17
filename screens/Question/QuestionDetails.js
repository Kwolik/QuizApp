import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, ActivityIndicator } from 'react-native';
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
  const [answers, setAnswers] = React.useState([])
  const [questionNumber, setQuestionNumber] = React.useState(0)
  const [bgColor,setBGColor] = React.useState(['#FAFAFA','#FAFAFA','#FAFAFA','#FAFAFA'])
  const [bColor, setBColor] = React.useState(['#DBDBDB','#DBDBDB','#DBDBDB','#DBDBDB'])
  const [stop, setStop] = React.useState(true)
  const [time, setTime] = React.useState(0)
  const [click, setClick] = React.useState(false)
  const [timer, setTimer] = React.useState()

  if(questionNumber === 0)
  {
    setAnswers([...question.incorrect_answers, question.correct_answer].sort(
      () => Math.random() - 0.5,
    ))
    setQuestionNumber(1)
  }

  React.useEffect(() => {
    setTimer(
        <View style={styles.timer}>
          <CountdownCircleTimer
            isPlaying={stop}
            duration={20}
            colors={[
              ['#004777', 0.4],
              ['#F7B801', 0.4],
              ['#A30000', 0.2],
            ]}
            size={120}
            onComplete={() => {
              setTime(1)
              setStop(false)
              setTimeout(() => {
                answerQuestion(false)
                setBGColor(['#FAFAFA','#FAFAFA','#FAFAFA','#FAFAFA'])
                setBColor(['#DBDBDB','#DBDBDB','#DBDBDB','#DBDBDB'])
                setQuestionNumber(0)
                setStop(true)
                setTime(0)
                setTimer()
              }, 1200);
            }}
          >
            {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor, fontSize: 28}}>
              {remainingTime}
            </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
    )
  }, [stop, timer === undefined])

  if(time === 0)
  {
    if(timer === undefined)
    {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={100} color="#999999" />
        </View>
      )
    }
    else
    {
      return (
        <>
          <Text style={styles.title}>{`Question ${question.id + 1}`}</Text>
    
          {timer && timer}
    
          <View style={styles.question}>
            <Text style={styles.name}>{he.decode(question.question)}</Text>
          </View>
    
          <View style={styles.list}>
            {answers.map((answer, index) => (
              <TouchableOpacity
                key={answer}
                style={{
                  width: 320,
                  height: 50,
                  backgroundColor: bgColor[index],
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  borderWidth: 1,
                  borderColor: bColor[index],
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                onPress={() => {
                  if(!click)
                  {
                    setClick(true)
                    setStop(false)
                    if(answer === question.correct_answer)
                    {
                      index === 0 && (setBGColor(['#00DD00','#FAFAFA','#FAFAFA','#FAFAFA']), setBColor(['#007A00','#FAFAFA','#FAFAFA','#FAFAFA']))
                      index === 1 && (setBGColor(['#FAFAFA','#00DD00','#FAFAFA','#FAFAFA']), setBColor(['#FAFAFA','#007A00','#FAFAFA','#FAFAFA']))
                      index === 2 && (setBGColor(['#FAFAFA','#FAFAFA','#00DD00','#FAFAFA']), setBColor(['#FAFAFA','#FAFAFA','#007A00','#FAFAFA']))
                      index === 3 && (setBGColor(['#FAFAFA','#FAFAFA','#FAFAFA','#00DD00']), setBColor(['#FAFAFA','#FAFAFA','#FAFAFA','#007A00']))
                    }
                    else
                    {
                      index === 0 && (setBGColor(['#FF5656','#FAFAFA','#FAFAFA','#FAFAFA']), setBColor(['#A50000','#FAFAFA','#FAFAFA','#FAFAFA']))
                      index === 1 && (setBGColor(['#FAFAFA','#FF5656','#FAFAFA','#FAFAFA']), setBColor(['#FAFAFA','#A50000','#FAFAFA','#FAFAFA']))
                      index === 2 && (setBGColor(['#FAFAFA','#FAFAFA','#FF5656','#FAFAFA']), setBColor(['#FAFAFA','#FAFAFA','#A50000','#FAFAFA']))
                      index === 3 && (setBGColor(['#FAFAFA','#FAFAFA','#FAFAFA','#FF5656']), setBColor(['#FAFAFA','#FAFAFA','#FAFAFA','#A50000']))
                    }
                    setTimeout(() => {
                      answerQuestion(answer === question.correct_answer)
                      setBGColor(['#FAFAFA','#FAFAFA','#FAFAFA','#FAFAFA'])
                      setBColor(['#DBDBDB','#DBDBDB','#DBDBDB','#DBDBDB'])
                      setQuestionNumber(0)
                      setStop(true)
                      setClick(false)
                      setTimer()
                    }, 1200);
                  }
                }}
              >
                <Text style={styles.name}>{he.decode(answer)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      );
    }
  }
  else
  { 
    return (
      <>
        <Text style={styles.title}>{`Question ${question.id + 1}`}</Text>
  
        {timer && timer}
  
        <View style={styles.question}>
          <Text style={styles.name}>{he.decode(question.question)}</Text>
        </View>
  
        <View style={styles.list}>
          {answers.map((answer) => (
            <TouchableOpacity
              key={answer}
              style={{
                width: 320,
                height: 50,
                backgroundColor: answer === question.correct_answer ? '#FF8AFF' : '#FAFAFA',
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                borderWidth: 1,
                borderColor: answer === question.correct_answer ? '#9C02C9' : '#DBDBDB',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text style={styles.name}>{he.decode(answer)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  }
};

export default QuestionDetails;

import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

import bg from "../assets/bg.png";
import Logo from "../assets/logo.png";

export default function Loading({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    back: {
      flex: 1,
    },
    text: {
      color: "black",
      fontSize: 18,
      maxWidth: "80%",
    },
    logo: {
      width: 290,
      height: 175,
      marginTop: 185,
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });

  const [message, setMessage] = React.useState("Download data in progress...");

  const getQuestionRequest = async () => {
    // =======================================
    //   TODO: REPLACE WITH GLOBAL VARIABLE
    const CATEGORY = 19;
    const AMOUNT = 10;
    const DIFFICULTY = "medium";
    const TYPE = "multiple";
    // =======================================
    const query = `amount=${AMOUNT}&category=${CATEGORY}&difficulty=${DIFFICULTY}&type=${TYPE}`;
    const url = `https://opentdb.com/api.php?` + query;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.response_code == 0) {
      // go to quiz view
      setMessage("OK!");
    } else if (responseJson.response_code == 1) {
      setMessage("Error! No Results!");
    } else if (responseJson.response_code == 2) {
      setMessage("Error! Invalid Parameter!");
    }
  };

  React.useEffect(() => {
    getQuestionRequest();
  }, []);

  return (
    <ImageBackground source={bg} style={styles.back} resizeMode="stretch">
      <View style={styles.container}>
        <View>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.horizontal}>
          <ActivityIndicator size={100} color="#999999" />
        </View>
        <View>
          <Text style={styles.text}>{message}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

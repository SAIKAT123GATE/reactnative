import { View, Text, SafeAreaView, ScrollView, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}

export default function App() {

  const [inputValue, setinputValue] = useState(0);
  const [outputValue, setoutputValue] = useState(0);

  const convert = (key) => {
    if (inputValue == 0) {
      console.log("Clicked alert")
      Alert.alert(
        "Invalid Input",
        "Please Enter A Valid Value",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    else {
      console.log("inputvalue=>", inputValue);
      console.log("key=>", key);
      var tempOutput = parseFloat(inputValue) * currencyPerRupee[key];
      console.log(tempOutput);
      setoutputValue(tempOutput.toFixed(2))

    }
  }
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior='automatic'>
        <View style={styles.resultContainer}>
          <Text style={styles.resultvalue}>{outputValue}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.resultvalue}
            // value={inputValue}
            keyboardType='numeric'
            onChangeText={(inputValue) => setinputValue(inputValue)}
            placeholder="Enter Value"
            placeholderTextColor="#c1c1c1"
          />
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((eachKey, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => convert(eachKey)}>
              <Text style={styles.buttontext}>{eachKey}</Text>
            </TouchableOpacity>
          ))}
        </View>


      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center"
  },
  inputContainer: {
    height: 70,
    marginTop: 30,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center"
  },
  resultvalue: {
    fontSize: 19,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center"

  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "33.3%",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    marginTop: 10,
    backgroundColor: "#0f4c75"
  },
  buttontext: {
    color: "#FFF",
    fontSize: 18
  }
})
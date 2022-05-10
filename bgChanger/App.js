import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [color, setcolor] = useState("rgb(32,0,126)")

  const changesBg = () => {
    let newcolor = "rgb(" +
      Math.floor(Math.random() * 256) +
      "," + Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) + ")";

    setcolor(newcolor);
  }
  return (
    <>
      {/* <StatusBar backgroundColor={color}/> */}
      <View style={[styles.container, { backgroundColor: color }]}>
        <TouchableOpacity onPress={() => changesBg()}>
          <Text style={styles.text}>Click Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setcolor("#000000")}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase",
    marginBottom:10

  }
})
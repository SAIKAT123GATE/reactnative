import { View, Text, TouchableOpacity, StyleSheet, Image,Pressable } from 'react-native'
import React, { useState } from 'react'
import Dice1 from "./assets/dice1.png";
import Dice2 from "./assets/dice2.png";
import Dice3 from "./assets/dice3.png";
import Dice4 from "./assets/dice4.png";
import Dice5 from "./assets/dice5.png";
import Dice6 from "./assets/dice6.png";

export default function App() {

  const [dice, setdice] = useState(Dice1)

  const changeDice = () => {
    let number = Math.floor(Math.random() * 6) + 1;

    switch (number) {
      case 1:
        setdice(Dice1)
        break;

      case 2:
        setdice(Dice2)
        break;
      case 3:
        setdice(Dice3)
        break;
      case 4:
        setdice(Dice4)
        break;
      case 5:
        setdice(Dice5)
        break;
      case 6:
        setdice(Dice6)
        break;

      default:
        setdice(Dice5)
        break;
    }
  }
  return (
    <View style={[styles.conatainer]}>

      <Image source={dice} style={styles.image} />
      <Pressable onPress={() =>changeDice()}>
        <Text style={[styles.button]}>App</Text>
      </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: "#222831",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200,

  },
  button: {
    fontSize: 20,
    marginTop: 20,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderRadius: 10,
    borderWidth: 5

  }
})
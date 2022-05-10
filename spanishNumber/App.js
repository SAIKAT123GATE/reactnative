import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Sound from 'react-native-sound'

var soundArray = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav')
]
export default function App() {
  Sound.setCategory('Playback');
  const playSound = (sound) => {
    console.log(sound)
    var whoosh = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

    });
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }
  return (
    <ScrollView style={styles.conatiner}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />
      <View style={styles.gridBox}>

        {soundArray.map((eachSound, index) => {
          return (<TouchableOpacity key={index} style={styles.box} onPress={() => playSound(eachSound)}>
            <Text style={styles.text}>{eachSound}</Text>
          </TouchableOpacity>
          )
        })}

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,

    backgroundColor: "#1b262c",


  },
  logo: {
    alignSelf: "center"
  },
  text: {
    fontSize: 50,
    color: "#ff4301",

  },
  box: {
    height: 90,
    width: "46%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f4c75",
    marginVertical: 7,

  },
  gridBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
    alignSelf: "flex-end",
    marginTop: 15
  }
})
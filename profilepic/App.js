import { View, Text, TouchableOpacity, Button, StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 30, color: "red" }}>Loading...</Text>
  </View>
)
const App = () => {

  const [image, setimage] = useState(null)

  const takePicture = async (camera) => {
    try {
      const options = { quality: 0.9, base64: false }
      const data = await camera.takePictureAsync(options)
      setimage(data.uri)
    }
    catch (err) {
      console.warn(err);
    }
  }
  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.preview}>
          <Text style={styles.camtext}>Here is your new pic</Text>
          <Image source={{uri:image,width:'100%',height:'100%'}} style={styles.clicked}/>
          <Button title="Take Photo" onPress={()=>setimage(null)}></Button>
        </View>
      ) : (

        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >

          {({camera,status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14, }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>

      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a79df"
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,

  },
  camtext:{
    backgroundColor:"#3498db",
    color:"#ffffff",
    marginBottom:10,
    width:"100%",
    textAlign:"center",
    paddingVertical:20,
    fontSize:25
  },
  clicked:{
    width:300,
    height:300,
    borderRadius:150,
    marginBottom:30
  }
})
export default App
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import Background from '../assets/images/Background.svg'

export default function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signin')
    }, 2000);
  }, [])

  return (
    <View style={styles.mainView}>
      <View
        style={styles.back}
      >
        <Background />
      </View>
      {/* <Background/> */}
      <Image style={styles.icon} source={require("../assets/images/ICON.png")} />
    </View>
  )
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    height: "7%",
    width: "11%"
  },
  back:{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   }
})
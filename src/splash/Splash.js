import { View, Text,StyleSheet,Image } from 'react-native'
import Background from '../assets/images/Background.svg'
import React from 'react'

export default function Splash() {
  return (
    <View style={styles.mainView}>
        {/* <Background/> */}
      <Image style={styles.icon} source={require("../assets/images/ICON.png")}/>
    </View>
  )
}
const styles=StyleSheet.create({
      mainView:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
      },
      icon:{
        height:"7%",
        width:"11%"
      }
    })
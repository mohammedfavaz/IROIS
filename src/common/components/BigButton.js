import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function BigButton({onPress}) {
  return (
    <TouchableOpacity style={styles.mainview} activeOpacity={0.75} onPress={onPress}>
      <Text style={styles.txt}>Sign In</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    mainview:{
        height:50,
        width:"85%",
        backgroundColor:"#5DA7A3",
        borderRadius:28,
        marginVertical:10,
        alignItems:"center",
        justifyContent:"center"
    },
    txt:{
        color:"#FFFFFF",
        fontWeight:"500",
        fontSize:14
    }
    
})
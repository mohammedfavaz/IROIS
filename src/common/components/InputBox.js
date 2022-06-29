import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function InputBox({name,values,onChange}) {
    return (
        <View style={styles.mainview}>
          <TextInput placeholder={name} value={values} onChangeText={onChange} placeholderTextColor={"#B6B7B7"} style={styles.Textinp}></TextInput>
        </View>
      )
}

const styles=StyleSheet.create({
    mainview:{
        height:50,
        width:"87%",
        backgroundColor:"#F2F2F2",
        borderRadius:28,
        marginVertical:10
    },
    Textinp:{
        flex:1,
        paddingHorizontal:30,
        fontSize:13,
        color:"#B6B7B7"
    }
})
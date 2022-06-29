import { View, Text,Image,ImageBackground } from 'react-native'
import React from 'react'

export default function Faltview({data}) {
    console.log("Dat1a",data);
  return (
    <View>
     <ImageBackground style={{height:130,width:"89%",backgroundColor:"red",justifyContent:"flex-end",elevation:3,borderRadius:10,overflow:"hidden",alignSelf:"center",marginVertical:20}} imageStyle={{height:"100%",width:"100%"}}  source={{ uri: `${data.image}` }}>
                <View style={{height:37,backgroundColor:"#929292",opacity:0.7,justifyContent:"center",paddingLeft:20}}>
                    <Text style={{color:"#FFFFFF"}}>shfsdfn asjnds </Text>
                </View>
                
            </ImageBackground>
            <View style={{height:40,width:40,backgroundColor:"#fff",borderRadius:20,position:"absolute",right:40,bottom:3,elevation:3,justifyContent:"center",alignItems:"center"}}>
                <Image source={require("../../assets/images/arrow.png")}></Image>
            </View>
    </View>
  )
}
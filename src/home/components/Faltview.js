import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function Faltview({ data }) {
  console.log("Dat1a", data);
  return (
    <View>
      <ImageBackground style={styles.main} imageStyle={{ height: "100%", width: "100%" }} source={{ uri: `${data.image}` }}>
        <View style={styles.sub}>
          <Text style={styles.txt} >{data.name} </Text>
        </View>

      </ImageBackground>
      <View style={styles.sub2}>
        <Image source={require("../../assets/images/arrow.png")}></Image>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    height: 130,
    width: "89%",
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    elevation: 5,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    marginVertical: 20
  },
  sub: { height: 37, backgroundColor: "#929292", opacity: 0.7, justifyContent: "center", paddingLeft: 20 },
  txt: { color: "#FFFFFF", alignSelf: "flex-start" },
  sub2: { height: 40, width: 40, backgroundColor: "#fff", borderRadius: 20, position: "absolute", right: 40, bottom: 3, elevation: 5, justifyContent: "center", alignItems: "center" }
})

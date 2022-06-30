import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.main}>
            <View style={{ flex: 0.61 }}>
                <Text style={styles.txt}>IROID</Text>
            </View>
            <View style={{ flex: 0.39 }}>
                <Image source={require("../../assets/images/↳Color.png")} style={{ alignSelf: "flex-end", marginRight: 19.5 }} ></Image>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{ height: 74, backgroundColor: "#5DA7A3", alignItems: "center", justifyContent: "center", flexDirection: "row" },
    txt:{ fontSize: 34, color: "#FFFFFF", alignSelf: "flex-end" }
})
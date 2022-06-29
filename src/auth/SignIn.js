import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputBox from '../common/components/InputBox'
import BigButton from '../common/components/BigButton'


export default function SignIn() {

    const [inpData, setinpData] = useState({
        username: "",
        password: ""
    })

    const check = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('email', inpData.username);
        data.append('password', inpData.password);
        data.append('lang_id', 'en');
        data.append('device_token', 'sss');

        var config = {
            method: 'post',
            url: 'http://proteinium.iroidtechnologies.in/api/v1/login',
            headers: {
                'lang': 'en',
                ...data.getHeaders()
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <View style={styles.mainView} >
            <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
            <View style={{ alignItems: "flex-end", paddingHorizontal: 19, paddingTop: 20 }} >
                <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 14 }}>Skip</Text>
            </View>
            <View style={styles.subView}>
                <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 30, marginBottom: 15 }}>Sign In</Text>
                <Text style={{ color: "#7C7D7E", fontWeight: "normal", fontSize: 14, marginBottom: 15 }}>Enter Your Details</Text>
                <InputBox name="User Name" values={inpData.username} onChange={val => { setinpData(pre => ({ ...pre, username: val })) }} />
                <InputBox name="Password" values={inpData.password} onChange={val => { setinpData(pre => ({ ...pre, password: val })) }} />
                <BigButton onPress={check} />
                <Text style={{ color: "#444444", fontWeight: "500", fontSize: 14, marginBottom: 15, marginTop: 10 }}>Forgot your password?</Text>
                <Text style={{ color: "#444444", fontWeight: "500", fontSize: 14 }}>Don't have an Account?<Text style={{ color: "#5DA7A3", fontWeight: "bold", fontSize: 14 }}> Sign Up</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#fff",
    },
    subView: {
        flex: 0.75,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
})
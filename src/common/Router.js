import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../splash/Splash';
import Home from '../home/Home'

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;

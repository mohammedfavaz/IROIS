import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/images/add.svg'

import Splash from '../splash/Splash';
import SignIn from '../auth/SignIn'
import Home from '../home/Home'
import TabComp from './components/TabComp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator  screenOptions={{headerShown: false,tabBarActiveBackgroundColor:"##F6F6F6",tabBarInactiveBackgroundColor:"#F6F6F6",
        tabBarShowLabel: false,}}>
        <Tab.Screen
        name="home"
        component={Home}
        options={{ tabBarIcon: ({ color,focused }) => <TabComp name={"Home"} focused={focused}/> }}
      />
      <Tab.Screen
        name="meals"
        component={Home}
        options={{ tabBarIcon: ({ color,focused }) => <TabComp name={"Meals"} focused={focused}/> }}
      />
      <Tab.Screen
        name="profile"
        component={Home}
        options={{ tabBarIcon: ({ color,focused }) => <TabComp name={"Profile"} focused={focused}/> }}
      />
      <Tab.Screen
        name="more"
        component={Home}
        options={{ tabBarIcon: ({ color,focused }) => <TabComp name={"More"} focused={focused}/> }}
      />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    );
  }

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="splash">
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="signin" component={SignIn} />
                <Stack.Screen name="home"  component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;

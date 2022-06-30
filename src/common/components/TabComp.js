import React from 'react';
import { View, Text,StyleSheet } from 'react-native'
// import {DevHeight ,DevWidth} from '@theme/Device'
// import {useTheme} from '@theme/ThemeContext';

import Homeactive from '../../assets/images/Icon feather-home.svg'
import Meals from '../../assets/images/Icon feather-calendar.svg'
import Profile from '../../assets/images/Icon feather-user.svg'
import More from '../../assets/images/more_horiz-24px.svg'


export default function TabComp({name,focused}) {
    // const {colors, isDark} = useTheme();
  
    return (
     <View>
          <View style={styles.main}>

        {
          (name === "Home" ) &&
             <Homeactive stroke={focused?"#5DA7A3":"#949494"} /> 
        } 
        {
          (name === "Meals"  ) && 
             <Meals stroke={focused?"#5DA7A3":"#949494"} /> 
        }
        {
          (name === "Profile"  ) && 
            <Profile stroke={focused?"#5DA7A3":"#949494"} /> 
         }
        {
          (name == "More"  ) && 
              <More fill={focused?"#5DA7A3":"#949494"} /> 
        }
    

        <Text
            style={{
            fontSize: 10,
            textAlign: 'center',
            color : focused ? "#5DA7A3":"#949494",
            marginTop:name=="More"?-5:2
            }}>
            {name}
        </Text>
         
         
      </View>
     </View>
    )
}

const styles=StyleSheet.create({
  main:{
    height:55,
    alignItems:"center",
    justifyContent:"center"
  }
})


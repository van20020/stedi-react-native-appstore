import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logoImg  from "../image/icon-img.png";
import { useNavigation } from '@react-navigation/native';

const Splash = ({isFirstLaunch, loggedInStates, loggedInState}) =>{
    
    const navigation = useNavigation();
//  const timeout = isFirstLaunch ? 3000 : 0
    setTimeout(()=>{
        if(isFirstLaunch == true && loggedInState!=loggedInStates.LOGGED_IN){
        navigation.replace('Onboarding')
        }else if (loggedInState==loggedInStates.LOGGED_IN){
            navigation.replace('Login')
        }else if(loggedInState==loggedInStates.NOT_LOGGED_IN){
            navigation.replace('Login')
        }
    },3000)
    
    
return(
    <View style={{flex:1, flexDirection:'column',justifyContent:'center',
    alignItems:'center', backgroundColor:'white'
    }}>
        <Image source={logoImg} style={{width:300, height: 300}} ></Image>
    </View>
)
}

export default Splash

const Styles = StyleSheet.create({

})
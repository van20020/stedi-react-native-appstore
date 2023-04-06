import React,{useEffect,useRef}from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logoImg  from "../image/icon-img.png";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({isFirstLaunch, loggedInStates, loggedInState, setLoggedInState}) =>{
    
    const navigation = useNavigation();
    const firstTimeOnboarded = useRef();
//  const timeout = isFirstLaunch ? 3000 : 0
console.log('splash loging:', loggedInState)
    setTimeout(async()=>{
        const getOnBoarded = await AsyncStorage.getItem('onBoarded');
        console.log("onBoarded:", getOnBoarded);

        const getSessionToken = async()=>{
            const sessionToken =  await AsyncStorage.getItem('sessionToken');
            console.log('sessionToken',sessionToken);
            const validateResponse = await fetch('https://dev.stedi.me/validate/'+sessionToken,
            {
              method:'GET',
              headers:{
                'content-type':'application/text'
              }
            }    
            );    
        
            if(validateResponse.status==200){//we know it is a good non-expired token
              const userName = await validateResponse.text();
              await AsyncStorage.setItem('userName',userName);//save user name for later
              setLoggedInState(loggedInStates.LOGGED_IN);
            }
           }
           getSessionToken();

        if(getOnBoarded != 'true' && loggedInState!=loggedInStates.LOGGED_IN){
        navigation.replace('Onboarding')
        }else if (loggedInState==loggedInStates.LOGGED_IN){
            navigation.replace('Navigation')
        }else if(loggedInState==loggedInStates.NOT_LOGGED_IN){
            console.log('going to login screen:',loggedInState)
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
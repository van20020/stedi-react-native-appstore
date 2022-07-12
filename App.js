import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import  Navigation from './components/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import Progress from './screens/Progress';
import { NavigationContainer } from '@react-navigation/native';




const AppStack = createNativeStackNavigator();

const App = () =>{
  const [isFirstLaunch, setFirstLaunch] = React.useState(true);
  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value=>{
  //     if (value == null){
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setFirstLaunch(true);
  //     }else{
  // setFirstLaunch(false);
  //     }
  //    })
      
  // }, []);

   if (isFirstLaunch == true){
return(
  <OnboardingScreen setFirstLaunch={setFirstLaunch}/>
 
);
  }else{
    return <Navigation/>
  }
}
 export default App;


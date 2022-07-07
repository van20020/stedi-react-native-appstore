import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



const OnboardingScreen = ({setFirstLaunch}) =>{
    return(
        <Onboarding
       
        onSkip={()=> setFirstLaunch(false)}
        onDone={()=> setFirstLaunch(false)}
        pages={[
            {
              backgroundColor: '#fff',
              witdh:50,
              height:50,
              image: <Image source={require('../image/onboardingImg1.jpg')} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
              
                image: <Image width={50} height={10}source={require('../image/happy.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
              },
              {
                backgroundColor: '#fff',
                witdh:50,
                height:50,
                image: <Image source={require('../image/refer.jpg')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
              }

        ]}
        />
    );
};
export default OnboardingScreen;
const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent: 'center'
    }
})


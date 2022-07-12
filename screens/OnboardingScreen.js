import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { TouchableOpacity } from 'react-native-web';
import { SafeAreaView } from 'react-navigation';

const {width, height} = Dimensions.get('window');

// const Done = ({...props}) => 
// (
//   <TouchableOpacity style={{marginHorizonal:8}}>
//     <Text style={{fontSize:16}}>Done</Text>
//   </TouchableOpacity>
// );


const OnboardingScreen = ({setFirstLaunch}) =>{
    return(
      // <SafeAreaView style={{ backgroundColor:'blue'}}>
        <Onboarding 
      //  DoneButtonComponent={Done}
        onSkip={()=> setFirstLaunch(false)}
        onDone={()=> setFirstLaunch(false)}
        pages={[
            {
              backgroundColor: '#fff',
              image: <Image   style={{height: '60%', width, resizeMode:'contain'}} source={require('../image/onboardingImg1.jpg')} />,
              title: <Text style={{fontWeight:'bold', textAlign:'center', color:'#A0CE4E', fontSize:17, margin:12}}>STEDI  Balance will now send a text and automatically verify your phone number.</Text>,
              subtitle: 'The number we have detected on your device is:'
            },
            {
                backgroundColor: '#fff',
                image: <Image style={{height: '60%', width, resizeMode:'contain'}} width={50} height={10}source={require('../image/happy.png')} />,
                title: <Text style={{fontWeight:'bold', fontSize: 17, margin:15, textAlign:'center', color:'#A0CE4E'}}>Congratulations!</Text>,
                subtitle: 'You have created a profile with STEDI Balance ',
              },
              {
                backgroundColor: '#fff',
                image: <Image style={{height: '60%', width,  resizeMode:'contain'}} source={require('../image/refer.jpg')} />,
                title: <Text style={{fontWeight:'bold', textAlign:'center', fontSize: 17, margin:15, color:'#A0CE4E'}}>Please enter the cell numbers of up to 5 other friends, family members or health professionals</Text>
                
              }

        ]}
        />
        // </SafeAreaView>
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


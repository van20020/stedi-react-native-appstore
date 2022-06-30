import React from 'react';
import { SafeAreaView, Text, StyleSheet, Linking } from 'react-native';


const Links = (props) => {
    const url="https://www.stedibalance.com/";
    const youtubeUrl ="https://www.youtube.com/channel/UCDWI0nAwzZB8HB4569K0otg";
  return (
    <SafeAreaView>
    <Text  style={styles.text} onPress={() => Linking.openURL(url)}>Learn about Stedi Balance</Text>
     <Text style={styles.text} onPress={() => Linking.openURL(youtubeUrl)}>Tutorials</Text>
 </SafeAreaView>
  )
}

export default Links
const styles = StyleSheet.create({
    text:{
     marginLeft:15,
     marginTop:12,
     marginRight:15,
     fontSize: 18,
      height: 44,
      color: '#0000EE'
    }
  });
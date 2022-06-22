import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import Bar from './Bar.js';

const Links = () => {
    const url="https://www.stedibalance.com/";
    const youtubeUrl ="https://www.youtube.com/channel/UCDWI0nAwzZB8HB4569K0otg";
  return (
 <View>
    <Bar/>
    <Text  style={styles.text} onPress={() => Linking.openURL(url)}>Learn about Stedi Balance
     </Text>
     <Text style={styles.text} onPress={() => Linking.openURL(youtubeUrl)}>Tutorials</Text>
 </View>
  )
}

export default Links
const styles = StyleSheet.create({
    text:{
     marginLeft:15,
     marginRight:15,
     fontSize: 18,
      height: 44,
    }
  });
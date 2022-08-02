import React, {useState}from 'react';
import { StyleSheet, Text, SafeAreaView,  View, } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import quotes from '../data/quote.json';
import { Card, CardTitle, CardContent} from 'react-native-material-cards';
// import { LineChart} from 'react-native-chart-kit';




const Home = (props) => {

// color
let backgroundColors = ['#0c5d8f', '#e7a740', '#e63653', '#6554a3', '#6bcad0', '#e17f93', '#fee227'];
let colors = ['#b4cfec', '#f7dcb0', '#fa96a6', '#b0a0eb', '#adecf0','#ffe6ee','#fcf4a3'];

var day =new Date();

const backgroundColorsToday = backgroundColors[day.getDay()];
const colorsToday = colors[day.getDay()];

  //date
  const date = new Date();   
  const time = date.getTime(); // the timestamp, not neccessarely using UTC as current time
  const julian_day = Math.floor((time / 86400000) - (date.getTimezoneOffset()/1440) + 2440587.5);
  const dayQuoteIndex = julian_day - 2459778;
  const quote = quotes[dayQuoteIndex].text;
  const author = quotes[dayQuoteIndex].author;

  //line bar
  // const line = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       data: [20, 45, 28, 80, 99, 43],
  //       strokeWidth: 2, // optional
  //     },
  //   ],
  // };

  return (
    <SafeAreaView style={{alignItems:'center'}}>
      <View style={{width:'90%', backgroundColor:backgroundColorsToday, borderRadius:20, padding:20, marginTop:20 }}>
      <FontAwesome5 name="quote-left" style={{fontSize:30, marginBottom:1, color:colorsToday}}/>
      <Text style={{fontSize:16, lineHeight:26, color:'white' ,textAlign:'center',fontWeight:'400', marginBottom:10, letterSpacing:1.1, paddingHorizontal:27}}>{quote}</Text>
      <Text style={{textAlign:'right', fontStyle:'italic', fontSize:13, fontWeight:'300', color:colorsToday}}>― {author}</Text>
      </View> 
      <View style={{ flexDirection:'row', flexWrap: 'wrap', paddingLeft:15, paddingRight:15 }}> 
      <Card style={{width:'50%',borderRadius:20, marginTop:15, shadowColor: "#000",shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4}}>
        <CardTitle 
        title='Today'
       />
        <CardContent  >
          <Text>hOLA</Text>
        </CardContent>
      </Card>
      <Card style={{ width:'50%', height:'250%', borderRadius:20, marginTop:15,shadowColor: "#000",shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4}}>
        <CardTitle 
        title='Weekly'
       />
        <CardContent  >
          <Text>Hola</Text>
        </CardContent>
      </Card>
      </View>
      <View style={{ flexDirection:'row', paddingLeft:15, paddingRight:15 }}>
      <Card style={{ width:'-10%',height:'85%', borderRadius:20, marginTop:145,shadowColor: "#000",shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4}}>
        <CardTitle 
        title='Monthly'
       />
        <CardContent> 
        {/* <LineChart
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />  */}
        </CardContent>
      </Card>
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container:{


  }
});



import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView , Share, ScrollView, Button} from 'react-native';
import BarChart from 'react-native-bar-chart';
// import Share from 'react-native-share';



const data = [
  [70, 0],
  [80,0],
  [110, 0],
  [100, 0],
  [280, 0],
  [80,0 ],
  [110, 0]

];
// labels
const horizontalData = ['S', 'M', 'T', 'W', 'T', 'F','S'];

const Profile = (props) => {
  const myCustomerShare = async() =>{
    const shareOptions = {
      message: 'This is a test'
    }
    try{
      const shareResponse = await Share.share(shareOptions)
      console.log(shareResponse);
      }
      catch(error){
  console.log('Error', error)
      }
    }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}
      contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
      showsVerticalScrollIndicator={false}
      >
     <Image style={{height: 100, width:100, borderRadius: 75}}
      source={require('../image/me.jpg')} />
    <Text style={{marginTop:10,marginBottom:10,fontWeight: 'bold'}}>Sarah Romero</Text>

    <Text style={{marginTop:20,marginBottom:2}}>This Week's progress</Text>
<BarChart barColor='green' data={data} horizontalData={horizontalData} />
     <View style={{ marginTop: 50 }}>
      <Button onPress={myCustomerShare} title="Share" />
    </View>
    </ScrollView>
 </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  }
})

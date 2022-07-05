import React, { useState} from 'react';
import { View,Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import DropDownPicker from 'react-native-dropdown-picker';


const Help = (props) =>{
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  this.state ={
    Subject: ' '
  }

return(
<View>
<Text style={styles.text}>Contact us</Text>
<TextInput 
 style={styles.input}
 placeholder="Name"
 onChangeText={(val)=> setName(val)}
 />

<TextInput
        style={styles.input}
        // onChangeText={newEmail=> setName(newEmail)}
        placeholder="Email"
      />
  <DropDownPicker style={styles.dropdown}
          items={[
              {label: 'The STEDI app is not working', value: 'The STEDI '},
              {label: 'I have an idea for improving STEDI', value: 'I have'},
              {label: 'I need help using the app', value: 'I need'},
          ]}
          defaultIndex={0}
          containerStyle={{height: 40}}
          onChangeItem={item => console.log(item.label, item.value)}
      />
 <TextInput
        style={styles.input2}
        multiline
        numberOfLines={8}
        onChangeText={(val)=> setMessage(val)}
        placeholder="Message"
      />
{/* <TouchableOpacity
title='Submit'
onPress={()}
style={styles.button} >
</TouchableOpacity> */}
  </View>
)}
export default Help;
 const styles = StyleSheet.create({
  text:{
  marginLeft:15,
   marginRight:15,
   marginTop:15,
   fontSize: 18,
  //  fontWeight: 'bold',
    height: 44,
  },
  input: {
    // height: 40,
    margin: 12,
    borderWidth: 1,
    padding:5,
    borderRadius: 5,
  },
  input2:{
    margin: 12,
    borderWidth: 1,
    padding:5,
    borderRadius: 5,
    marginTop:25
  },
  button: {
  // marginTop: 15,
  // marginBottom: 20,
  // width: 200,
  // height: 35,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 5,
  // backgroundColor: 'orange',
  // marginLeft:50
  },
  dropdown:{
  width: 336,
  height:40,
  marginLeft:12,
  marginBottom:10

  }
})
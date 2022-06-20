import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import AppName from "./AppName";
import { Avatar } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";


const  openMenu = ()=>{

}

function Bar() {
    return(
        <View style={styles.bar}>
          <AppName />
          <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
        </View>
    )
  }

export default Bar

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#A0CE4E',
        height: '45%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom:50
        
      }
})
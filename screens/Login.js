import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

export default function Login(){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>{
                // props.setUserLoggedIn(true)
                Alert.alert("Hello Ricky")
            }
                }></Button>

            <Button title="Jose Log In" onPress={()=>{
                // props.setUserLoggedIn(true)
                Alert.alert("Hello Jose")
            }
                }></Button>
            <Button title="Caroline Log In" onPress={()=>{
                Alert.alert("Hello Caroline")
            }
                }></Button>
                 
            <Button title="Christopher Login" onPress={()=>{
                Alert.alert("Hello Christopher Vang")
            }
                }></Button>
        </View>

        

    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})
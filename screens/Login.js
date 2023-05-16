import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

export default function Login(){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Ricky Log In" onPress={()=>{
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
            <Button title="Tyler Login" onPress={()=>{
                Alert.alert("Hello Tyler Allred")
            }
                }></Button>
                            <Button title="Brother Hamilton Login" onPress={()=>{
                Alert.alert("Hello Brother Hamilton")
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
        backgroundColor: 'orange',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})
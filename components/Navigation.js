import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {FontAwesome5} from '@expo/vector-icons';
import{ Ionicons} from '@expo/vector-icons';

import Help from '../screens/Help';
import Counter from '../screens/Counter';
import Links from '../screens/Links';
import Progress from '../screens/Progress';
import Profile from '../screens/Profile';


//Stack Navigator 


const Stack = createNativeStackNavigator();

const ProgressStackScreen = () =>{

    return(
     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white'}}
     >
        <Stack.Screen name="Progress" component={Progress} options={{
             headerTitleAlign: "center"}}>
        </Stack.Screen>
     </Stack.Navigator>
    );
}


const counterStackScreen = () =>{
    return(
     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white'}}
     >
        <Stack.Screen name="Counter" component={Counter} options={{
             headerTitleAlign: "center"}}>
        </Stack.Screen>
     </Stack.Navigator>
    );
}

const ProfileStackScreen = () =>{
    return(
     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white'}}>

        <Stack.Screen name="Profile" component={Profile} options={{
             headerTitleAlign: "center"}} >
        </Stack.Screen>
     </Stack.Navigator>
    );
}


const linksStackScreen = () =>{
    return(
     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white'}}
     >
        <Stack.Screen name="About" component={Links} options={{
             headerTitleAlign: "center"}}>
        </Stack.Screen>
     </Stack.Navigator>
    );
}


const helpStackScreen = () =>{
    return(
     <Stack.Navigator
     
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white',  }}
     >
        <Stack.Screen name="Help" component={Help} options={{
             headerTitleAlign: "center"}}
             >
        </Stack.Screen>
     </Stack.Navigator>
    );
}



//Tab Navigator

const Tab = createMaterialBottomTabNavigator();

export default function Navigation (props) {
    return(
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Progress'
        activeColor='#A0CE4E'
        screenOptions={{
            showLabel: 'false',
            activeTintColor: 'Black',

        }}
        // shifting='true'
         barStyle={{ backgroundColor: 'white',
        //  height:63,
         }}>
             
            <Tab.Screen  name="TabHome" 
            component={ProgressStackScreen} 
            options={{
               // tabBarColor:'pink',
                  tabBarLabel: 'Progress',
                tabBarIcon: ({ color }) => (
                 <Ionicons name='ios-bar-chart' color={color} size={28} style={{ width: 30,  height: 30, marginTop: -3 }} />
                 ),
                 }}
            />
            <Tab.Screen name="TabCounter" 
            component={counterStackScreen}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'Counter',
                 tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name='gauge' color={color} size={30} style={{ width: 30,  height: 30, marginTop: -3 }} />
                  ),
                  }}
            />
            <Tab.Screen name="TabProfile" 
            component={ProfileStackScreen}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'Profile',
                 tabBarIcon: ({ color }) => (
                  <FontAwesome5 name='user-alt' color={color} size={28}  style={{ width: 30,  height: 30, marginTop: -3 }}/>
                  ),
                  }}
            />
            <Tab.Screen name="TabLinks" 
            component={linksStackScreen}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'About',
                 tabBarIcon: ({ color }) => (
                  <Ionicons name='md-information-circle-sharp' color={color} size={30} style={{ width: 30,  height: 30, marginTop: -3}}/>
                  ),
                  }}
            />
            <Tab.Screen name="TabHelp" 
            component={helpStackScreen}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'Help',
                 tabBarIcon: ({ color }) => (
                  <Ionicons name='help-circle' color={color} size={32} style={{ width: 30, height: 30, marginTop: -5 }} />
                  ),
                  }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
 
});

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Counter from './Counter.js';
import Links from './Links.js';
import Help from './Help.js';
import Progress from './Progress.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Progress'
        activeColor='white'
        shifting='true'
        barStyle={{ backgroundColor: '#A0CE4E' }}
      >
          <Tab.Screen
          name='Progress'
          component={Progress}
          options={{
            // tabBarColor:'pink',
            tabBarLabel: 'Progress',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='graph' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Step Counter'
          component={Counter}
          options={{
            tabBarLabel: 'Counter',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='gauge' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Help'
          component={Help}
          options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='help-circle' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
        name='Link'
        component={Links}
        options={{
          tabBarLabel:'Link',
          tabBarIcon:({color}) => (
            <MaterialCommunityIcons name='link-variant' color={color} size={26} />
          )
        }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );


}


const styles = StyleSheet.create({
  
});

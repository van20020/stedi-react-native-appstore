import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Counter from './Counter.js';
import Help from './Help';
import Insights from './Insights.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='white'
        barStyle={{ backgroundColor: '#A0CE4E' }}
      >
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
          name='Insights'
          component={Insights}
          options={{
            tabBarLabel: 'Insights',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='graph' color={color} size={26} />
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
      </Tab.Navigator>
    </NavigationContainer>
  );


}


const styles = StyleSheet.create({
  
});

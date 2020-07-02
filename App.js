import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styled from "styled-components";
import Entypo from "react-native-vector-icons/Entypo"

import HomeScreen from './components/screens/HomeScreen'
import LiveScreen from "./components/screens/LiveScreen"
import Proflie from "./components/screens/ProfileScreen"
import GameScreen from "./components/screens/GameScreen"


const AppStack = createStackNavigator();

const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    paddingBottom: 12
  }
}

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => (
        {
          tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {

              case "HomeScreen":
                iconName = "home"
                break;

              case "LiveScreen":
                iconName = "game-controller"
                break;

              case "ProfileScreen":
                iconName = "user"
                break;

              default:
                break;
            }

            return (
              <TabBarIconContainer foucused={focused}>
                <Entypo name={iconName} size={24} color="#ffffff" />
              </TabBarIconContainer>
            )
          }
        }
      )}>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={Proflie} />
    </TabNav.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabBarIconContainer = styled.View`
background-color: ${props => props.foucused ? "#819ee5" : "#343434"};
padding: 2px 16px;
border-radius: 32px;
`;

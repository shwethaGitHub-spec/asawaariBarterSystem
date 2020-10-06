import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppTabNavigator} from './components/AppTabNavigator';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignUpLoginScreen from './screens/SignUpLoginScreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const SwitchNavigator = createSwitchNavigator({
  SignUpLoginScreen : {screen : SignUpLoginScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer = createAppContainer(SwitchNavigator);

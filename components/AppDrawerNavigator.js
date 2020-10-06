import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingsScreen';
import MyBartersScreen from '../screens/MyBartersScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Setting : {
    screen : SettingScreen
  },
  MyBarters : {
    screen : MyBartersScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
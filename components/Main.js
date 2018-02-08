//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon, Thumbnail } from 'native-base';

//Tabs
import Home from '../screens/Home';
import Heroes from '../screens/Heroes';
import Villains from '../screens/Villains';
import Games from '../screens/Games';
import Profile from '../screens/Profile';
import BlogDetails from '../screens/BlogDetails'

// create a component
class Main extends Component {
  static navigationOptions = {
    headerLeft:<Icon name="md-menu" style={{color: '#D4AF37', marginLeft: 10}} />,
    headerRight:<Thumbnail small source={{uri: 'https://goo.gl/S7jvB2'}} style={{borderColor: 'white', marginRight: 10}} />,
    title: 'Black Superheroes',
    headerTitleStyle: {color: '#D4AF37', fontWeight: 'bold', fontSize: 22},
    headerStyle: { backgroundColor: 'black' },
  }

  render() {
    return (
       <AppTabNavigator />

    );
  }
}

const AppTabNavigator = TabNavigator({
  Home:{ screen: Home},
  Heroes:{ screen: Heroes},
  Villains:{ screen: Villains},
  BlogDetails: {screen: BlogDetails,
  }
  // Games:{ screen:Games },
  // Profile: { screen:Profile}
}, {
  initialRouteName: 'Home',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    labelStyle: {
      marginBottom: 3,
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    style: {backgroundColor: 'black'},
    activeTintColor: '#D4AF37',
    inactiveTintColor: 'grey',
    showLabel: true,
    showIcon: true
  }
});

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  linearGradient: {
    flex: 1,
    width: '100%'
  }
});

//make this component available to the app
export default Main;



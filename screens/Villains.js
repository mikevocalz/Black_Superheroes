//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Thumbnail, Card, Content, CardItem, cardBody, Button, Icon, Left, Right, Image, Body, Container} from 'native-base';
import { Foundation} from '@expo/vector-icons';

// create a component
class Villains extends Component {
  static navigationOptions = {
    tabBarIcon:({tintColor})=> (
      <Foundation name='skull' size={30} style={{color: tintColor}}/>
    )
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>Villains</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Villains;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Thumbnail, Card, Content, CardItem, cardBody, Button, Icon, Left, Right, Image, Body, Container} from 'native-base';


// create a component
class Games extends Component {
  static navigationOptions = {
    title: 'Game Characters',
    tabBarIcon:({tintColor})=> (
      <Icon name="md-game-controller-b"  size={30} style={{color: tintColor }}/>
    )
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>Games</Text>
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
export default Games;

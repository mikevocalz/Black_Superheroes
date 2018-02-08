//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Body, Image, Card, CardItem, Thumbnail, Left, Right, Button} from 'native-base';

// create a component
class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          {/* <Image source={{uri: this.props.item._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url }}
          style={{ height: 200, width: null, flex: 1}}/> */}
        </CardItem>
        <CardItem>

        </CardItem>
        <CardItem>
          <Left>

          </Left>
          <Right>

          </Right>
        </CardItem>
      </Card>
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
export default CardComponent;

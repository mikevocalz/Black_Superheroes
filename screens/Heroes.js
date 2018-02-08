//import liraries
import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, Image,StyleSheet, StatusBar, FlatList, Dimensions } from 'react-native';

import TimeAgo from 'react-native-timeago';
import HTMLView from 'react-native-htmlview';
import { GetImage, ContentSnippet, TitleSnippet } from '../helpers/helpers';
import { LinearGradient, Constants, Font } from 'expo';
import {  Icon, Card, Content, CardItem,  Button, Left, Right, Body} from 'native-base';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// create a component
class Heroes extends PureComponent {
  static navigationOptions = {
    tabBarIcon:({tintColor})=> (
      <Entypo name='mask' size={28} style={{color: tintColor}}/>
    )
   }

   constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }


componentDidMount() {
    fetch('http://www.worldofblackheroes.com/wp-json/wp/v2/posts?_embed')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
        })
 });
}



   render() {
    return (
<LinearGradient colors={['#080808', '#000000', '#101010']} style={styles.linearGradient}>
<StatusBar barStyle="light-content"/>
<Text style={{ paddingLeft: 20, paddingBottom: 10, color: 'white', fontWeight: 'bold', fontSize: 22}}>Blog:</Text>
<FlatList
        style={{width: width, paddingLeft: 5, paddingRight: 5}}
        data={this.state.data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={( { item } )=>(

    <TouchableOpacity style={{ padding: 10,flex: 1, height: '100%', width: '100%'}}onPress={() => this.handleRowPress(item) }>
        <Card style={styles.cardSyle}>
          <CardItem style={{ flex: 1}}>
          <Image source={{uri:  item._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url }}
              style={{ height:100,width: 70,  resizeMode: 'contain'}} />
          </CardItem>
          <CardItem style={{ flex: 1}}>

          </CardItem>
        </Card>
    </TouchableOpacity>
        )}
        />
      </LinearGradient>
    );
  }
}


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#996515',
    borderWidth: 5
  },
  cardSyle:{
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 2,
    borderRadius: 5,
    borderColor: '#996515',
    borderWidth: 2
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


//make this component available to the app
export default Heroes;

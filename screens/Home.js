//import liraries
import React, { Component } from 'react';
import {TouchableOpacity, View, Text, Image,StyleSheet, StatusBar, FlatList, Dimensions } from 'react-native';

import TimeAgo from 'react-native-timeago';
import HTMLView from 'react-native-htmlview';
import { GetImage, ContentSnippet, TitleSnippet } from '../helpers/helpers';
import { LinearGradient, Constants, Font } from 'expo';
import {  Icon, Thumbnail, Card, CardItem, Button, } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CardComponent from '../components/CardComponent';
const { width, height } = Dimensions.get('window');

// create a component
/// home-variant mask -shield- skull md-game-controller-b
class Home extends Component {
    static navigationOptions = {
   tabBarIcon:({tintColor})=> (
    <MaterialCommunityIcons name="home-modern" size={30} style={{ color: tintColor }}/>
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


handleRowPress = () => {
  this.props.navigation.navigate('BlogDetails',{...this.props.item} );
};

  render() {
    // const { data }= this.props.navigation.state.params;
    return (
      <LinearGradient colors={['#080808', '#000000', '#101010']} style={styles.linearGradient}>
        <StatusBar barStyle="light-content"/>
        <Text style={{ paddingLeft: 20, paddingBottom: 10, color: 'white', fontWeight: 'bold', fontSize: 22}}>Blog:</Text>
        <FlatList
        style={{padding: 10}}
        data={this.state.data}
        keyExtractor={(item) => item.id}
        renderItem={( { item } )=>(
        <TouchableOpacity onPress={() => this.handleRowPress(item) }>
          <Card style={styles.container}>
            <CardItem style={{ backgroundColor: 'transparent', paddingBottom: 8}}>
            <HTMLView textComponentProps={{ style: {fontSize: 18, fontWeight: 'bold', color: '#996515'} }} value={ TitleSnippet(item.title.rendered)}/>
            </CardItem>
            <CardItem style={{ marginTop: -25, backgroundColor: 'transparent', zIndex: -5}}>
            <Image source={{uri:  item._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url }}
              style={{ shadowOpacity: 0.1, marginLeft: -21, width: '113%', height: 180, backgroundColor: 'transparent', resizeMode: 'contain'}} />
            </CardItem>
            <CardItem style={{ marginTop: -50, backgroundColor: 'transparent'}}>
              <Left>
              <Thumbnail small source={{ uri: item._embedded.author[0].avatar_urls['96'] }} style={{ borderColor: 'black', borderWidth: 0.5 }} />
              <View style={{ borderColor: 'black', width: 160, borderTopRightRadius: 10, borderBottomRightRadius: 10,  backgroundColor: 'gold', padding: 5, paddingLeft: 10, marginLeft: -7, zIndex: -10, borderWidth: 0.3 }}>
               <Text style={{ color: 'black', fontWeight: 'bold'}}> { item._embedded.author[0].name.toUpperCase() }  </Text>
              </View>
              </Left>
            </CardItem>
            <CardItem style={{ backgroundColor: 'transparent', marginTop: 5, height: 60, backgroundColor: 'transparent'}}>
              <HTMLView value={ContentSnippet(item.content.rendered)} style={{  marginTop: 5, height: 60, backgroundColor: 'transparent'}}/>
              </CardItem>
              <CardItem style={{ marginTop: -30, paddingRight: 25, backgroundColor: 'transparent', justifyContent: 'space-between'}}>
                <Button transparent>
                  <Icon active name="md-time" style={{ color: 'black'}}/>
                  <Text>
                  <TimeAgo time={item.date}/>
                  </Text>
                </Button>
                <Button transparent>
                  <Icon active name="md-chatbubbles" style={{ color: 'black'}}/>
                  <Text>
                    0 Comments
                  {/* {item.item._embedded["wp:featuredmedia"][0]._links.replies['href']} Comments */}
                  </Text>
                </Button>
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
    height: 320,
    borderRadius: 15,
    borderColor: '#996515',
    borderWidth: 5
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  p: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF3366', // make links coloured pink
  },
  a: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF3366', // make links coloured pink
  },
});

//make this component available to the app
export default Home;

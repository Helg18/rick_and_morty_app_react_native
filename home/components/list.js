import React, { Component } from 'react';
import {Text, FlatList, StyleSheet } from 'react-native';
import Layout from './list-option';
import Separation from './separator';
import OptionCard from './option-card';

class List extends Component {
  separation = () => <Separation />;
  renderItem = ({item}) => <OptionCard {...item}/>;
  render(){
    const list = [
      {
        title: 'Characters',
        image: '../assets/characters.png',
        key: '1'
      },{
        title: 'Locations',
        image: '../assets/episodes.png',
        key: '2'
      },{
        title: 'Episodes',
        image: '../assets/locations.png',
        key: '3'
      }
    ];
    return (
      <Layout title={"Available options"}>
        <FlatList
          data={list}
          ListEmptyComponent={
            () => <Text>No options available. Try again later :(</Text>
          }
          ItemSeparatorComponent={ this.separation }
          renderItem={ this.renderItem }
        />
      </Layout>
      )
  }
}

export default List;
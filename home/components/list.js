import React, { Component } from 'react';
import {Text, FlatList } from 'react-native';
import Layout from './list-option';
import Separation from '../../src/layouts/components/separator';
import OptionCard from './option-card';

class List extends Component {
  separation = () => <Separation />;
  renderItem = ({item}) => <OptionCard {...item}/>;
  setKeys = (item) => item.key;
  render(){
    const list = [
      {
        title: 'Characters',
        key: '1'
      },{
        title: 'Locations',
        key: '2'
      },{
        title: 'Episodes',
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
          keyExtractor={ this.setKeys }
          windowSize={20}
        />
      </Layout>
      )
  }
}

export default List;
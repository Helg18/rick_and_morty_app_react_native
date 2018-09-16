import React, { Component } from 'react';
import {Text, FlatList, StyleSheet } from 'react-native';

import OptionCard from './option-card';
import Layout from './list-option';

class CharactersList extends Component {
  keyExtractor = (item) => item.id.toString();
  renderItem = (item) => <OptionCard {...item} />;
  render(){
    return (
      <Layout title={"Characters"}>
        <FlatList
          data={this.props.list}
          ListEmptyComponent={
            () => <Text>Try again later :(</Text>
          }
          renderItem={ this.renderItem }
          keyExtractor={ this.keyExtractor }
        />
      </Layout>
    );
  }
}

export default CharactersList;
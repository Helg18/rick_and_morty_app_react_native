import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import OptionCard from './option-card';
import Layout from './list-option';
import API from '../../src/services/api';
import Store from "../../store";
import Separation from "../../src/layouts/components/separator";

const mapStateToProps = (state) => {
  return {
    list: state.episodes.results,
    info: state.episodes.info
  }
};

class EpisodesList extends Component {
  keyExtractor = (item) => item.id.toString();
  renderItem = (item) => <OptionCard {...item} />;
  separation = () => <Separation />;
  async previousPage(){
    if (this.props.info.prev){
      const episodes = await API.getNextPage(this.props.info.prev).catch((error)=>{
        console.log("Check your connection");
        alert(error.message);
      });
      Store.dispatch({
        type: 'SET_EPISODES',
        payload: {
          episodes
        }
      })
    }
  }
  async nextPage(){
    if (this.props.info.next){
      const episodes = await API.getNextPage(this.props.info.next).catch((error)=>{
        console.log("Check your connection");
        alert(error.message);
      });
      Store.dispatch({
        type: 'SET_EPISODES',
        payload: {
          episodes
        }
      })
    }
  }
  render(){
    return (
        <Layout title={"Episodes"}>
          <FlatList
            data={this.props.list}
            ListEmptyComponent={
              () => <Text>Try again later :(</Text>
            }
            renderItem={ this.renderItem }
            keyExtractor={ this.keyExtractor }
            ItemSeparatorComponent={ this.separation }
          />
          <View style={styles.containerSelector}>
            <TouchableOpacity onPress={this.previousPage.bind(this)}>
              <Image style={styles.image} source={require('../../src/layouts/assets/leftArrow.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.nextPage.bind(this)}>
              <Image style={styles.image} source={require('../../src/layouts/assets/rightArrow.png')}></Image>
            </TouchableOpacity>
          </View>
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  containerSelector:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: 'contain'
  }
});

export default connect(mapStateToProps)(EpisodesList);
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import API from "../../src/services/api";
import Store from "../../store";
import {connect} from 'react-redux';

class OptionCard extends Component{
  state = { };

  async view(){
    const character = await API.getNextPage(this.props.item.url).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    Store.dispatch({
      type: 'SET_CHARACTER',
      payload: {
        character
      }
    });
    Store.dispatch({
      type: 'SET_SELECTED_OPTION',
      payload: {
        title: 'Character'
      }
    });
  }
  render(){
    return (
      <TouchableOpacity style={styles.container} onPress={this.view.bind(this)}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={{uri: this.props.item.image}}
            />
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>
              {this.props.item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  image:{
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  right:{
    justifyContent: 'space-around',
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title:{
    color: "#eeeeee",
    fontSize: 36
  }
});

export default connect()(OptionCard);
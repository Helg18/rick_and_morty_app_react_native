import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Store from '../../store';
import { connect } from 'react-redux';


class OptionCard extends Component {
  viewOption(){
    title = this.props.title;
    Store.dispatch({
      type: 'SET_SELECTED_OPTION',
      payload: {
        title
      }
    });
  };
  render(){
    return(
      <TouchableOpacity onPress={this.viewOption.bind(this)}>
        <View style={styles.container}>
          <View style={styles.left}>
            <Image style={styles.image} source={require('../../src/layouts/assets/characters.png')}/>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>
              {this.props.title}
            </Text>
            <Text style={styles.description}>
              See all {this.props.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image:{
    height: 150,
    resizeMode: 'contain'
  },
  right:{
    justifyContent: 'space-around',
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  title:{
    color: "#eeeeee",
    fontSize: 36
  },
  description:{
    color: '#eeeeee',
    fontSize: 16,
  }
});

export default connect()(OptionCard);
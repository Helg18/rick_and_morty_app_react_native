import React, { Component } from 'react';
import { connect } from 'react-redux';
import Store from '../../../store';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity } from 'react-native';


class Header extends Component {
  goHome(){
    let title = 'Home';
    Store.dispatch({
      type: 'SET_SELECTED_OPTION',
      payload: {
        title
      }
    });
  }
  render(){
    return (
      <View>
        <SafeAreaView>
          <View style={styles.container}>
            <TouchableOpacity  style={styles.logobox} onPress={this.goHome.bind(this)}>
              <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </TouchableOpacity>
            <Image source={require('../assets/title.png')} style={styles.title}/>
            <View style={styles.right}>
              {this.props.children}
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#222831',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logobox: {
    width: 80,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  title: {
    height: 62,
    resizeMode: 'contain',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  right:{
    width:'10%',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
  }
});


export default connect()(Header);
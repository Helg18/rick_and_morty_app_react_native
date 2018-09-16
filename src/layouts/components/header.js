import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView, } from 'react-native';

const Header = (props) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')} style={styles.logo}/>
          <Image source={require('../assets/title.png')} style={styles.title}/>
          <View style={styles.right}>
            {props.children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#222831',
    flexDirection: 'row'
  },
  logo: {
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


export default Header;
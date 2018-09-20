import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import Header from "../../src/layouts/components/header";
import Footer from "../../src/layouts/components/footer";
import CharacterLayoutMain from '../../src/screens/containers/character'

class CharacterLayout extends Component {

  render(){
    return (
      <CharacterLayoutMain>
        <Header/>
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>
              {this.props.info.name}
            </Text>
            <View style={styles.imageBox}>
              <Image style={styles.image} source={{uri: this.props.info.image}}/>
            </View>
            <Text style={styles.texto}>
              {this.props.info.name} is a {this.props.info.species}, is {this.props.info.status}, and was born on {this.props.info.location.name}
            </Text>
          </View>
        </ScrollView>
        <Footer/>
      </CharacterLayoutMain>
    );
  }
}

const styles = StyleSheet.create({
  imageBox: {
    backgroundColor: '#393e46',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain'
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#393e46'
  },
  title: {
    fontSize: 36,
    color: '#00adb5',
    paddingHorizontal: 15,
  },
  texto: {
    fontSize: 28,
    color: 'white',
    paddingHorizontal: 15,
  }
});

const mapStateToProps = (state) => {
  return {
    info: state.character
  }
};

export default connect(mapStateToProps)(CharacterLayout);
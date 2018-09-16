import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

 // Services
import API from './services/api';

// Home Layouts
import Home from '../home/containers/home-layout';

// Character Layouts
import Characters from '../characters/containers/characters-layout';


class MainLayout extends Component {
  async componentDidMount(){
    const characters = await API.getCharacters().catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
  };

  render(){
    return(
      // <Characters/>
      <Home/>
      );
  };
}

export default MainLayout;
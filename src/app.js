import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


import API from './services/api';
import Home from './screens/containers/home';
import Header from './layouts/components/header';
import Footer from './layouts/components/footer';
import List from  './layouts/components/list';



class MainLayout extends Component {
  async componentDidMount(){
    const characters = await API.getCharacters().catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    console.log(characters);
  };

  render(){
    return(
        <Home>
          <Header/>
          <List/>
          <Footer/>
        </Home>

      );
  };
}

export default MainLayout;
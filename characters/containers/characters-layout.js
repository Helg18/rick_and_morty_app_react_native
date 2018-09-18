import React, {Component} from 'react';
import {Text} from 'react-native';

import Header from "../../src/layouts/components/header";
import Footer from "../../src/layouts/components/footer";
import CharactersLayoutMain from '../../src/screens/containers/characters'
import CharacterList from '../components/characters-list';
import API from "../../src/services/api";
import Store from './../../store';

class CharactersLayout extends Component {
  state = { };

  async componentDidMount(){
    const characters = await API.getCharacters().catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    Store.dispatch({
      type: 'SET_CHARACTERS',
      payload: {
        characters
      }
    })
  };
  render(){
    return (
      <CharactersLayoutMain>
        <Header/>
        <Text>buscador</Text>
        <CharacterList/>
        <Footer/>
      </CharactersLayoutMain>
    );
  }
}

export default CharactersLayout;
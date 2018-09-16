import React, {Component} from 'react';
import {Text} from 'react-native';

import Header from "../../src/layouts/components/header";
import Footer from "../../src/layouts/components/footer";
import CharactersLayoutMain from '../../src/screens/containers/characters'
import CharacterList from '../components/characters-list';
import API from "../../src/services/api";

class CharactersLayout extends Component {
  state = {
    charactersList: []
  };

  async componentDidMount(){
    const characters = await API.getCharacters().catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    this.setState({
      charactersList: characters.results
    })
  };
  render(){
    return (
      <CharactersLayoutMain>
        <Header/>
        <Text>buscador</Text>
        <CharacterList list={this.state.charactersList}/>
        <Footer/>
      </CharactersLayoutMain>
    );
  }
}

export default CharactersLayout;
import React, {Component} from 'react';
import {Text} from 'react-native';

import Header from "../../src/layouts/components/header";
import Footer from "../../src/layouts/components/footer";
import CharacterLayoutMain from '../../src/screens/containers/character'
import API from "../../src/services/api";

class CharacterLayout extends Component {
  state = {
    character: []
  };

  async componentDidMount(){
    const character = await API.getCharacter().catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    this.setState({
      character: character.results
    })
  };
  render(){
    console.log(this.props)
    return (
      <CharacterLayoutMain>
        <Header/>
        <Text>el cuerpo de mi character</Text>
        {/*<CharacterList list={this.state.charactersList}/>*/}
        <Footer/>
      </CharacterLayoutMain>
    );
  }
}

export default CharacterLayout;
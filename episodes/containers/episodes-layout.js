import React, {Component} from 'react';
import {Text} from 'react-native';

import Header from "../../src/layouts/components/header";
import Footer from "../../src/layouts/components/footer";
import EpisodesLayoutMain from '../../src/screens/containers/episodes'
import EpisodesList from '../components/episodes-list';
import API from "../../src/services/api";
import Store from './../../store';

class EpisodesLayout extends Component {
  state = { };

  async componentDidMount(){
    const episodes = await API.getEpisodes().catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    Store.dispatch({
      type: 'SET_EPISODES',
      payload: {
        episodes
      }
    })
  };
  render(){
    return (
      <EpisodesLayoutMain>
        <Header/>
        <Text>buscador</Text>
        <EpisodesList/>
        <Footer/>
      </EpisodesLayoutMain>
    );
  }
}

export default EpisodesLayout;
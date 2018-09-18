import React, {Component} from 'react';
import {Text} from 'react-native';

import Header from "../../src/layouts/components/header";
import Footer from "../../src/layouts/components/footer";
import LocationsLayoutMain from '../../src/screens/containers/locations'
import LocationsList from '../components/locations-list';
import API from "../../src/services/api";
import Store from './../../store';

class LocationsLayout extends Component {
  state = { };

  async componentDidMount(){
    const locations = await API.getLocations().catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    Store.dispatch({
      type: 'SET_LOCATIONS',
      payload: {
        locations
      }
    })
  };
  render(){
    return (
      <LocationsLayoutMain>
        <Header/>
        <Text>buscador</Text>
        <LocationsList/>
        <Footer/>
      </LocationsLayoutMain>
    );
  }
}

export default LocationsLayout;
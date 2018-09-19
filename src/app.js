import React, { Component } from 'react';
import { connect } from 'react-redux';

// Home Layouts
import Home from '../home/containers/home-layout';

// Character Layouts
import Characters from '../characters/containers/characters-layout';

// Locations Layouts
import Locations from '../locations/containers/locations-layout';

// Episodes
import Episodes from '../episodes/containers/episodes-layout';

class MainLayout extends Component {

  render(){
    switch (this.props.optionSelected) {
      case 'Home': {
        return( <Home/> )
      }
      case 'Characters':{
        return( <Characters/> )
      }
      case 'Locations':{
        return( <Locations /> )
      }
      case 'Episodes':{
        return( <Episodes /> )
      }
      default:
        return( <Home/> )
    }
  };
}

const mapStateToProps = (state) => {
  return {
    optionSelected: state.title,
  }
};

export default connect(mapStateToProps)(MainLayout);
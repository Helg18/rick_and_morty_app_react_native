import React, { Component } from 'react';
import { connect } from 'react-redux';

// Home Layouts
import Home from '../home/containers/home-layout';

// Character Layouts
import Characters from '../characters/containers/characters-layout';


class MainLayout extends Component {

  render(){
    switch (this.props.optionSelected) {
      case 'Home': {
        return( <Home/> )
      }
      case 'Characters':{
        return( <Characters/> )
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
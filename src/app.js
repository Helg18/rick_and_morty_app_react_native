import React, { Component } from 'react';

// Home Layouts
import Home from '../home/containers/home-layout';

// Character Layouts
import Characters from '../characters/containers/characters-layout';


class MainLayout extends Component {

  render(){
    return(
      <Characters/>
      // <Home/>
      );
  };
}

export default MainLayout;
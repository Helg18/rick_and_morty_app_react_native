import React, {Component} from 'react';

import Home from '../../src/screens/containers/home';
import Header from "../../src/layouts/components/header";
import Footer from "../../src/layouts/components/footer";

import ListMainOptions from '../../home/components/list';

class HomeMainLayout extends Component {
  render(){
    return (
      <Home>
           <Header/>
           <ListMainOptions/>
           <Footer/>
      </Home>
    );
  }
}

export default HomeMainLayout;
import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/layouts/components/header';
import Footer from './src/layouts/components/footer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header/>
        <Text>Characters</Text>
        <Text>Locations</Text>
        <Text>Episodes</Text>
        <Footer/>
      </Home>
    );
  }
}
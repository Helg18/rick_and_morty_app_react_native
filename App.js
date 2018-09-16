import React, {Component} from 'react';
import Home from './src/screens/containers/home';
import Header from './src/layouts/components/header';
import Footer from './src/layouts/components/footer';
import List from  './src/layouts/components/list';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header/>
        <List/>
        <Footer/>
      </Home>
    );
  }
}
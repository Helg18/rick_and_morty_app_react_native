import React, {Component} from 'react';
import AppLayout from './src/app';
import { Provider } from 'react-redux';
import Store from './store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <AppLayout/>
      </Provider>
    );
  }
}
import { createStore } from 'redux';
import reducer from './reducers/main-reducer';

const store = createStore(reducer, {
  title: '',
  characters: [],
  locations: [],
  episodes: [],
  character: [],
});

export default store;
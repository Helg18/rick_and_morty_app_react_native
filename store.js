import { createStore } from 'redux';
import reducer from './reducers/characters';

const store = createStore(reducer, {
  title: '',
  characters: [],
  locations: [],
  episodes: []
});

export default store;
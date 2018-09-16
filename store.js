import { createStore } from 'redux';
import reducer from './reducers/characters';

const store = createStore(reducer, {});

export default store;
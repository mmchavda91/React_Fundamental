import { createStore } from 'redux';
import playlistReducer from './playlistReducer';

const store = createStore(playlistReducer);

export default store;

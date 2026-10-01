import { ADD_SONG, REMOVE_SONG } from './actions';

const initialState = {
  songs: []
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload]
      };
    case REMOVE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

export default playlistReducer;

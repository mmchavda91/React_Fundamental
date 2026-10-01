export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

export const addSong = (songName) => {
  return {
    type: ADD_SONG,
    payload: songName
  };
};

export const removeSong = (index) => {
  return {
    type: REMOVE_SONG,
    payload: index
  };
};

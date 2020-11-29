import {
  SAVE_ALL_ARTICLE,
  SAVE_AUDIO_LIST,
  SAVE_ALL_BOOK,
  SAVE_CURRENT_BOOK,
} from './constants';
import initialState from './state';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ALL_ARTICLE:
      return { ...state, allArticle: action.payload };
    case SAVE_AUDIO_LIST:
      return { ...state, audioList: [...action.payload] };
    case SAVE_ALL_BOOK:
      console.log('action', action);
      return { ...state, allBook: action.payload };
    case SAVE_CURRENT_BOOK:
      console.log('action', action);
      return { ...state, currentBook: action.payload };
    default:
      return state;
  }
};

export default reducers;

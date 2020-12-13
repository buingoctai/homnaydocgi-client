import { sagaMiddleware } from '../../../store/actions';
import {
  SAVE_ALL_ARTICLE,
  SAVE_AUDIO_LIST,
  SAVE_ALL_BOOK,
  SAVE_CURRENT_BOOK,
  SAVE_THUMB,
} from './constants';
import {
  getAllArticleEffect,
  getAudioArticleEffect,
  createAudioArticleEffect,
  getAllBookEffect,
  getCurrentBookEffect,
  createCollectionEffect,
  createMp3Effect,
  getThumbEffect,
} from './sagas';

const getAllArticle = (payload, resolve, reject) => {
  sagaMiddleware.run(getAllArticleEffect, payload, resolve, reject);
};

export const asyncGetAllArticle = (payload) => {
  return new Promise((resolve, reject) => {
    getAllArticle(payload, resolve, reject);
  });
};

const getAudioArticle = (payload, resolve, reject) => {
  sagaMiddleware.run(getAudioArticleEffect, payload, resolve, reject);
};

export const asynGetAudioArticle = (payload) => {
  return new Promise((resolve, reject) => {
    getAudioArticle(payload, resolve, reject);
  });
};

const createAudioArticle = (payload, resolve, reject) => {
  sagaMiddleware.run(createAudioArticleEffect, payload, resolve, reject);
};

export const asynCreateAudioArticle = (payload) => {
  return new Promise((resolve, reject) => {
    createAudioArticle(payload, resolve, reject);
  });
};

const getAllBook = (payload, resolve, reject) => {
  sagaMiddleware.run(getAllBookEffect, payload, resolve, reject);
};

export const asyncGetAllBook = (payload) => {
  return new Promise((resolve, reject) => {
    getAllBook(payload, resolve, reject);
  });
};

const getCurrentBook = (payload, resolve, reject) => {
  sagaMiddleware.run(getCurrentBookEffect, payload, resolve, reject);
};

export const asyncGetCurrentBook = (payload) => {
  return new Promise((resolve, reject) => {
    getCurrentBook(payload, resolve, reject);
  });
};

const createCollection = (payload, resolve, reject) => {
  sagaMiddleware.run(createCollectionEffect, payload, resolve, reject);
};

export const asyncCreateCollection = (payload) => {
  return new Promise((resolve, reject) => {
    createCollection(payload, resolve, reject);
  });
};

const createMp3 = (payload, resolve, reject) => {
  sagaMiddleware.run(createMp3Effect, payload, resolve, reject);
};

export const asyncCreateMp3 = (payload) => {
  return new Promise((resolve, reject) => {
    createMp3(payload, resolve, reject);
  });
};

const getThumb = (payload, resolve, reject) => {
  sagaMiddleware.run(getThumbEffect, payload, resolve, reject);
};

export const asyncGetThumb = (payload) => {
  return new Promise((resolve, reject) => {
    getThumb(payload, resolve, reject);
  });
};

export const saveAllArticle = (payload) => {
  return {
    type: SAVE_ALL_ARTICLE,
    payload,
  };
};

export const saveAudioList = (payload) => {
  return {
    type: SAVE_AUDIO_LIST,
    payload,
  };
};

export const saveAllBook = (payload) => {
  return {
    type: SAVE_ALL_BOOK,
    payload,
  };
};

export const saveCurrentBook = (payload) => {
  return {
    type: SAVE_CURRENT_BOOK,
    payload,
  };
};

export const saveThumb = (payload) => {
  return {
    type: SAVE_THUMB,
    payload,
  };
};

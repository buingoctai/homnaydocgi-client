import { call, put } from 'redux-saga/effects';
import { getAllArticle, getAudioArticle, createAudioArticle } from '../../../services/ReadNew';
import {
  getAllBook,
  getCurrentBook,
  createCollection,
  createMp3,
  getThumb,
} from '../../../services/AudioBook';

import { saveAllArticle, saveAllBook, saveCurrentBook, saveThumb } from './actions';

function* getAllArticleEffect(payload, resolve, reject) {
  const response = yield call(getAllArticle, payload);

  if (response) {
    yield put(saveAllArticle(response));
    resolve('');
  } else {
    reject('Error calling api');
  }
}

function* getAudioArticleEffect(payload, resolve, reject) {
  const response = yield call(getAudioArticle, payload);

  if (response) {
    resolve(response);
  } else {
    reject('Error calling api');
  }
}

function* createAudioArticleEffect(payload, resolve, reject) {
  const response = yield call(createAudioArticle, payload);

  if (response) {
    resolve(response);
  } else {
    reject('Error calling api');
  }
}

function* getAllBookEffect(payload, resolve, reject) {
  const response = yield call(getAllBook, payload);

  if (response) {
    console.log('response', response);
    yield put(saveAllBook(response));
    resolve('');
  } else {
    reject('Error calling api');
  }
}

function* getCurrentBookEffect(payload, resolve, reject) {
  const response = yield call(getCurrentBook, payload);

  if (response) {
    console.log('response', response);
    yield put(saveCurrentBook(response));
    resolve('');
  } else {
    reject('Error calling api');
  }
}

function* createCollectionEffect(payload, resolve, reject) {
  const response = yield call(createCollection, payload);

  if (response) {
    console.log('response', response);
    if (!response.error) {
      resolve(response);
    } else {
      reject(response);
    }
  } else {
    reject('Error calling api');
  }
}

function* createMp3Effect(payload, resolve, reject) {
  const response = yield call(createMp3, payload);

  if (response) {
    console.log('response', response);

    resolve(response);
  } else {
    reject('Error calling api');
  }
}

function* getThumbEffect(payload, resolve, reject) {
  const response = yield call(getThumb, payload);

  if (response) {
    console.log('response', response);
    yield put(saveThumb(response));
    resolve('');
  } else {
    reject('Error calling api');
  }
}

export {
  getAllArticleEffect,
  getAudioArticleEffect,
  createAudioArticleEffect,
  getAllBookEffect,
  getCurrentBookEffect,
  createCollectionEffect,
  createMp3Effect,
  getThumbEffect,
};

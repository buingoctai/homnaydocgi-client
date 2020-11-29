import { call, put } from 'redux-saga/effects';
import {
  getAllArticle,
  getAudioArticle,
  createAudioArticle,
} from '../../../services/ReadNew';
import { getAllBook, getCurrentBook } from '../../../services/AudioBook';

import { saveAllArticle, saveAllBook, saveCurrentBook } from './actions';

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

export {
  getAllArticleEffect,
  getAudioArticleEffect,
  createAudioArticleEffect,
  getAllBookEffect,
  getCurrentBookEffect,
};

import request from '../utils/request';

export const getAllBook = (param) => {
  return request(`${process.env.API_BASE}/google-drive/getAllAudioBook`, {
    method: 'POST',
    data: { ...param },
  });
};

export const getCurrentBook = (param) => {
  return request(`${process.env.API_BASE}/google-drive/getAudioBook`, {
    method: 'POST',
    data: { ...param },
  });
};

export const createCollection = (params) => {
  return request(`${process.env.API_BASE}/google-drive/createFolder`, {
    method: 'POST',
    data: { ...params },
  });
};

export const createMp3 = (params) => {
  return request(`${process.env.API_BASE}/google-drive/createMp3`, {
    method: 'POST',
    data: { ...params },
  });
};

export const getThumb = (params) => {
  return request(`${process.env.API_BASE}/audio/getThumb`, {
    method: 'POST',
    data: { ...params },
  });
};

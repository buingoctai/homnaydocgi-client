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

import request from '../utils/request';

export const submitPost = (param) => {
  return request(`${process.env.API_BASE}/admin/submitPost`, {
    method: 'POST',
    data: { ...param },
  });
};

export const deletePosts = (param) => {
  return request(`${process.env.API_BASE}/admin/deletePosts`, {
    method: 'POST',
    data: { ...param },
  });
};

export const updatePosts = (param) => {
  return request(`${process.env.API_BASE}/admin/updatePosts`, {
    method: 'POST',
    data: { ...param },
  });
};

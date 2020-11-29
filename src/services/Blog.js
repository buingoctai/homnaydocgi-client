import request from "../utils/request";

export const getMainPosts = (param) => {
  return request(`${process.env.API_BASE}/blog/mainPosts`, {
    method: "POST",
    data: { ...param },
  });
};

export const getFeaturedPosts = (param) => {
  return request(`${process.env.API_BASE}/blog/featuredPosts`, {
    method: "POST",
    data: { ...param },
  });
};

export const getAllPost = (param) => {
  return request(`${process.env.API_BASE}/blog/allPost`, {
    method: "POST",
    data: { ...param },
  });
};

export const getDetailPost = (param) => {
  return request(`${process.env.API_BASE}/blog/getDetailPost`, {
    method: "POST",
    data: { ...param },
  });
};

export const getAllTopic = (param) => {
  return request(`${process.env.API_BASE}/blog/getAllTopic`, {
    method: "POST",
    data: { ...param },
  });
};

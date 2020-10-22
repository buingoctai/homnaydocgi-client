import request from "../utils/request";

export const getAllPost = (param) => {
  return request(`${process.env.API_BASE}/blog/getFollowTopic`, {
    method: "POST",
    data: { ...param },
  });
};

export const searchArticles = (param) => {
  return request(`${process.env.API_BASE}/blog/searchArticles`, {
    method: "POST",
    data: { ...param },
  });
};

export const getSavedPosts = (param) => {
  return request(`${process.env.API_BASE}/blog/getSavedPosts`, {
    method: "POST",
    data: { ...param },
  });
};

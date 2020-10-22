import request from "../utils/request";

export const authencationUser = (params) => {
  return request(`${process.env.API_BASE}/user/authencation`, {
    method: "POST",
    data: { ...params },
  });
};

export const getProfile = (params) => {
  return request(`${process.env.API_BASE}/user/getProfile`, {
    method: "POST",
    data: { ...params },
  });
};

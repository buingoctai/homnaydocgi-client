import request from "../utils/request";

export const submitUserData = (param) => {
  return request(`${process.env.API_BASE}/user/submitData`, {
    method: "POST",
    data: { ...param },
  });
};

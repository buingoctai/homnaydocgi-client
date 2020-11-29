import request from "../utils/request";

export const subscribePage = (params) => {
  return request(`${process.env.API_BASE}/notification/saveSubscription`, {
    method: "POST",
    data: params,
  });
};

export const unSubscribePage = (params) => {
  return request(`${process.env.API_BASE}/notification/deleteSubscription`, {
    method: "POST",
    data: params,
  });
};

export const sendNotification = (params) => {
  return request(`${process.env.API_BASE}/notification/sendNotificationToAll`, {
    method: "POST",
    data: params,
  });
};

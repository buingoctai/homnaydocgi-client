import request from '../utils/request';

export const sendMsgViaBot = (param) => {
  return request(`${process.env.API_BASE}/webhook/sendMsg`, {
    method: 'POST',
    data: { ...param },
  });
};

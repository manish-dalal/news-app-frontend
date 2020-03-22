import { api_response } from "./common";

export const APIhandler = () => {
  return new Promise(async (resolve, reject) => {
    return resolve({
      data: api_response
    });
  });
};

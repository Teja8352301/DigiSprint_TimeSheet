import axios from "axios";

export const axiosInstance = (method, url, payload) => {
  let axiosObject = {};
  axios["method"] = method;
  axios["url"] = url;
  if (method == "post") {
    axios["payload"] = payload || {};
  }
  axios(axiosObject).then((response) => {
    return response;
  });
};

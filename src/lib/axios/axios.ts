import axios from "axios";

export const $axios = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "local"
      ? process.env.REACT_APP_LOCALHOST
      : process.env.REACT_APP_PRODUCT,
  timeout: 5000,
  //   headers: { "X-Custom-Header": "foobar" },
});

//!setting certain need info in local storage through axios
$axios.interceptors.request.use(function (config) {
  // extract accesstoken from local storage
  const accesstoken = localStorage.getItem("accesstoken");

  // if token, set it to every request
  if (accesstoken) {
    config.headers.Authorization = `Bearer ${accesstoken}`;
  }

  return config;
});

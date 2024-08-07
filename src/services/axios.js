import { Axios } from "axios";
const axios = new Axios({
  baseURL: import.meta.env.VITE_API,
});

axios.interceptors.request.use(
  function (config) {
    console.log("Session", sessionStorage.getItem("token"));
    const accessToken = sessionStorage.getItem("token");
    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    if (config.headers["Content-Type"] == null) {
      config.headers.setContentType("application/json");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    if (config.status === 403) {
      window.location.href = "/auth/";
      sessionStorage.removeItem("token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;

import axios from "axios";
import store from "redux/config/configureStore";
const apiClient = ({ url, headers }) => {
  const { user } = store.getState();
  const { accessToken = "" } = user;
  let requestHeader = { ...headers };

  if (accessToken) {
    requestHeader["Authorization"] = `Bearer ${accessToken}`;
  }

  const axiosInstance = axios.create({
    baseURL: url,
    responseType: "json",
    ...(requestHeader && { headers: requestHeader }),
  });

  return axiosInstance;
};
export default apiClient;

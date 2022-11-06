import axios from "axios";
const apiClient = ({ url, headers }) => {
  let token = "";
  let requestHeader = { ...headers };

  if (token) {
    requestHeader["Authorization"] = `Bearer ${token}`;
  }

  const axiosInstance = axios.create({
    baseURL: url,
    responseType: "json",
    ...(requestHeader && { headers: requestHeader }),
  });

  return axiosInstance;
};
export default apiClient;

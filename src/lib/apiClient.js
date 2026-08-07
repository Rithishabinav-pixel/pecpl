import axios from "axios";

const apiClient = axios.create({
  timeout: 15000,
  validateStatus: () => true,
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API request failed:", error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
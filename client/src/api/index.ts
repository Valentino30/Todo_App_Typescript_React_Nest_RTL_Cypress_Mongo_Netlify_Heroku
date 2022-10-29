import axios from "axios";

export const apiCall = {
  baseUrl: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
  get: async (endpoint: string) => {
    const response = await axios.get(`${apiCall.baseUrl}${endpoint}`);
    return response;
  },
  post: async (endpoint: string, data?: Record<string, string>) => {
    const response = await axios.post(`${apiCall.baseUrl}${endpoint}`, data);
    return response;
  },
  put: async (endpoint: string) => {
    const response = await axios.put(`${apiCall.baseUrl}${endpoint}`);
    return response;
  },
  delete: async (endpoint: string) => {
    const response = await axios.delete(`${apiCall.baseUrl}${endpoint}`);
    return response;
  },
};

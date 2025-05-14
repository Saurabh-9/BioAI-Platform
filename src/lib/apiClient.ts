
import axios from "axios";

// Create a base API client instance
export const apiClient = axios.create({
  baseURL: "https://api.bioai-platform.com", // Replace with your actual API URL
  headers: {
    "Content-Type": "application/json"
  }
});

// Add a request interceptor to include the JWT token in requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("bioai_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common error scenarios
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (expired tokens)
    if (error.response && error.response.status === 401) {
      // Clear local storage and redirect to login
      localStorage.removeItem("bioai_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Helper functions for common API operations
export const api = {
  get: async <T>(url: string, params?: any): Promise<T> => {
    const response = await apiClient.get<T>(url, { params });
    return response.data;
  },
  
  post: async <T>(url: string, data?: any): Promise<T> => {
    const response = await apiClient.post<T>(url, data);
    return response.data;
  },
  
  put: async <T>(url: string, data?: any): Promise<T> => {
    const response = await apiClient.put<T>(url, data);
    return response.data;
  },
  
  delete: async <T>(url: string): Promise<T> => {
    const response = await apiClient.delete<T>(url);
    return response.data;
  }
};

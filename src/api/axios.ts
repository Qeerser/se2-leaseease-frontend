import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    // const authToken = document.cookie
    //   .split("; ")
    //   .find((row) => row.startsWith("auth_token="))
    //   ?.split("=")[1];

    // // Attach the token manually if it exists
    // if (authToken) {
    //   config.headers["Authorization"] = `Bearer ${authToken}`;
    // }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzkyMDYwMzMsImlhdCI6MTczOTE5NTIzMywidXNlcl9pZCI6MX0.ZGJAaiuhhVS8iZJ1aP4dUTM-rpUVzmAR7FJ_cY7tNRA"
    config.headers.Authorization = `Bearer ${token}` ; 
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response.data, // Only return the data
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

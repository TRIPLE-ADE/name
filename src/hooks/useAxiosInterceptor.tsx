import axios from "axios";
import { useEffect } from "react";

const useAxiosInterceptor = () => {
  useEffect(() => {
    // Interceptor to add Authorization header to each request
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = ``;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error); // Handle request error
      },
    );

    // Interceptor to handle responses and errors
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response; // Return the response if successful
      },
      (error) => {
        if (error.response) {
          // Check if the error is due to an unauthorized request
          if (error.response.status === 401) {
            const tokenExpired =
              error.response.data.message === "Invalid token" ||
              error.response.data.message === "Unauthorized";
            if (tokenExpired) {
              // Token is expired, handle token expiration logic (e.g., redirect to login)
              console.log("Token is expired, redirect to login page");
            }
          }
          // Extract and log error message from the response
          const message =
            error.response.data.message ||
            error.response?.data?.data?.error?.message ||
            error?.response?.data?.data?.message ||
            error?.response?.data?.message ||
            error.message;
          console.log(message);
        }
        return Promise.reject(error); // Reject the error to be handled by the calling code
      },
    );

    // Clean up the interceptors when the component using this hook is unmounted
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);
};

export default useAxiosInterceptor;

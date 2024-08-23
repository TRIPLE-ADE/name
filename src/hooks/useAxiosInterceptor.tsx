import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/providers/authUtils";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useAxiosInterceptor = () => {
  const { toast } = useToast();
  const isToastShownRef = useRef(false);
  const { userLogout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Interceptor to handle requests
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
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
            const sessionEnd =
              error.response.data.message === "Invalid token" ||
              error.response.data.message === "Unauthorized";
            if (sessionEnd) {
              userLogout();
              navigate("/auth/signin");
            }
          }

          // Extract and log the error message from the response
          const message =
            error.response.data.message ||
            error.response?.data?.data?.error?.message ||
            error?.response?.data?.data?.message ||
            error?.response?.data?.message ||
            error.message;

          // Display a toast notification with the error message
          toast({
            description: `${message} Please try again.` || "An error occurred",
            variant: "destructive",
            duration: 2000,
          });

          isToastShownRef.current = true;
        }
        return Promise.reject(error); // Reject the error to be handled by the calling code
      },
    );

    // Clean up the interceptors when the component using this hook is unmounted
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [userLogout, toast, navigate]);
};

export default useAxiosInterceptor;

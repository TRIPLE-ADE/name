import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "./baseUrl";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { LoginCredentials, LoginResponse } from "@/types/auth";
import { useAuthContext } from "@/providers/authUtils";

export const useLogin = () => {
  const { toast } = useToast();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: async (values: LoginCredentials) => {
      const res = await axios.post(`${baseUrl}login/`, values);
      return res.data;
    },
    onSuccess: (res) => {
      login(res);
      toast({
        description: res.message,
        variant: "success",
        duration: 2000,
      });
      navigate("/");
    },
  });
};

export const useLogout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      const res = await axios.post(`${baseUrl}logout/`);
      return res.data;
    },
    onSuccess: (res) => {
      toast({
        description: res.message,
        variant: "success",
        duration: 2000,
      });
      navigate("/auth/signin");
    },
  });
};

export const useRegister = () => {
  const { toast } = useToast();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(`${baseUrl}login/`, values);
      return res.data;
    },
    onSuccess: (res) => {
      login(res);
      toast({
        description: res.message,
        variant: "success",
        duration: 2000,
      });
      navigate("/");
    },
  });
};

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "./baseUrl";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(`${baseUrl}/auth/login`, values);
      return res.data;
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });
};

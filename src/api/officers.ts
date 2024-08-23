import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "./baseUrl";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { AddOfficerFormData } from "@/types/officer";
import { useAuthContext } from "@/providers/authUtils";

export const useAddOfficers = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { token } = useAuthContext();

  return useMutation<void, Error, AddOfficerFormData>({
    mutationFn: async (data: AddOfficerFormData) => {
      await axios.post(`${baseUrl}register/`, data,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      ); 
    },
    onSuccess: () => {
      toast({
        description: "Officer added successfully!",
        variant: "success",
        duration: 2000,
      });
      navigate("/officers");
    },
    onError: (error) => {
      toast({
        description: `Failed to add officer: ${error.message}`,
        variant: "destructive",
        duration: 4000,
      });
    },
  });
};

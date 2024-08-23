import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useAuthContext } from "@/providers/authUtils";

export const useGetPipelines = () => {
  const { token } = useAuthContext();

  return useQuery({
    queryFn: () =>
      axios
        .get(`${baseUrl}pipeline-routes-viewset/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          return res.data;
        }),
    queryKey: ["pipelines"],
    enabled: !!token,
  });
};

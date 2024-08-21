import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";

export const useGetPipelines = () => {
  return useQuery({
    queryFn: () =>
      axios
        .get(`${baseUrl}pipeline-routes-viewset/`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          return res.data;
        }),
    queryKey: ["pipelines"],
  });
};

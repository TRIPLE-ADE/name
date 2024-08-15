import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAxiosInterceptor from "../hooks/useAxiosInterceptor";
import { ReactNode } from "react";

interface ReactQueryClientProviderProps {
  children: ReactNode;
}

export default function ReactQueryClientProvider({
  children,
}: ReactQueryClientProviderProps) {
  const queryClient = new QueryClient();

  useAxiosInterceptor();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

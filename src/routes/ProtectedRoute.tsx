import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/providers/authUtils";

function ProtectedRoute() {
  const { isLoggedIn } = useAuthContext();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        description: "You need to log in to access this page.",
        variant: "destructive",
        duration: 2000,
      });
    }
  }, [isLoggedIn, toast]);

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/signin" />;
}

export default ProtectedRoute;

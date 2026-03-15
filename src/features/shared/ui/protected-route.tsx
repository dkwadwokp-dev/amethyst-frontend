import { Navigate } from "react-router-dom";
import { useGetLoggedInUser } from "../../auth/actions/use-get-user";
import { Loading } from "../ui/loading";
import {type ReactNode } from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading, error } = useGetLoggedInUser();

  if (isLoading) {
    return <Loading fullScreen={true} />;
  }

  if (error || !user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

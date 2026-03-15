import { useGetLoggedInUser } from "../../auth/actions/use-get-user";

export const InitialDispatch = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useGetLoggedInUser();

  return <>{children}</>;
};

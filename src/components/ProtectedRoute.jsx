import { Navigate } from "react-router-dom";
import useLogin from "../hooks/useAuth";

export const PrivateRoute = ({ redirectPath, children, ...props }) => {
  const { isLoggedIn } = useLogin();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace {...props} />;
  }

  return children;
};

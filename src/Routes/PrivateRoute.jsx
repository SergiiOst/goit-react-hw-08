import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selector";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={location} />;
};

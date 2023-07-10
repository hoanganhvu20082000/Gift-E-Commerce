import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks/hooks";
import { token } from "../store/auth/authSlice";

interface PrivateProps {
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateProps) => {
  const user = useAppSelector(token);
  if (user) return props.children;
  else return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;

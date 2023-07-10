import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks/hooks";
import { token } from "../store/auth/authSlice";

interface PrivateProps {
  children: JSX.Element;
}

const AdminRoute = (props: PrivateProps) => {
  const user = useAppSelector(token);
  if (user && user.admin) return props.children;
  else return <Navigate to={"/"}></Navigate>;
};

export default AdminRoute;

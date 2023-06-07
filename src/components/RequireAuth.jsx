import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function RequireAuth({ children }) {
  const token = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

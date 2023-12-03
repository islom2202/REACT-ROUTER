import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
export const RequireAuth = ({children}) => {
const auth = useAuth();
return !auth.user ? <Navigate to="/login"/> :  children
}
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
export const RequireAuth = ({children}) => {
const auth = useAuth();
const location = useLocation();
return !auth.user ? <Navigate to="/login" state={{path: location.pathname}}/> :  children
}
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";


function LoggedOutRoutes() {
  const loggedIn = useAuthStatus()

  if(loggedIn){
    return <Navigate to='/home' />
  } else {
    return <Outlet />
  }
}
export default LoggedOutRoutes
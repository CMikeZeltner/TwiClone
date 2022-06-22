import { useAuthStatus } from "../hooks/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";


function LoggedInRoutes() {
  const loggedIn = useAuthStatus()
  console.log(loggedIn)

  if(loggedIn){
    return <Outlet />
  } else {
    return <Navigate to='/login' />
  }
}
export default LoggedInRoutes
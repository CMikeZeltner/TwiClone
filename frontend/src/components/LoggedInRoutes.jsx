import { useAuthStatus } from "../hooks/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";


function LoggedInRoutes() {
  const {loggedIn, checkingStatus} = useAuthStatus()


  if(checkingStatus){
    return 'Hey'
  }

  if(loggedIn){
    return <Outlet />
  } else{
    <Navigate to='/login' />
  }
}
export default LoggedInRoutes
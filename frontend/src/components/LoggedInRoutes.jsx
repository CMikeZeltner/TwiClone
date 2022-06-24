import { useAuthStatus } from "../hooks/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";


function LoggedInRoutes() {
  const {loggedIn, checkingStatus} = useAuthStatus()


  if(checkingStatus){
    return 'Hey'
  }

  console.log(loggedIn)
  if(loggedIn){
    return <Outlet />
  } else{
    return <Navigate to='/login' />
  }
}
export default LoggedInRoutes
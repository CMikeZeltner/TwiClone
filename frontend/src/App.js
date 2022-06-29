import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Home from './pages/Home';
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import LoggedInRoutes from './components/LoggedInRoutes';


function App() {
  return (
    <>
      <Router>
      <div className="app-container">
        <Routes>

          <Route path='/' element={<LoggedInRoutes />}>
            <Route path='/home' element={<Home />} />
          </Route>

          <Route path='/home' element={<LoggedInRoutes />}>
            <Route path='/home' element={<Home />} />
          </Route>

          <Route path='/:id' element={<LoggedInRoutes />}>
            <Route path='/:id' element={<ProfilePage />} />
          </Route>


            <Route path='/register' element={<Register />} />

            <Route path='/login' element={<Login />} />


          <Route path='/logout' element={<Logout />} />

        </Routes>
             
            </div>
          

      </Router>
      
    </>
  );
}

export default App;

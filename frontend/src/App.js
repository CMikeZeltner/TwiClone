import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Home from './pages/Home';
import Register from "./pages/Register";
import LoggedInRoutes from './components/LoggedInRoutes';
import LoggedOutRoutes from './components/LoggedOutRoutes';

function App() {
  return (
    <>
      <Router>
      <div className="app-container">
        <Routes>

          <Route path='/' element={<LoggedInRoutes />}>
            <Route path='/' element={<Navigate to='/home' />} />
          </Route>

          <Route path='/home' element={<LoggedInRoutes />}>
            <Route path='/home' element={<Home />} />
          </Route>


          <Route path='/register' element={<LoggedOutRoutes />}>
              <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/login' element={<LoggedOutRoutes />}>
            <Route path='/login' element={<Login />} />
          </Route>


          <Route path='/logout' element={<Logout />} />

        </Routes>
             
            </div>
          

      </Router>
      
    </>
  );
}

export default App;

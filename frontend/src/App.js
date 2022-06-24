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
            <Route navigate='/home' element={<Home />} />
          </Route>

          <Route path='/' element={<LoggedInRoutes />}>
            <Route path='/home' element={<Home />} />
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

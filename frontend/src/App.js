import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Home from './pages/Home';
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import TweetPage from './pages/TweetPage';
import FauxMessageBoxModal from './pages/FauxMessageBoxModal';
import LoggedInRoutes from './components/LoggedInRoutes';


function App() {
  return (
    <>
      <Router>
      <div className="app-container">
        <Routes>

          <Route path='/' element={<LoggedInRoutes />}>
            <Route path='/' element={<Navigate to='/home'/>} />
          </Route>

          <Route path='/home' element={<LoggedInRoutes />}>
            <Route path='/home' element={<Home />} />
          </Route>

          <Route path='/compose/tweet' element={<LoggedInRoutes />}>
            <Route path='/compose/tweet' element={<FauxMessageBoxModal />} />
          </Route>

          
            <Route path='/:userName' element={<ProfilePage />} />
          
         
            <Route path='/:userName/status/:id' element={<TweetPage />} />
        

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

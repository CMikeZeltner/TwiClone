import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Home from './pages/Home';
import Register from "./pages/Register";


function App() {
  return (
    <>
      <Router>
      <div className="app-container">
        <Routes>

          <Route path='/home' element={<Home />} />
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

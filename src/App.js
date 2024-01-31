import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Admin from './Components/Pages/Admin/Admin';


const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Admin />}></Route>

      </Routes>
    </>
  );
}

export default App;

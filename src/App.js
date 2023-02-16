import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Nahu from './Pages/Nahu/Nahu';
import Dashboard from './Pages/Dashboard/AdminDashboard';
import AddCategory from './Pages/Home/SubCategory';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/nahu' element={<Nahu/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

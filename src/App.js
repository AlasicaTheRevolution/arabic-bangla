import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Nahu from "./Pages/Nahu/Nahu";
import Dashboard from "./Pages/Dashboard/AdminDashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import AddSubCategory from "./Pages/Dashboard/AddSubCategory";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nahu" element={<Nahu />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="add-subcategory" element={<AddSubCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

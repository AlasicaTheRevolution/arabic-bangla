import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Nahu from "./Pages/Nahu/Nahu";
import Dashboard from "./Pages/Dashboard/AdminDashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import AddSubCategory from "./Pages/Dashboard/AddSubCategory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import DashboardNahu from "./Pages/Dashboard/DashboardNahu";
import DashboardSarf from "./Pages/Dashboard/DashboardSarf";
import DashboardBalaga from "./Pages/Dashboard/DashboardBalaga";
import Sarf from "./Pages/Sarf/Sarf";
import Balaga from "./Pages/Balaga/Balaga";
import SubCategoryContent from "./Pages/SubCategoryContent/SubCategoryContent";
import DeleteSubcategory from "./Pages/Dashboard/DeleteSubcategory";
import EditSubcategory from "./Pages/Dashboard/EditSubcategory";
import EditSubcategoryContent from "./Pages/Dashboard/EditSubcategoryContent";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nahu" element={<Nahu />}>
          <Route path=":slug" element={<SubCategoryContent />} />
        </Route>
        <Route path="/sarf" element={<Sarf />}>
          <Route path=":slug" element={<SubCategoryContent />} />
        </Route>
        <Route path="/balaga" element={<Balaga />}>
          <Route path=":slug" element={<SubCategoryContent />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="add-subcategory" element={<AddSubCategory />} />
          <Route path="delete-subcategory" element={<DeleteSubcategory />} />
          <Route path="edit-subcategory" element={<EditSubcategory />} />
          <Route path="edit-subcategory/:slug" element={<EditSubcategoryContent />} />
          <Route path="nahu" element={<DashboardNahu />} />
          <Route path="sarf" element={<DashboardSarf />} />
          <Route path="balaga" element={<DashboardBalaga />} />
        </Route>
      </Routes>
      <Footer/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;

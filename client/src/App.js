import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/shared/Routes/ProtectedRoute";
import Organistion from "./pages/DashBoard/Organistion";
import { Donar } from "./pages/DashBoard/Donar";
import Hospital from "./pages/DashBoard/Hospital";
import Consumer from "./pages/DashBoard/Consumer";
import Donation from "./pages/Donation";
import AdminHome from "./pages/Admin/AdminHome";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import HomePage from "./pages/HomePage";
import Analytics from "./pages/Analytics";
import Inventory from "./pages/DashBoard/Inventory";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/home"
          element={<ProtectedRoute>{<HomePage />}</ProtectedRoute>}
        />
        <Route
          path="/"
          element={<ProtectedRoute>{<Register />}</ProtectedRoute>}
        />
        <Route
          path="/inventory"
          element={<ProtectedRoute>{<Inventory />}</ProtectedRoute>}
        />
        <Route
          path="/orgnaisation"
          element={<ProtectedRoute>{<Organistion />}</ProtectedRoute>}
        />
        <Route
          path="/donar"
          element={<ProtectedRoute>{<Donar />}</ProtectedRoute>}
        />
        <Route
          path="/donation"
          element={<ProtectedRoute>{<Donation />}</ProtectedRoute>}
        />
        <Route
          path="/hospital"
          element={<ProtectedRoute>{<Hospital />}</ProtectedRoute>}
        />
        <Route
          path="/consumer"
          element={<ProtectedRoute>{<Consumer />}</ProtectedRoute>}
        />
        <Route
          path="/admin"
          element={<ProtectedRoute>{<AdminHome />}</ProtectedRoute>}
        />
        <Route
          path="/donar-list"
          element={<ProtectedRoute>{<DonarList />}</ProtectedRoute>}
        />
        <Route
          path="/hospital-list"
          element={<ProtectedRoute>{<HospitalList />}</ProtectedRoute>}
        />
        <Route
          path="/organisation-list"
          element={<ProtectedRoute>{<OrgList />}</ProtectedRoute>}
        />

        <Route
          path="/analytics"
          element={<ProtectedRoute>{<Analytics />}</ProtectedRoute>}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

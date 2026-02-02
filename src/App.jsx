import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landing/Home';
import ServiceDetail from './pages/service/ServiceDetail'; // Import ini
import Login from './pages/auth/Login'; // Import page baru
import Register from './pages/auth/Register';
import SelectRole from './pages/auth/SelectRole';
import UserDashboard from './pages/dashboard/UserDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan/:id" element={<ServiceDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
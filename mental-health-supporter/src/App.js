import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ArticalPage from "./pages/ArticalPage"
 
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/artical" element={<ArticalPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
  );
}

export default App;

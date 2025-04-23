import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx';
import ProfilePage from "./pages/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from './pages/RegisterPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}

export default App

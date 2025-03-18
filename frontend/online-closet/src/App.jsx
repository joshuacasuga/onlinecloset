import { Box } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx';
import ProfilePage from "./pages/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
      </Routes>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/user/:id" element={<ProfilePage/>}/>
      </Routes>
    </Box>
  );
}

export default App

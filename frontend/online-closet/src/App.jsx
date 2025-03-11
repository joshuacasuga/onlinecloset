import { Box } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx';
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <Box minH={"100vh"}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/user/:id" element={<ProfilePage/>}/>
      </Routes>
    </Box>
  );
}

export default App

import NavBar from "./components/nav";
import Hero from "./components/hero";
import PartnerSection from "./components/partner";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Homepage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <PartnerSection /></>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

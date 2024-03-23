import NavBar from "./components/nav";
import Hero from "./components/hero";
import PartnerSection from "./components/partner";
import Layout from "./components/shared/layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <PartnerSection />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} /> */}
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

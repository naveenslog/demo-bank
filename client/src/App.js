import NavBar from "./components/nav";
import PartnerSection from "./components/partner";
import Layout from "./components/shared/layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingSection from "./components/landing";
import PopularOffers from "./components/popularOffer";
import Services from "./components/services";
import PopularProduct from "./components/popularProduct";
import Dashboard from "./pages/dashboard";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <LandingSection/>
      <PopularProduct/>
      <PopularOffers/>
      <Services/>
      <PartnerSection />
    </>
  )
}

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

import Layout from "./components/shared/layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingSection from "./components/landing";
import PopularOffers from "./components/popularOffer";
import Services from "./components/services";
import PopularProduct from "./components/popularProduct";
import Dashboard from "./pages/dashboard";
import "./index.css";
import Beneficiaries from "./pages/beneficiaries";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Transactions from "./pages/transactions";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <LandingSection />
      <PopularProduct />
      <PopularOffers />
      <Services />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

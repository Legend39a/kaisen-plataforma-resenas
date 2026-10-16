import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Principal from "./pages/Principal";
import Catalogo from "./pages/Catalogo";
import Sesion from "./pages/Sesion";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/sesion" element={<Sesion />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

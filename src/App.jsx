import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BookTable from "./pages/Booktable.jsx";
import Location from "./pages/Location.jsx";

function App() {
  return (
    <Router>
      <Header />

      {/* 🔥 NO w-100, NO container, just plain wrapper */}
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booktable" element={<BookTable/>} />
          <Route path="/location" element={<Location/>} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;

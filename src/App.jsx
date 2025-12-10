// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
// Sabhi imports mein .jsx extension add karein taaki Vite use resolve kar sake
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx'; 

// Page Imports
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import Locations from './pages/Locations.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      {/* Header har page par dikhega */}
      <Header /> 
      
      <main>
        {/* Yahan sabhi routes define hote hain */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Optional: Agar koi page nahi milta toh ek Not Found page bhi bana sakte hain */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      
      {/* Footer har page par dikhega */}
      <Footer /> 
    </Router>
  );
}

export default App;
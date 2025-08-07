import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  // Initialize dark mode state (default is false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode to body element based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark'); // Add dark class to body
    } else {
      document.body.classList.remove('dark'); // Remove dark class from body
    }
  }, [isDarkMode]); // Re-run effect when isDarkMode changes

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      {/* Navbar with Dark Mode Toggle */}
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <SpeedInsights />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

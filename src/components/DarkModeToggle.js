// /src/components/DarkModeToggle.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';  // Import icons

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
      {isDarkMode ? <FaSun /> : <FaMoon />}  {/* Conditionally render icons */}
    </button>
  );
};

export default DarkModeToggle;

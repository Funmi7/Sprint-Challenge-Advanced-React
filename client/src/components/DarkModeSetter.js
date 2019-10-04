import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeSetter = () => {
const [darkMode, setDarkMode] = useDarkMode(false);
const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
      <button onClick={toggleMode}
      className={darkMode ? 'toggle toggled' : 'toggle'}>
        change theme Mode
        </button>
    )
}

export default DarkModeSetter;
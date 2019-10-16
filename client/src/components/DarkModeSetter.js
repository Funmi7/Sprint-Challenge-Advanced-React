import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import styled from 'styled-components';


const HeadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DarkModeSetter = () => {
const [darkMode, setDarkMode] = useDarkMode(false);
const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
      <HeadingStyle className='themeButton'>
        <h2>Women's World Cup</h2>
        <button onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>
          change theme Mode
        </button>
      </HeadingStyle>
    )
}

export default DarkModeSetter;
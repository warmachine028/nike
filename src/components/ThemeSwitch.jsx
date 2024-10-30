import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useSpring, animated } from 'react-spring';
import { SunIcon, MoonIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import './ThemeSwitch.scss';

const ThemeSwitch = ({ handleClick }) => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const springProps = useSpring({
    transform: isDarkMode ? 'rotate(0deg)' : 'rotate(180deg)', // Adjusted rotation values
    config: { tension: 500, friction: 30 }
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div id="🔥ThemeSwitch">
      <animated.div style={springProps} onClick={toggleTheme}>
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </animated.div>
      <ShoppingCartIcon onClick={handleClick} />
    </div>
  );
};

export default ThemeSwitch;

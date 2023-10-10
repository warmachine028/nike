/** @format */
'use client';
import { useTheme } from 'next-themes';
import { SunIcon, ShoppingCartIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeSwitch = ({ handleClick }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="inline-flex items-center">
      {theme === 'light' ? (
        <MoonIcon
          className="mr-3 h-6 w-6 transition duration-300 cursor-pointer text-slate-gray dark:text-coral-red"
          onClick={() => setTheme('dark')}
        />
      ) : (
        <SunIcon
          className="mr-3 h-6 w-6 transition duration-300 cursor-pointer text-slate-gray dark:text-coral-red"
          onClick={() => setTheme('light')}
        />
      )}
      <ShoppingCartIcon
        onClick={handleClick}
        className="mr-3 h-6 w-6 transition duration-300 cursor-pointer text-slate-gray dark:text-coral-red"
      />
    </div>
  );
};

export default ThemeSwitch;

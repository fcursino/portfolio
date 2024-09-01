import { useLayoutEffect } from 'react';
import useToggle from '../hooks/useToggle';
import { LightMode, DarkMode } from '@mui/icons-material';

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useToggle<'light' | 'dark'>({
    key: 'theme',
    defaultValue: 'light',
    options: ['light', 'dark'],
  });

  useLayoutEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.backgroundColor = 'rgb(9 13 33)';
    } else {
      root.style.backgroundColor = 'rgb(232 242 253)';
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-accent-dark dark:text-accent-light"
    >
      <span className="sm:hidden">
        {theme === 'light' ? <DarkMode htmlColor="#e2c706" /> : <LightMode htmlColor="#e2c706" />}
      </span>
      <span className="hidden sm:inline">
        {theme === 'light' ? 
        <span className="">
          <DarkMode htmlColor="#e2c706" /> Dark Mode
        </span> : 
        <span>
          <LightMode htmlColor="#e2c706" /> Light Mode
        </span> }
      </span>
    </button>
  );
};

export default ThemeToggle;

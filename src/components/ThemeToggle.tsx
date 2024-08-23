import useToggle from '../hooks/useToggle';

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useToggle<'light' | 'dark'>({
    key: 'theme',
    defaultValue: 'light',
    options: ['light', 'dark'],
  });

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-accent-dark dark:text-accent-light"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;

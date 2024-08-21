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
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;

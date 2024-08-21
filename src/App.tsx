import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import useToggle from './hooks/useToggle';

function App() {
  const [language, toggleLanguage] = useToggle<'en' | 'pt'>({
    key: 'language',
    defaultValue: 'en',
    options: ['en', 'pt'],
  });

  const text = {
    en: {
      welcome: 'Welcome to My Portfolio',
    },
    pt: {
      welcome: 'Bem-vindo ao Meu Portfólio',
    },
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex gap-4 mb-8">
        <ThemeToggle />
        <button onClick={toggleLanguage}>
          {language === 'en' ? '🇺🇸 English' : '🇧🇷 Português'}
        </button>
      </div>
      <h1 className="text-3xl font-bold">
        {text[language].welcome}
      </h1>
    </div>
  );
}

export default App;

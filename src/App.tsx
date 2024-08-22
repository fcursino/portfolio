import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';

function Content() {
  const { language } = useLanguage();

  const text = {
    en: {
      welcome: 'Welcome to My Portfolio',
    },
    pt: {
      welcome: 'Bem-vindo ao Meu Portfólio',
    },
  };

  return (
    <div className="h-screen w-screen flex-col items-center  bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex gap-4 mb-8">
        <Header />
      </div>
      <h1 className="text-3xl font-bold">
        {text[language].welcome}
      </h1>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

export default App;

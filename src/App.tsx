import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Card from './components/Card';

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
    <div className="h-screen w-screen flex-col items-center  bg-secondary-light dark:bg-secondary-dark text-accent-dark dark:text-accent-light">
      <div className="flex gap-4 mb-8">
        <Header />
      </div>
      <div className="flex justify-between">
      <Card />
      <Card />
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

import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Card from './components/Card';
import profile from './assets/profile.png'

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
      <div className="flex justify-around items-center p-10">
        <h1 className="text-3xl font-bold">
          {text[language].welcome}
        </h1>
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden bg-primary-light dark:bg-primary-dark">
          <img src={profile} alt="Perfil" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="flex justify-between p-10">
      <Card />
      </div>
      
      
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

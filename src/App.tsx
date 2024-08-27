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
  const findYearsPast = (): number => {
    const currentDate = new Date();
    const initialDate = new Date(2001, 4, 7);
    let anos = currentDate.getFullYear() - initialDate.getFullYear();
    
    if (currentDate.getMonth() < initialDate.getMonth() || (currentDate.getMonth() === initialDate.getMonth() && currentDate.getDate() < initialDate.getDate())) {
      anos--;
    }
    return anos;
  }
  let yearsPast = findYearsPast()

  

  return (
    <div className="h-screen w-screen flex-col items-center  bg-secondary-light dark:bg-secondary-dark text-accent-dark dark:text-accent-light">
      <div className="flex gap-4 mb-8">
        <Header />
      </div>
      <div className="flex justify-around items-center p-10">
        <h1 className="text-3xl font-bold">
          {text[language].welcome}
        </h1>
      </div>
      <div className="flex justify-center sm:justify-between p-10">
      <Card>
        <div className="grid-flow-col sm:flex justify-around items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden bg-primary-light dark:bg-primary-dark">
            <img src={profile} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2">
            <text>Meu nome é Fabrício, tenho {yearsPast} anos. Sou desenvolvedor FullStack, e estou atuando na área desde 2020. Sou apaixonado pelo desenvolvimento de produtos que fazem a diferença na vida das pessoas.</text>
          </div>
        </div>
      </Card>
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

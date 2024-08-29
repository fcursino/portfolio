import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Card from './components/Card';
import profile from './assets/profile.png'
import { LANGUAGE_SWITCH } from './config/languageConfig'
import skills from './config/iconConfig'

function Content() {
  const { language } = useLanguage();

  return (
    <div className="h-screen w-screen flex-col items-center  bg-secondary-light dark:bg-secondary-dark text-accent-dark dark:text-accent-light">
      <div className="flex gap-4 mb-8">
        <Header />
      </div>
      <div className="flex justify-around items-center p-10">
        <h1 className="text-3xl lg:text-4xl font-bold">
          {LANGUAGE_SWITCH[language].welcome}
        </h1>
      </div>
      <div className="grid p-10">
        <h3 className="text-xl lg:text-2xl font-bold max-w-5xl m-auto w-full">
          {LANGUAGE_SWITCH[language].presentation_title}
        </h3>
        <Card>
          <div className="grid sm:flex flex-col sm:flex-row justify-center sm:justify-around items-center text-center sm:text-left">
            <div className="mb-4 sm:mb-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden bg-primary-light dark:bg-primary-dark mx-auto sm:mx-0">
              <img src={profile} alt="Perfil" className="w-full h-full object-cover" />
            </div>
            <div className="w-full sm:w-1/2">
              <p className="text-base lg:text-lg">{LANGUAGE_SWITCH[language].presentation}</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="grid p-10">
        <h3 className="text-xl lg:text-2xl font-bold max-w-5xl m-auto w-full">
          {LANGUAGE_SWITCH[language].skills_title}
        </h3>
        <Card>
          <div className="grid-cols-4 sm:flex flex-col flex-wrap sm:flex-row justify-center sm:justify-around items-center text-center sm:text-left">
            <img src={skills.node} className="w-12" />
            <img src={skills.vue} className="w-12" />
            <img src={skills.react} className="w-12" />
            <img src={skills.javascript} className="w-12" />
            <img src={skills.html} className="w-12" />
            <img src={skills.css} className="w-12" />
            <img src={skills.php} className="w-12" />
            <img src={skills.python} className="w-12" />
            <img src={skills.mysql} className="w-12" />
            <img src={skills.git} className="w-12" />
            <img src={skills.github} className="w-12" />
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

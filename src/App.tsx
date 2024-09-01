import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Card from './components/Card';
import profile from './assets/profile.png'
import { LANGUAGE_SWITCH } from './config/languageConfig'
import skills from './config/iconConfig'
import projectLogo from './assets/images/project.png'

function Content() {
  const { language } = useLanguage();

  return (
    <div className="h-fit sm:h-screen w-screen flex-col items-center  bg-secondary-light dark:bg-secondary-dark text-accent-dark dark:text-accent-light">
      <div className="flex gap-4 mb-8">
        <Header />
      </div>
      <div className="flex justify-around items-center p-10">
        <h1 className="text-3xl lg:text-4xl font-bold">
          {LANGUAGE_SWITCH[language].welcome}
        </h1>
      </div>
      <div className="grid m-10">
        <h3 className="text-xl lg:text-2xl pb-4 font-bold max-w-5xl m-auto w-full">
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
      <div className="grid m-10">
        <h3 className="text-xl lg:text-2xl pb-4 font-bold max-w-5xl m-auto w-full">
          {LANGUAGE_SWITCH[language].skills_title}
        </h3>
        <Card>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 justify-center items-center text-center sm:text-left">
            <div className="flex flex-col justify-center text-center">
              <img src={skills.node} className="w-12 m-auto" />
              <text>NodeJS</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.vue} className="w-12 m-auto" />
              <text>Vue</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.react} className="w-12 m-auto" />
              <text>React</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.javascript} className="w-12 m-auto" />
              <text>Javascript</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.html} className="w-12 m-auto" />
              <text>HTML</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.css} className="w-12 m-auto" />
              <text>CSS</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.php} className="w-12 m-auto" />
              <text>PHP</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.python} className="w-12 m-auto" />
              <text>Python</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.mysql} className="w-12 m-auto" />
              <text>MySQL</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.docker} className="w-12 m-auto" />
              <text>Docker</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.git} className="w-12 m-auto" />
              <text>Git</text>
            </div>
            <div className="flex flex-col justify-center text-center">
              <img src={skills.github} className="w-12 m-auto" />
              <text>Github</text>
            </div>
          </div>
        </Card>
      </div>
      <div className="grid m-10">
        <h3 className="text-xl lg:text-2xl pb-4 font-bold max-w-5xl m-auto w-full">
          {LANGUAGE_SWITCH[language].projects_title}
        </h3>
        <Card>
          {LANGUAGE_SWITCH[language].projects.map((project, index) => (
            <div>
              {index !== 0 ? <hr className="border-accent-dark dark:border-accent-light" /> : null}
              <div className="grid sm:flex flex-col sm:flex-row justify-center sm:justify-around items-center text-center sm:text-left">
                <div className="mb-4 sm:mb-0 w-8 h-8 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full overflow-hidden bg-primary-light dark:bg-primary-dark mx-auto sm:mx-0">
                  <img src={projectLogo} alt="Project" className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-1/2">
                  <p className="p-4 text-base lg:text-lg">{project.project_description}</p>
                </div>
              </div>
            </div>
            
          ))}
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

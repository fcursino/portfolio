import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full  bg-primary-light dark:bg-primary-dark text-accent-dark dark:text-accent-light"
    >
      {language === 'en' ? '🇺🇸 English' : '🇧🇷 Português'}
    </button>
  );
};

export default LanguageToggle;

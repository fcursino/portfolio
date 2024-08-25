import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-accent-dark dark:text-accent-light"
    >
      <span className="sm:hidden">
        {language === 'en' ? 'US' : 'BR'}
      </span>
      <span className="hidden sm:inline">
        {language === 'en' ? '🇺🇸 English' : '🇧🇷 Português'}
      </span>
    </button>
  );
};

export default LanguageToggle;

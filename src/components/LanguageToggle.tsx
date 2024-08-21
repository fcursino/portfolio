import { useEffect } from 'react';
import useToggle from '../hooks/useToggle';

interface LanguageToggleProps {
  setLanguage: (language: 'en' | 'pt') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ setLanguage }) => {
  const [language, toggleLanguage] = useToggle<'en' | 'pt'>({
    key: 'language',
    defaultValue: 'en',
    options: ['en', 'pt'],
  });

  useEffect(() => {
    setLanguage(language);
  }, [language, setLanguage]);

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {language === 'en' ? '🇺🇸 English' : '🇧🇷 Português'}
    </button>
  );
};

export default LanguageToggle;

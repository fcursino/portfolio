import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitchProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div>
      <label htmlFor="language-switch">Choose Language: </label>
      <select id="language-switch" value={i18n.language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;

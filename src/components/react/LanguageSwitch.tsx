import React, { useState } from 'react';

interface LanguageSwitchProps {
  // onLanguageChange: (language: string) => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({  }) => {
  const [language, setLanguage] = useState('en');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    // onLanguageChange(selectedLanguage);
  };

  return (
    <div>
      <label htmlFor="language-switch">Choose Language: </label>
      <select id="language-switch" value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: 'English',
  uz: "O'zbekcha",
  ru: 'Русский'
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button className="language-btn" onClick={toggleDropdown}>
        <span className="lang-code">{language.toUpperCase()}</span>
        <i className={`fi fi-rr-angle-down ${isOpen ? 'rotated' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="language-dropdown">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              className={`language-option ${code === language ? 'active' : ''}`}
              onClick={() => selectLanguage(code)}
            >
              <span className="lang-name">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;

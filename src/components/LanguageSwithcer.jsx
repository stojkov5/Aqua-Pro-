import { useTranslation } from "react-i18next";
import "../styles/Navbar.css"; // Make sure this file includes .lang-button and .active-lang styles

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`lang-button ${currentLang === "en" ? "active-lang" : ""}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("mk")}
        className={`lang-button ${currentLang === "mk" ? "active-lang" : ""}`}
      >
        MK
      </button>
    </div>
  );
};

export default LanguageSwitcher;

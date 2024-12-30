import React from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitch: React.FC = () => {
    const { i18n } = useTranslation();

    // Function to toggle language between English and Arabic
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'ar' ? 'en' : 'ar'; // Toggle between 'ar' and 'en'
        i18n.changeLanguage(newLanguage); // Change the language
    };

    return (
        <button onClick={toggleLanguage}>
            {i18n.language === 'ar' ? 'English' : 'العربية'}
        </button>
    );
};

export default LangSwitch;
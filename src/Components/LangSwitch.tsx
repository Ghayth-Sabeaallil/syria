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
            {i18n.language === 'ar' ? <div className='flex gap-2'><img src="/en.png" alt="en" /><p>EN</p></div> : <div className='flex gap-2'><img src="/ar.png" alt="ar" /><p>AR</p></div>}
        </button>

    );
};

export default LangSwitch;
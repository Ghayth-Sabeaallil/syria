import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { useTranslation } from 'react-i18next';
import MapGoogle from '../Components/MapGoogle';

function State() {
    const { i18n, t } = useTranslation();
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'ltr' : 'rtl';
        document.title = `${t('discover')}`


    }, [i18n.language]);
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-1 justify-center items-center m-auto h-screen p-4">
                <MapGoogle />
            </div>
            <Footer />
        </>
    )
}

export default State
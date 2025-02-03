import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { useTranslation } from 'react-i18next';
import MapGoogle from '../Components/MapGoogle';

function SyriaMap() {
    const { i18n, t } = useTranslation();
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'ltr' : 'rtl';
        document.title = `${t('discover')}`
    }, [i18n.language]);
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center m-auto h-screen p-4">
                <MapGoogle />
            </div>
            <Footer />
        </>
    )
}

export default SyriaMap
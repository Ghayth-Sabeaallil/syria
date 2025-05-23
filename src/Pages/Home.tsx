import { useEffect, useRef } from 'react';
import Footer from '../Components/Footer';
import MapView from '../Components/MapView';
import Header from '../Components/Header';
import { DiscoverSyria } from '../Components/DiscoverSyria';
import { useTranslation } from 'react-i18next';
import InfoContainer from '../Components/InfoContainer';
import { SAR } from '../Components/SAR';
import Videos from '../Components/Videos';



function Home() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'ltr' : 'rtl';
        if (audioRef.current) {
            audioRef.current.play();
        }
        document.title = `${t('syria')}`
    }, [i18n.language]);
    return (
        <>

            <Header />
            <SAR />
            <DiscoverSyria />
            <InfoContainer />
            <MapView />
            <Videos />
            <Footer />
        </>

    )
}

export default Home

{/*<audio ref={audioRef} src="/rafraf.mp3" preload="auto"></audio>*/ }
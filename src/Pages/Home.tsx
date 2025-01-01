import { useEffect, useRef } from 'react';
import Footer from '../Components/Footer';
import MapView from '../Components/MapView';
import Header from '../Components/Header';
import { DiscoverSyria } from '../Components/DiscoverSyria';
import DiscoverContainer from '../Components/DiscoverContainer';
import { useTranslation } from 'react-i18next';
import CardContainer from '../Components/CardContainer';



function Home() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { i18n } = useTranslation();
    useEffect(() => {
        /* document.documentElement.dir = i18n.language === 'ar' ? 'ltr' : 'rtl';*/
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, [i18n.language]);
    return (
        <>
            <Header />
            <DiscoverContainer discover={<DiscoverSyria />} />
            <CardContainer />
            <MapView />
            <Footer />
        </>

    )
}

export default Home

{/*<audio ref={audioRef} src="/rafraf.mp3" preload="auto"></audio>*/ }
import { useEffect, useRef, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { useTranslation } from 'react-i18next';
import MapView from '../Components/MapView';

function State() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [id, setId] = useState<string>();
    const { i18n } = useTranslation();
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'ltr' : 'rtl';
        if (audioRef.current) {
            audioRef.current.play();
        }
        const url = window.location.href;
        const params = new URL(url).searchParams;
        const id = params.get("id");
        setId(id!);

    }, [i18n.language]);

    return (
        <>
            <Header />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 justify-center items-center m-auto h-full justify-items-center items-center">
                <MapView id={id} />
                <div className="flex items-center justify-center h-screen">HELLO</div>
            </div>
            <Footer />
        </>

    )
}

export default State

{/*<audio ref={audioRef} src="/rafraf.mp3" preload="auto"></audio>*/ }
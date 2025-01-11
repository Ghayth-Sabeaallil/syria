import { useEffect, useRef, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { useTranslation } from 'react-i18next';
import MapGoogle from '../Components/MapGoogle';

function State() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [id, setId] = useState<string>();

    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'ltr' : 'rtl';
        if (audioRef.current) {
            audioRef.current.play();
        }
        const url = window.location.href;
        const params = new URL(url).searchParams;
        const ids = params.get("id");
        setId(ids!);
        document.title = `${t('syria')} - ${ids}`

    }, [i18n.language]);

    console.log(id)
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 justify-center items-center m-auto h-screen p-6">
                <MapGoogle id={id} />
                <div>Hello</div>
            </div>
            <Footer />
        </>

    )
}

export default State

{/*<audio ref={audioRef} src="/rafraf.mp3" preload="auto"></audio>*/ }
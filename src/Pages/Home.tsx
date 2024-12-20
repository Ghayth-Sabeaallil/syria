import { useEffect, useRef } from 'react';
import Footer from '../Components/Footer';
import MapView from '../Components/MapView';
import Header from '../Components/Header';


function Home() {
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        // Play sound when the page loads
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);
    return (
        <>
            <Header />
            <MapView />
            <Footer />
            <audio ref={audioRef} src="/rafraf.mp3" preload="auto"></audio>

        </>

    )
}

export default Home

{/**/ }
import { useEffect, useRef } from 'react';
import Footer from '../Components/Footer';
import MapView from '../Components/MapView';
import Header from '../Components/Header';
import { MapContainer } from '../Components/MapContainer';


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
            <MapContainer map={<MapView />} />
            <Footer />
        </>

    )
}

export default Home

{/*<audio ref={audioRef} src="/rafraf.mp3" preload="auto"></audio>*/ }
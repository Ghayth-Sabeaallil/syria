import { useEffect, useRef } from 'react';
import Footer from '../Components/Footer';
import MapView from '../Components/MapView';
import Header from '../Components/Header';
import { DiscoverSyria } from '../Components/DiscoverSyria';
import Container from '../Components/Container';


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
            <Container discover={<DiscoverSyria />} />
            <Footer />
        </>

    )
}

export default Home

{/*<audio ref={audioRef} src="/rafraf.mp3" preload="auto"></audio>*/ }
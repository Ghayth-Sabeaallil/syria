import { useRef } from 'react';
import Aleppo from '../Components/States/Aleppo';
import Damascus from '../Components/States/Damascus';
import Daraa from '../Components/States/Daraa';
import DayrAzZawr from '../Components/States/DayrAzZawr';
import Hama from '../Components/States/Hama';
import Hasaka from '../Components/States/Hasaka';
import Homs from '../Components/States/Homs';
import Idlib from '../Components/States/Idlib';
import Latakia from '../Components/States/Latakia';
import Quneitra from '../Components/States/Quneitra';
import Raqqah from '../Components/States/Raqqah';
import RefDamascus from '../Components/States/RefDamascus';
import Suwayda from '../Components/States/Suwayda';
import Tartus from '../Components/States/Tartus';
import "../index.css"

const MapView = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    return (
        <svg id='mySvg' ref={svgRef} baseProfile="tiny" fill="#326640" height="100vh" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" version="1.2" viewBox="0 0 1000 918" width="100%" xmlns="http://www.w3.org/2000/svg" className='transition-all duration-1500 ease-in-out' >
            <Idlib />
            <Aleppo />
            <Homs />
            <Hama />
            <Damascus />
            <RefDamascus />
            <Daraa />
            <Suwayda />
            <Quneitra />
            <Raqqah />
            <Hasaka />
            <DayrAzZawr />
            <Tartus />
            <Latakia />
        </svg>
    )
}

export default MapView
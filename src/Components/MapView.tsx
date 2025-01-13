import { useRef, useState } from 'react';
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
import StateInfo from './StateInfo';



const MapView = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [id, setId] = useState<string>();

    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 justify-center items-center m-auto h-screen">
            <svg id='mySvg' ref={svgRef} baseProfile="tiny" fill="#326640" height="100vh" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" version="1.2" viewBox="0 0 1000 918" width="100%" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-1500 ease-in-out" >
                <Idlib handleClick={(e) => setId(e.currentTarget.id)} />
                <Aleppo handleClick={(e) => setId(e.currentTarget.id)} />
                <Homs handleClick={(e) => setId(e.currentTarget.id)} />
                <Hama handleClick={(e) => setId(e.currentTarget.id)} />
                <Damascus handleClick={(e) => setId(e.currentTarget.id)} />
                <RefDamascus handleClick={(e) => setId(e.currentTarget.id)} />
                <Daraa handleClick={(e) => setId(e.currentTarget.id)} />
                <Suwayda handleClick={(e) => setId(e.currentTarget.id)} />
                <Quneitra handleClick={(e) => setId(e.currentTarget.id)} />
                <Raqqah handleClick={(e) => setId(e.currentTarget.id)} />
                <Hasaka handleClick={(e) => setId(e.currentTarget.id)} />
                <DayrAzZawr handleClick={(e) => setId(e.currentTarget.id)} />
                <Tartus handleClick={(e) => setId(e.currentTarget.id)} />
                <Latakia handleClick={(e) => setId(e.currentTarget.id)} />
            </svg>
            {id ? <StateInfo id={id} /> : <StateInfo id={"syria"} />}
        </div>

    )
}

export default MapView
import React, { useRef } from 'react';
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

    const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
        if (!svgRef.current) return;
        const clickedPath = event.target as SVGPathElement;
        const pathBounds = clickedPath.getBBox();
        const pathCenterX = pathBounds.x + pathBounds.width / 2;
        const pathCenterY = pathBounds.y + pathBounds.height / 2;
        const scaleFactor = 2;
        const translateX = 1000 / 2 - pathCenterX * scaleFactor;
        const translateY = 918 / 2 - pathCenterY * scaleFactor;
        clickedPath.style.transition = 'transform 2s ease-in-out';
        clickedPath.setAttribute('transform', `translate(${translateX}, ${translateY}) scale(${scaleFactor})`);
    };

    const handlePathDoubleClick = (event: React.MouseEvent<SVGPathElement>) => {
        if (!svgRef.current) return;
        const clickedPath = event.target as SVGPathElement;
        clickedPath.style.transition = 'transform 2s ease-in-out';
        clickedPath.setAttribute('transform', '');
    };
    return (
        <svg id='mySvg' ref={svgRef} baseProfile="tiny" fill="#326640" height="100vh" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" version="1.2" viewBox="0 0 1000 918" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ transition: "all 2s ease" }} >
            <Idlib handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Aleppo handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Homs handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Hama handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Damascus handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <RefDamascus handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Daraa handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Suwayda handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Quneitra handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Raqqah handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Hasaka handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <DayrAzZawr handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Tartus handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
            <Latakia handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} />
        </svg>
    )
}

export default MapView

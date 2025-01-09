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

type MapViewProps = {
    id?: string;
};
const MapView = ({ id }: MapViewProps) => {
    const svgRef = useRef<SVGSVGElement>(null);

    const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
        window.open(`/state?id=${event.currentTarget.id}`, '_blank');
    };

    const handleClick = (event: React.MouseEvent<SVGPathElement>): boolean => {
        if (event.currentTarget.id === id) {
            return true;
        }
        else {
            return false;
        }
    };

    return (
        <svg id='mySvg' ref={svgRef} baseProfile="tiny" fill="#326640" height="100vh" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" version="1.2" viewBox="0 0 1000 918" width="100%" xmlns="http://www.w3.org/2000/svg" className='transition-all duration-1500 ease-in-out' >
            <Idlib handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Idlib' } } as React.MouseEvent<SVGPathElement>)} />
            <Aleppo handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Aleppo' } } as React.MouseEvent<SVGPathElement>)} />
            <Homs handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Homs' } } as React.MouseEvent<SVGPathElement>)} />
            <Hama handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Hama' } } as React.MouseEvent<SVGPathElement>)} />
            <Damascus handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Damascus' } } as React.MouseEvent<SVGPathElement>)} />
            <RefDamascus handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'RefDamascus' } } as React.MouseEvent<SVGPathElement>)} />
            <Daraa handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Daraa' } } as React.MouseEvent<SVGPathElement>)} />
            <Suwayda handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Suwayda' } } as React.MouseEvent<SVGPathElement>)} />
            <Quneitra handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Quneitra' } } as React.MouseEvent<SVGPathElement>)} />
            <Raqqah handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Raqqah' } } as React.MouseEvent<SVGPathElement>)} />
            <Hasaka handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Hasaka' } } as React.MouseEvent<SVGPathElement>)} />
            <DayrAzZawr handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'DayrAzZawr' } } as React.MouseEvent<SVGPathElement>)} />
            <Tartus handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Tartus' } } as React.MouseEvent<SVGPathElement>)} />
            <Latakia handleClick={handlePathClick} isClicked={handleClick({ currentTarget: { id: 'Latakia' } } as React.MouseEvent<SVGPathElement>)} />
        </svg>
    )
}

export default MapView


/*
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
*/
import { useEffect, useRef, useState } from 'react';
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

const MapView = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [viewBox, setViewBox] = useState<number[]>([0, 0, 1000, 918]);
    const [width, setWidth] = useState<number>();


    useEffect(() => {
        const screen: number = window.innerWidth;
        setWidth(screen);
    }, []);
    let animationFrame: number;

    const smoothViewBoxTransition = (
        start: number[],
        end: number[],
        duration: number
    ) => {
        const startTime = performance.now();

        const animate = () => {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Progress ratio (0 to 1)
            const interpolated = start.map(
                (val, index) => val + (end[index] - val) * progress
            );
            if (svgRef.current) {
                svgRef.current.setAttribute("viewBox", interpolated.join(" "));
            }
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        cancelAnimationFrame(animationFrame); // Cancel any ongoing animations
        animationFrame = requestAnimationFrame(animate);
    };

    const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
        if (!svgRef.current) return;
        const path = event.target as SVGPathElement;
        const bbox = path.getBBox();
        smoothViewBoxTransition(viewBox, [bbox.x, bbox.y, bbox.width, bbox.height], 900);
        setViewBox([bbox.x, bbox.y, bbox.width, bbox.height]);
        /*
        
        */
    };

    const handlePathDoubleClick = () => {
        if (!svgRef.current) return;
        smoothViewBoxTransition(viewBox, [0, 0, 1000, 918], 900);
        setViewBox([0, 0, 1000, 918]);
    };
    return (
        <svg ref={svgRef} baseProfile="tiny" fill="#326640" height="100vh" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" version="1.2" viewBox="0 0 1000 918" width="100vw" xmlns="http://www.w3.org/2000/svg" style={{ transition: "all 2s ease" }}>
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
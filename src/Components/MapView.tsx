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

const MapView = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [viewBox, setViewBox] = useState<number[]>([0, 0, 1000, 918]);
    const [clicked, isClicked] = useState<string>();


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
        isClicked(event.currentTarget.id);
        if (!svgRef.current) return;
        console.log(event.target);
        const path = event.target as SVGPathElement;
        const bbox = path.getBBox();
        const padding = 35;
        smoothViewBoxTransition(viewBox, [bbox.x + padding, bbox.y - padding, bbox.width + 2 * padding, bbox.height + 2 * padding], 900);
        setViewBox([bbox.x + padding, bbox.y - padding, bbox.width + 2 * padding, bbox.height + 2 * padding]);
    };

    const handlePathDoubleClick = () => {
        if (!svgRef.current) return;
        smoothViewBoxTransition(viewBox, [0, 0, 1000, 918], 900);
        setViewBox([0, 0, 1000, 918]);
    };
    return (
        <svg ref={svgRef} baseProfile="tiny" fill="#326640" height="99vh" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" version="1.2" viewBox="0 0 1000 918" width="100vw" xmlns="http://www.w3.org/2000/svg" style={{ transition: "all 2s ease" }}>
            <Idlib handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Aleppo handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Homs handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Hama handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Damascus handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <RefDamascus handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Daraa handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Suwayda handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Quneitra handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Raqqah handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Hasaka handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <DayrAzZawr handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Tartus handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
            <Latakia handleClick={handlePathClick} handleDoubleClick={handlePathDoubleClick} isClicked={clicked} />
        </svg>
    )
}

export default MapView
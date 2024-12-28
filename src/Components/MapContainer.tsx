import { ReactNode } from "react";
import "../index.css";

export type MapContainerProp = {
    map?: ReactNode;
};
export const MapContainer = ({ map }: MapContainerProp) => {
    return (
        <div className="slider">
            <img src="/1.jpg" alt="Image 1" />
            <img src="/2.jpg" alt="Image 2" />
            <img src="/3.jpg" alt="Image 3" />
            <img src="/4.jpg" alt="Image 4" />
            <img src="/5.jpg" alt="Image 5" />
            <img src="/6.jpg" alt="Image 6" />
            <img src="/7.jpg" alt="Image 7" />
            {map}
        </div>
    )
}

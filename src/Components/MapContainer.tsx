import { ReactNode } from "react";
import "../index.css";

export type MapContainerProp = {
    map?: ReactNode;
};
export const MapContainer = ({ map }: MapContainerProp) => {
    return (
        <>
            <div className="slider">

                {map}
            </div></>

    )
}

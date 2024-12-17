import { ReactNode } from "react";

type ParentProps = {
    children: ReactNode;
};
const MapView = ({ children }: ParentProps) => {
    return (
        <svg baseProfile="tiny" fill="grey" height="918" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" version="1.2" viewBox="0 0 1000 918" width="1000" xmlns="http://www.w3.org/2000/svg">
            <g id="features">
                {children}
            </g>
        </svg>
    )
}

export default MapView